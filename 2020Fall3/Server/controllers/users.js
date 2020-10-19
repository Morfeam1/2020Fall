



const express = require('express');
const users = require('../models/users');

const router = express.Router();

router.get('/', async (req, res) => {
    //throw { status: 501, message: "This is a fake error"}
    res.send(
        users.getAll()
    );
    console.log("Finished get users");
  })
  .post('/', (req, res) => {
      const newUser = users.add(
          req.query.name,
          req.query.age);
          res.send(newUser);
  })
module.exports = router;