import User from '../models/User.js'; // Import the User model
import jwt from 'jsonwebtoken';

// Register a new user (Clerk-based)
export const registerUser = async (req, res) => {
    const { email, username, clerkId } = req.body;

    try {
        // Check if the user already exists by clerkId
        const existingUser = await User.findOne({ clerkId });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user object
        const user = new User({ email, username, clerkId });

        await user.save(); // Save the user to the database
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// User login (Clerk-based)
export const loginUser = async (req, res) => {
    const { clerkId } = req.body;

    try {
        // Find user by Clerk ID
        const user = await User.findOne({ clerkId });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};
