import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const uploadBp = async (req, res) => {
    const { roomType, themes } = req.body;

    try {
        const aiResponse = await axios.post(
            'https://api.openai.com/v1/images/generations', // Updated endpoint for image generation
            {
                prompt: `Generate a ${roomType} design with themes: ${themes}.`,
                n: 1, // Number of images you want to generate
                size: "1024x1024" // Set desired image resolution (e.g., "1024x1024")
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
            }
        );

        res.json({ imageUrl: aiResponse.data.data[0].url }); // Sends the image URL in response
    } catch (error) {
        console.error("AI API error:", error);
        res.status(500).send("Failed to generate design suggestions.");
    }
};
