const express = require('express');
const app = express();
const port = 3000;

//next is middleware her
app.use((req, res, next) => {
    console.log("time is" + Date.now())
    next(); 
});


app.get('/', (req, res) => {
    res.send("hello express");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
