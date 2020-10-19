const express = require('express')

const users = require('./controllers/users');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World, you requested ' + req.url)
})

app.use('/users', users);

app.use( (err,req,res,next) =>{
  console.log(err);
  res.status(er.status || 500).send({message: err.message})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})