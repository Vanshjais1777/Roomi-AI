import React, { useContext } from 'react';
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
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BackendUrlContext } from '../context/BackendUrlContext';
const UploadBlueprint = () => {

    const { isLoggedIn } = useContext(AuthContext);
    const backendUrl = useContext(BackendUrlContext);
    const navigate = useNavigate();
    const handleButtonClick = async () => {
        try {
            if (isLoggedIn) {
                const [fileHandle] = await window.showOpenFilePicker({
                    types: [
                        {
                            description: 'Image Files',
                            accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp'] },
                        },
                    ],
                    multiple: false,
                });

                const file = await fileHandle.getFile();
                const formData = new FormData();
                formData.append('image', file);

                const response = await axios.post(backendUrl + "/api/uploads/uploadBp", formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                console.log("Upload success");
            } else if (!isLoggedIn) {
                navigate("/login");
            }
        } catch (error) {
            console.error("File selection was canceled or failed:", error);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-tr from-blue-300 via-teal-100 to-blue-300">
            {/* Add a subtle texture or a background image */}
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-20" style={{ backgroundImage: 'url(https://example.com/texture.jpg)' }}></div>

            <div className="flex flex-col items-center space-y-8 relative z-10">
                <div className="w-screen">
                    <NavBar />
                </div>

                <div className="m-4 md:w-3/4 lg:w-1/2 xl:w-1/3">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Upload a Photo of Your Room</h2>
                        <div className="p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-lg">
                            <button
                                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                                onClick={handleButtonClick}
                            >
                                Upload Image
                            </button>
                            <h3 className="mt-4 text-gray-600 text-base">...or drag and drop an image.</h3>
                        </div>
                    </div>

                    <div className="w-full mt-12">
                        <div className="flex justify-center items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Select Room Type</h3>
                        </div>
                        <div className="flex justify-center min-w-40">
                            <select
                                name="room_type"
                                id="room_type"
                                className="p-3 border border-gray-400 rounded-md text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Room Type</option>
                                <option value="Living Room">Living Room</option>
                                <option value="Dining Room">Dining Room</option>
                                <option value="Bedroom">Bedroom</option>
                                <option value="Bathroom">Bathroom</option>
                                <option value="Office">Office</option>
                                <option value="Kitchen">Kitchen</option>
                                <option value="Basement">Basement</option>
                                <option value="Outdoor Patio">Outdoor Patio</option>
                                <option value="Gaming Room">Gaming Room</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full mt-12">
                        <div className="flex justify-center items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">Select Room Themes (up to 4)</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            <RoomThemes src={modern} text="Modern" />
                            <RoomThemes src={coastal} text="Coastal" />
                            <RoomThemes src={industrial} text="Industrial" />
                            <RoomThemes src={neoclassic} text="Neo-Classic" />
                            <RoomThemes src={professional} text="Professional" />
                            <RoomThemes src={summer} text="Summer" />
                            <RoomThemes src={tribal} text="Tribal" />
                            <RoomThemes src={tropical} text="Tropical" />
                            <RoomThemes src={vintage} text="Vintage" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4 mt-12">
                        <button className="w-full md:w-auto px-8 py-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transform hover:scale-105 transition-all duration-200">
                            Render Designs
                        </button>
                        <p className="text-gray-500">Cost: 0 credit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadBlueprint;
