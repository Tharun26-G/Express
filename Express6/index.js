const express = require('express');
const app = express();
const port = 3000;

//static file serving
app.use(express.static('public'));  // without using specific routes
// or you can use a specific route
app.use('/public', express.static('public')); // if you want to serve under a specific path

//image serving
app.use('/images', express.static('images')); // serving images from public/images


app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 