import express from 'express';
import { connectDB } from './config/db.js';
import { Person } from './models/Person.js';

const app = express(); 
const port = 3000;

await connectDB();

/* 
 const MONGODB_URI = 'mongodb+srv://tharung:tharun123@cluster0.5hxwzfr.mongodb.net/express';

    await mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database Connected");
*/
//removed and moved to config foldeer to simplify
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/person',express.json(), async(req, res) => {
  console.log(req.body);
  //saving in the database
  const { email, name, age } = req.body;
  const newPerson = new Person({
    name,
    age,
    email
  })
  await newPerson.save()
  res.send("person added")
  console.log(newPerson)
})

app.put('/person/:id', express.json(), async (req, res) => {
  const name = req.body.name;

  const personData = await Person.find(name)

  console.log(personData);
  res.send(`Person with name ${name} found`);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
