const express = require('express'); 
const app = express();
const port = 3000;


//set ejs as th e view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const name = "Express 5";
    res.render('index', { name });
});         

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 

