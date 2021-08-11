import express, { Request, Response } from "express";
import cors from 'cors';

const PORT = 3001;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})