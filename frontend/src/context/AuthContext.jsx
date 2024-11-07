import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext with default value
export const AuthContext = createContext();

// Create the AuthProvider component to provide auth state
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Retrieve login state from localStorage
        const storedLoginState = localStorage.getItem('isLoggedIn');
        return storedLoginState === 'true'; // If 'true', user is logged in, otherwise false
    });

    useEffect(() => {
        // Update localStorage whenever the login state changes
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    // Function to log in and set the auth state
    const login = () => {
        setIsLoggedIn(true);
    };

    // Function to log out and reset the auth state
    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
