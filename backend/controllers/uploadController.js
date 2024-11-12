import axios from 'axios';
import fs from 'fs';
import dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.STABILITY_AI_API_KEY;

console.log('API Key:', apiKey);  // Ensure the API key is loaded properly

const generateImage = async (prompt) => {
    const url = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2";

    try {
        console.log("Sending request with URL:", url);
        console.log("Request Headers:", {
            Authorization: `Bearer ${apiKey}`,
        });
        console.log("Request Body:", { inputs: prompt });

        const response = await axios.post(
            url,
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
                responseType: "arraybuffer",
            }
        );

        fs.writeFileSync("generated_image.png", response.data);
        console.log("Image saved as generated_image.png");

    } catch (error) {
        console.error("Error generating image:", error.response ? error.response.data : error.message);
        if (error.response && error.response.data) {
            console.log("Raw error response data:", JSON.stringify(error.response.data, null, 2));
        }
    }
};

export const uploadBp = async (req, res) => {
    const { roomType, themes } = req.body;
    const prompt = `Generate a ${roomType} design with themes: ${themes}.`;
    generateImage(prompt);
};
