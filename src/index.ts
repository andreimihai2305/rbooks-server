import express from 'express';
import demoBooks from './demoBooks';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json("Hello World!");
});

app.get('/books-list', (req, res) => {
    res.status(200).json(demoBooks);
});

const port: number = 3001;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
