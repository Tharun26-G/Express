const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const app = express();
const port = 3000;

app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
})
//session 
app.get('/visit', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of visits: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to the site!');
  }
});

//remove session
app.get('/remove-visit', (req, res) => {
    req.session.destroy();
    res.send("Session removed");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});