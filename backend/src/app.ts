import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import openAIRoute from './routes/openai';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const mongoURL = `mongodb+srv://Evan-Ferreira:${process.env.MONGODB_PASS}@evanbase.mck36z4.mongodb.net/?retryWrites=true&w=majority&appName=evanbase`;

try {
    mongoose.connect(mongoURL);
    console.log('Connected to MongoDB...');
} catch (error) {
    console.log(error);
}

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});
app.use('/openai', openAIRoute);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
