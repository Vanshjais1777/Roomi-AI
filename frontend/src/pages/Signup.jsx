import React, { useContext, useEffect } from 'react';
import { BackendUrlContext } from '../context/BackendUrlContext';
import { useNavigate } from 'react-router-dom';
import { SignUp, useUser } from '@clerk/clerk-react';
import axios from 'axios';

const Signup = () => {
    const backendUrl = useContext(BackendUrlContext);
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const sendUserDataToBackend = async () => {
                try {
                    const response = await axios.post(`${backendUrl}/api/users/signup`, {
                        username: user.username,
                        email: user.primaryEmailAddress?.emailAddress,
                        clerkId: user.id
                    });
                    console.log('User data sent to backend:', response.data);
                    localStorage.setItem('token', response.data.token); // Store token
                    navigate("/"); // Redirect after signup
                } catch (error) {
                    console.error('Error sending user data:', error);
                }
            };
            sendUserDataToBackend();
        }
    }, [user, backendUrl, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <SignUp path="/sign-up" routing="path" signUpUrl="/sign-up" />
        </div>
    );
};

export default Signup;
