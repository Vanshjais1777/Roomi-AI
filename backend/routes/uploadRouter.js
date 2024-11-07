import { Router } from 'express';
import upload from '../middleware/multer.js';
import { uploadBp } from '../controllers/uploadController.js';

const router = Router();

// Define the upload route
router.post('/uploadBp', upload.single('image'), uploadBp);

export default router;