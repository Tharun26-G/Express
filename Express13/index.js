const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

const users = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.send('User registered successfully');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && user.password === password) {
        req.session.user = user;
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.get('/dashboard', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        res.send(`Welcome to your dashboard, ${req.session.user.username}`);
    }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});