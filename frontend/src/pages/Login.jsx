import React, { useContext, useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BackendUrlContext } from '../context/BackendUrlContext';
import { AuthContext } from '../context/authContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const backendUrl = useContext(BackendUrlContext);
    const { login, isLoggedIn } = useContext(AuthContext);

    // If the user is logged in, redirect to the home page
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendUrl + '/api/users/login', { email, password });
            localStorage.setItem('token', response.data.token);
            login();
            navigate("/");
        } catch (error) {
            console.error('Login Error:', error.response?.data?.message || error.message);
        }
    };

    const handleGoogleLogin = async (response) => {
        try {
            const { credential } = response;
            const googleResponse = await axios.post('/api/users/google-login', { idToken: credential });
            console.log('Google Login Successful:', googleResponse.data);
            localStorage.setItem('token', googleResponse.data.token);
            login();
            navigate("/"); // Redirect to the home page after successful login
        } catch (error) {
            console.error('Google Login Error:', error.response?.data?.message || error.message);
        }
    };

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <div className="min-h-screen flex items-center justify-center bg-blue-500 p-6">
                <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 space-y-6">
                    <h2 className="text-2xl font-semibold text-center text-gray-900">Login</h2>
                    <p className="text-center text-gray-600">Please login to your account</p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <button type="submit" className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition">
                            Login
                        </button>
                    </form>
                    <div className="flex items-center justify-center space-x-2">
                        <span className="text-gray-500">Or</span>
                    </div>
                    <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={(error) => console.error('Google Login Failed:', error)}
                        theme="outline"
                        size="large"
                        className="w-full"
                    />
                    <p className="text-center text-gray-500">
                        New user?
                        <button className='ml-3 text-blue-700' onClick={() => navigate("/signup")}>Signup here</button>
                    </p>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
