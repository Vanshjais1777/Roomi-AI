import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    username: {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required: true,
        unique: true, // Ensure clerkId is unique
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Update `updatedAt` field before saving
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
