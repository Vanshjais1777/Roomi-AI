import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useClerk, useUser } from '@clerk/clerk-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { signOut } = useClerk();
    const { isSignedIn, user } = useUser(); // Access user details
    const navigate = useNavigate();
    const clerk = useClerk();

    const handleLogout = () => {
        signOut();
        navigate('/');
    };

    // Mobile menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the mobile menu
    };

    // Login function
    const handleLogin = () => {
        if (clerk) {
            clerk.openSignIn(); // Open Clerk's sign-in page
        } else {
            console.error('Clerk instance is not available.');
        }
    };

    return (
        <nav className="shadow-lg border border-gray-400 h-20 bg-white relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="w-28 flex justify-center items-center ml-1">
                        <NavLink to="/">
                            <div className="text-2xl font-bold text-blue-600 font-mono">Roomi AI</div>
                        </NavLink>
                    </div>

                    <div className="hidden md:flex space-x-8 font-semibold text-lg">
                        <NavLink to="/" className="hover:bg-blue-300 px-3 py-2 rounded-md">Home</NavLink>
                        <NavLink to="/about" className="hover:bg-blue-300 px-3 py-2 rounded-md">About</NavLink>
                        <NavLink to="/services" className="hover:bg-blue-300 px-3 py-2 rounded-md">Services</NavLink>
                        <NavLink to="/contact" className="hover:bg-blue-300 px-3 py-2 rounded-md">Contact</NavLink>

                        {/* Show Logout button if logged in */}
                        {isSignedIn && (
                            <div onClick={handleLogout}>
                                <NavLink to="/" className="block px-3 py-2 rounded-md font-semibold hover:bg-red-600 text-lg">
                                    Logout
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* Show Login button if user is not logged in */}
                    {!isSignedIn && (
                        <div className='bg-blue-700 text-white py-1.5 px-4 rounded-lg ml-24 font-semibold'>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    )}

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg
                                className="h-8 w-8 text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white z-50 absolute top-20 left-0 w-full transition-all`}>
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-300">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-300">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-300">
                        Contact
                    </NavLink>
                    <NavLink to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-300">
                        Services
                    </NavLink>
                    {/* Show Logout button only if logged in */}
                    {isSignedIn && (
                        <div onClick={handleLogout}>
                            <NavLink to="/" className="block px-3 py-2 rounded-md font-bold hover:bg-blue-300 text-lg">
                                Logout
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
