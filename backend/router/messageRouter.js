// require functions from controllers

const {sendMessage , shareRecipe} = require('../controllers/messageController')

// set up express

const express = require('express');
const router = express();

router.use(
  express.urlencoded({
    extended: true
  })
);
router.use(express.json());

// send the messages

router.post('/contactUs', (req, res) => {

    sendMessage(req.body)
  .then(message => res.json(message))
  .catch(error => res.status(404).send(error))
  .catch(error => res.console.log(error))

    
  })

  // send recipe with email

  router.post('/share', (req, res) => {

    shareRecipe(req.body)
  .then(message => res.json(message))
  .catch(error => res.status(404).send(error))
  .catch(error => res.console.log(error))
  
  })

  module.exports = router 
