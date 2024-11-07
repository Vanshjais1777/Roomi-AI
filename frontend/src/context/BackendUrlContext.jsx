import React, { createContext, useContext } from 'react';

// Create context
export const BackendUrlContext = createContext();

// Provider component
export const BackendUrlProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Access VITE_BACKEND_URL from .env

    return (
        <BackendUrlContext.Provider value={backendUrl}>
            {children}
        </BackendUrlContext.Provider>
    );
};

