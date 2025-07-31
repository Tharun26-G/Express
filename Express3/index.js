const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.get('/', (req,res) => {
    res.send("hello express");
})

app.post('/user', (req,res) => { //express.json is middleware
    const { name, email } = req.body;
    res.json({
        message: `user ${name} with email ${email} is created successfully`
    });
});

app.put('/user/:id', (req, res) => { //express.json is middleware
    const userId = req.params.id;
    const { name, email } = req.body;
    res.json({
        message: `userId ${userId} user ${name} with email ${email} is created successfully`
    });
});

app.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({
        message: `userId ${userId} is deleted successfully`
    });
});


//multiple routes
app.get('/things/:name/:id', (req, res)=>{
    const { name, id } = req.params
    res.json({
        id,
        name
    })
})

//handling 404 for unmatched routes
app.get('*', (req, res) => {
  res.status(404).send('404 - Route Not Found');
});
app.listen(port, () => {
    console.log(`port is listening on ${port}`);
})