import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import questionsRoute from './routes/questions';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import answerRouter from './routes/answer';
import mongoRouter from './routes/mongo';

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

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});
app.use('/questions', questionsRoute);
app.use('/answer', answerRouter);
app.use('/mongo', mongoRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
