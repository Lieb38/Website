const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    const users = User.getUsers();
    res.send(users);
  } catch(error) {
    res.status(401).send({message: error.message});
  }
});

module.exports = router;