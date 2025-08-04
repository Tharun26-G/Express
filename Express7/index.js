import express from 'express';
import multer from 'multer';
import { storage } from './config/multer.js'; // Importing storage configuration

//move this config to a separate file if needed
/* const storage = multer.diskStorage({
    destination: 'uploads'
    //file name
    , filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname); // appending timestamp to the original file name
        }
});
*/

const app = express(); 
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024000 } // limit file size to 1MB
 }); // for parsing multipart/form-data 
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
