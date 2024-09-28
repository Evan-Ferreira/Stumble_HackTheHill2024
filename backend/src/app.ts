import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
