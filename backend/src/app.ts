import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
