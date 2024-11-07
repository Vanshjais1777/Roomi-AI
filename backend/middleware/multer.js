// middleware/multer.js
import multer from 'multer';

// Configure Multer storage as memory storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true); // accept file
    } else {
        cb(new Error('Only image files are allowed!'), false); // reject file
    }
};

const upload = multer({ storage, fileFilter });
export default upload;
