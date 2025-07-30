import express from 'express';
import userRoutes from './routes/userroutes.js';

const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})