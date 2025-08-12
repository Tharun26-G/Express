const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(express.json());

const users = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.send('User registered successfully');
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ username }, 'test#secret');
        res.json({ message: 'Login successful', token });
    } else {
        res.json({ message: 'Invalid credentials' });
    }
});


app.get('/dashboard', (req, res) => {
    const token = req.header('authorization');

    try {
        const decodedtoken = jwt.verify(token, 'test#secret');
        if (decodedtoken.username) {
            res.send(`Welcome to your dashboard, ${decodedtoken.username}`);
        } else {
            res.send('Unauthorized');
        }
    } catch (err) {
        res.send('Invalid or expired token');
    }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});