import express from 'express';
import multer from 'multer';

const app = express(); 
const upload = multer(); // for parsing multipart/form-data 
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(upload.array('image')); // for parsing multipart/form-data

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/form', (req, res) => {
    console.log(req.body);
    console.log(req.files);// Handle form data and files here
  res.send('Form submitted!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
