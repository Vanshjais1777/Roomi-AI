import { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from '@clerk/clerk-react'; // Use the Clerk useAuth hook

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { isSignedIn, isLoaded } = useAuth(); // Clerk's authentication hooks
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Start with false until we know the status

    useEffect(() => {
        if (isLoaded) {
            if (isSignedIn) {
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
            } else {
                setIsLoggedIn(false);
                localStorage.setItem('isLoggedIn', 'false');
            }
        }
    }, [isSignedIn, isLoaded]); // Only depend on isSignedIn and isLoaded

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
