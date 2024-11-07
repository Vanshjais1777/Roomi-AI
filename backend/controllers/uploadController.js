import cloudinary from '../config/cloudinary.js';

export const uploadBp = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Upload the file to Cloudinary
        const result = await cloudinary.uploader.upload_stream(
            { folder: 'blueprints' },
            (error, result) => {
                if (error) return res.status(500).json({ error: 'Upload to Cloudinary failed' });

                // Success response with Cloudinary URL
                res.status(200).json({
                    message: 'File uploaded successfully',
                    url: result.secure_url,
                    public_id: result.public_id,
                });
            }
        );

        // Pipe the file buffer into Cloudinary stream
        result.end(req.file.buffer);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
