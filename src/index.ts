import express from 'express';
import demoBooks from './demoBooks';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Hello World!");
});

app.get('/books-list', (req, res) => {
    res.status(200).json(demoBooks);
});

const port: number = 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
