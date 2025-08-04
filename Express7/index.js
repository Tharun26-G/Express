const express = require('express');
const app = express();  
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/form', (req, res) => {
    console.log(req.body);
  res.send('Form submitted!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
