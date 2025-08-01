const express = require('express');
const app = express();
const port = 3000;

//next is middleware her
app.use((req, res, next) => {
    console.log("time is" + Date.now())
    next(); 
});

//route based middleware
app.use('/welcome',(req, res, next) => {
    console.log("time is" + Date.now())
    next(); 
});

//evenet listner - to wait route to complete then continue
app.use('/welcome', (req, res, next) => {
    console.log('start');

    res.on('finish', () => {
        console.log("end")
    })
    next();
})


app.get('/', (req, res) => {
    res.send("hello express");
});

app.get('/welcome', (req, res) => {
    res.send("welcome");
    console.log("middle")
});

//error handler
app.get('/error', () => {
    throw new Error('this is test error')
})

//error handler - 4 parameters
app.use((err, req, res, next) => {
    console.log(err.message);
    res.send("internal server error")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
