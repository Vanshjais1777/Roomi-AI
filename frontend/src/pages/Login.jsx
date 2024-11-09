import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackendUrlContext } from '../context/BackendUrlContext';
import { AuthContext } from '../context/AuthContext';
import { SignIn, useUser } from '@clerk/clerk-react';
import axios from 'axios';

const Login = () => {
    const backendUrl = useContext(BackendUrlContext);
    const { login } = useContext(AuthContext);
    const { user } = useUser(); // Access Clerk user data
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const sendUserDataToBackend = async () => {
                try {
                    const response = await axios.post(`${backendUrl}/api/users/login`, {
                        email: user.primaryEmailAddress?.emailAddress,
                        clerkId: user.id
                    });
                    console.log('User data sent to backend:', response.data);
                    localStorage.setItem('token', response.data.token); // Store token
                    login(); // Update AuthContext state
                    navigate("/"); // Redirect after successful login
                } catch (error) {
                    console.error('Error sending user data:', error);
                }
            };
            sendUserDataToBackend();
        }
    }, [user, backendUrl, login, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-500 p-6">
            <SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' />
        </div>
    );
};

export default Login;
