// pages/api/upload-profile-picture.ts
import { NextApiRequest } from 'next';
import { Response } from 'express'; // Import express Response
import multer from 'multer';
import { NextApiRequestWithFile } from '@/app/types/multer';
import { query } from '@/lib/db'; // Adjust this import based on your db connection file

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/', // Directory where files will be saved
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use original file name
    },
  }),
});

const uploadMiddleware = upload.single('profile_picture');

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to allow multer to handle it
  },
};

const handler = async (req: NextApiRequestWithFile, res: Response) => {
  uploadMiddleware(req as any, res as any, async (err: any) => { // Cast to any to avoid type issues
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to upload file.' });
    }

    const userId = req.body.user_id; // Get user_id from request body

    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required.' });
    }

    try {
      // Update the user's profile picture URL in the database
      await query('UPDATE users SET profile_picture = ? WHERE user_id = ?', [`/uploads/${req.file?.filename}`, userId]);

      res.status(200).json({ success: true, profile_picture_url: `/uploads/${req.file?.filename}` });
    } catch (error) {
      console.error('Error updating profile picture in database:', error);
      res.status(500).json({ success: false, message: 'Failed to update profile picture in database.' });
    }
  });
};

export default handler;
