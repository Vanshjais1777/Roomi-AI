import React from 'react';
import NavBar from '../components/NavBar';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-blue-500 flex flex-col items-center px-6 pb-6">
            <div className="w-screen fixed">
                <NavBar />
            </div>
            <h1 className="text-4xl font-bold text-black mb-6 mt-6">About Roomi AI</h1>
            <p className="text-lg text-white max-w-2xl text-center">
                Roomi AI is a cutting-edge platform designed to help you create your dream interiors effortlessly.
                From arranging furniture to choosing color schemes, our AI-powered tool provides personalized suggestions and visualizations
                to turn your vision into reality. Experience a new level of interior design with Roomi AI.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 space-y-6 md:space-y-0 md:space-x-8">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-xs text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Our Mission</h2>
                    <p className="mt-4 text-gray-500">
                        Empowering everyone to design spaces that reflect their personality, seamlessly integrating AI to make interior design accessible to all.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-8 max-w-xs text-center">
                    <h2 className="text-xl font-semibold text-gray-700">Our Vision</h2>
                    <p className="mt-4 text-gray-500">
                        To be a leader in AI-driven interior design, helping people create beautiful, functional spaces.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
