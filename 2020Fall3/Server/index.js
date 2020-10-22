const express = require('express')
require('dotenv').config();

const users = require('./controllers/users');

console.log(process.env.BEST_CLASS);

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.send('Hello World, you requested ' + req.url)
})

app.use('/users', users);

app.use( (err,req,res,next) =>{
  console.log(err);
  res.status(er.status ||500).send({message: err.message})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})