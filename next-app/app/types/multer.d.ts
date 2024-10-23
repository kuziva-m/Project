// app/types/multer.d.ts
import { NextApiRequest } from 'next';
import { Request } from 'express'; // Import express request type

// Extend NextApiRequest to include the file property
export interface NextApiRequestWithFile extends NextApiRequest, Request {
  file?: {
    originalname: string;
    filename: string;
    path: string; // Path to the saved file
  };
}
