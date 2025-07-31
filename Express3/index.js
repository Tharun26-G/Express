const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send("hello express");
})

app.post('/user', express.json(), (req,res) => { //express.json is middleware
    const { name, email } = req.body;
    res.json({
        message: `user ${name} with email ${email} is created successfully`
    });
});

app.listen(port, () => {
    console.log(`port is listening on ${port}`);
})