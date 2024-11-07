import React from 'react';
import NavBar from '../components/NavBar';

const Contact = () => {
    return (
        <div className="min-h-screen bg-blue-500 flex flex-col items-center px-6 ">
            <div className="w-screen">
                <NavBar />
            </div>
            <h1 className="text-4xl font-bold text-black mb-6 mt-6">Contact Us</h1>
            <p className="text-lg text-white max-w-xl text-center mb-10">
                Have questions or need assistance? We're here to help! Feel free to reach out to us through any of the methods below.
            </p>
            <form className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
                <label className="block mb-4">
                    <span className="text-gray-800">Name</span>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Your Name" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-800">Email</span>
                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Your Email" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-800">Message</span>
                    <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows="3" placeholder="Your Message"></textarea>
                </label>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                    Send Message
                </button>
            </form>
            <div className="mt-10 text-black text-center">
                <p>Or reach out directly at: <span className="font-semibold text-black">support@roomiai.com</span></p>
                <p>Phone: <span className="font-semibold text-black">+1-800-123-4567</span></p>
            </div>
        </div>
    );
};

export default Contact;
