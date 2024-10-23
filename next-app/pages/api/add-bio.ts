import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/lib/db'; // Adjust this import based on your db connection file

const addBioHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { user_id, bio } = req.body;

    // Validate the input
    if (!user_id || !bio) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
      // Update the bio in the database
      await query('UPDATE users SET bio = ? WHERE id = ?', [bio, user_id]);

      return res.status(200).json({ success: true, message: 'Bio added successfully.' });
    } catch (error) {
      console.error('Error adding bio:', error); // Log the error for debugging
      return res.status(500).json({ success: false, message: 'Internal server error.', error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default addBioHandler;
