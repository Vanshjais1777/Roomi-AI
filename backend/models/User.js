import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {  // Add password field
    type: String,
    required: true,
    minlength: 6  // You can also add validation for password length or other criteria
  },
  designs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Design'
    }
  ]
});

// Create the model
const User = mongoose.model('User', userSchema);

export default User;
