// SignupPage.jsx
import React, { useContext, useState } from 'react';
import { BackendUrlContext } from '../context/BackendUrlContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const backendUrl = useContext(BackendUrlContext);
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendUrl + '/api/users/signup', { username, email, password });
            console.log('SignUp Successful:', response.data);
            localStorage.setItem('token', response.data.token);
            navigate("/");
        } catch (error) {
            console.error('Login Error:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                    Already have an account? <a href="/login" className="text-blue-600">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
