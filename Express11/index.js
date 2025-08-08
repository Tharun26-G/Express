const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('name',"express-cookie", { maxAge: 3600000 });
  res.send('Hello World!');
});

//cookie
app.get('/fetch', (req, res) => {
  console.log(req.cookies);  
  res.send("API called");
}); 

//remove cookie
app.get('/remove', (req, res) => {
  res.clearCookie('name');
  res.send("Cookie removed");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});