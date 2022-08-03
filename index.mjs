import express from 'express';
import demoBooks from "./demoBooks.js";

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.get('/books-list', (req, res) => {
    res.status(200).json(demoBooks);
});



const port = 3000;
app.listen(port, () => (console.log(`Server is running on port: ${port}`)));