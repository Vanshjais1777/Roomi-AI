import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import RoomThemes from '../components/RoomThemes';
import modern from '../assets/modern.png';
import coastal from '../assets/coastal.png';
import industrial from '../assets/industrial.png';
import neoclassic from '../assets/neoclassic.png';
import professional from '../assets/professional.png';
import summer from '../assets/summer.png';
import tribal from '../assets/tribal.png';
import tropical from '../assets/tropical.png';
import vintage from '../assets/vintage.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BackendUrlContext } from '../context/BackendUrlContext';

const UploadBlueprint = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const backendUrl = useContext(BackendUrlContext);
    const navigate = useNavigate();
    const [roomType, setRoomType] = useState("");
    const [selectedThemes, setSelectedThemes] = useState([]);
    const [suggestion, setSuggestion] = useState("");

    const handleFileUpload = async () => {
        if (!isLoggedIn) return navigate("/sign-in");

        try {
            const [fileHandle] = await window.showOpenFilePicker({
                types: [{ description: 'Image Files', accept: { 'image/*': ['.png', '.jpg', '.jpeg'] } }],
                multiple: false,
            });
            const file = await fileHandle.getFile();
            const formData = new FormData();
            formData.append('file', file);
            formData.append('roomType', roomType);
            formData.append('themes', JSON.stringify(selectedThemes)); // Convert array to string

            const response = await axios.post(`${backendUrl}/api/uploads/uploadBp`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuggestion(response.data.suggestion);
            console.log("Image uploaded successfully");
        } catch (error) {
            console.error("Error during file upload:", error);
        }
    };

    // const fetchSuggestion = async () => {
    //     if (!roomType || selectedThemes.length === 0) return;

    //     try {
    //         const response = await axios.post(`${backendUrl}/api/uploads/uploadBp`, { roomType, themes: selectedThemes });
    //         setSuggestion(response.data.suggestion);
    //     } catch (error) {
    //         console.error("Error fetching design suggestions:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchSuggestion();
    // }, [roomType]);

    const handleThemeSelect = (theme) => {
        if (selectedThemes.includes(theme)) {
            setSelectedThemes(selectedThemes.filter((t) => t !== theme));
        } else if (selectedThemes.length < 4) {
            setSelectedThemes([...selectedThemes, theme]);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-300 via-teal-100 to-blue-300">
            <NavBar />
            <div className="m-4 md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">Upload a Photo of Your Room</h2>
                <div className="p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
                    <button
                        className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-all duration-200"
                        onClick={handleFileUpload}
                    >
                        Upload Image
                    </button>
                </div>

                <div className="w-full mt-8">
                    <h3 className="text-xl font-semibold text-gray-800">Select Room Type</h3>
                    <select
                        name="room_type"
                        id="room_type"
                        className="p-3 border border-gray-400 rounded-md text-lg text-gray-700 mt-2 w-full"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                    >
                        <option value="">Select Room Type</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Dining Room">Dining Room</option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="Bathroom">Bathroom</option>
                        <option value="Office">Office</option>
                        <option value="Kitchen">Kitchen</option>
                    </select>

                    <p className="mt-4 text-lg">Selected Room Type: {roomType || "None"}</p>
                </div>

                <div className="w-full mt-8">
                    <h3 className="text-xl font-semibold text-gray-800">Select Room Themes (up to 4)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                        <RoomThemes src={modern} text="Modern" onClick={() => handleThemeSelect("Modern")} />
                        <RoomThemes src={coastal} text="Coastal" onClick={() => handleThemeSelect("Coastal")} />
                        <RoomThemes src={industrial} text="Industrial" onClick={() => handleThemeSelect("Industrial")} />
                        <RoomThemes src={neoclassic} text="Neo-Classic" onClick={() => handleThemeSelect("Neo-Classic")} />
                        <RoomThemes src={professional} text="Professional" onClick={() => handleThemeSelect("Professional")} />
                        <RoomThemes src={summer} text="Summer" onClick={() => handleThemeSelect("Summer")} />
                        <RoomThemes src={tribal} text="Tribal" onClick={() => handleThemeSelect("Tribal")} />
                        <RoomThemes src={tropical} text="Tropical" onClick={() => handleThemeSelect("Tropical")} />
                        <RoomThemes src={vintage} text="Vintage" onClick={() => handleThemeSelect("Vintage")} />
                    </div>
                </div>

                <p className="mt-4 text-lg">Selected Themes: {selectedThemes.join(", ") || "None"}</p>

                <div className="w-full mt-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">AI-Generated Design Suggestion</h2>
                    <p className="text-gray-600 mt-4">{suggestion || "No suggestion available"}</p>
                </div>
            </div>

            <footer className="bg-gray-800 text-white py-8 mt-12 w-screen">
                <div className="container px-4 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">Roomi AI</h3>
                            <p className="text-sm">Transforming your living spaces with AI-powered design.</p>
                        </div>
                        <div className="flex space-x-8 mb-4 md:mb-0">
                            <a href="#" className="text-gray-400 hover:text-white">About Us</a>
                            <a href="#" className="text-gray-400 hover:text-white">Services</a>
                            <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
                            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold mb-2">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="text-gray-400 hover:text-white" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-gray-400 hover:text-white" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-gray-400 hover:text-white" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-gray-400 hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                        <p className="text-sm">© {new Date().getFullYear()} Roomi AI. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default UploadBlueprint;
