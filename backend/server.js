import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';
import uploadRouter from './routes/uploadRouter.js'
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());

app.use(cors(
    {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }
));

// API EndPoints
app.use('/api/users', userRouter);
app.use('/api/uploads', uploadRouter)

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});