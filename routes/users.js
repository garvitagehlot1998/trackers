const router = require('express').Router();
let User = require ('../models/user.model');
//below is the first route which accepts first http request. 
//mongoose method it will get me the list of databases mtlb all the users
     //it returns a promise

router.route('/').get((req, res) => {
    User.find() 
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  //new user name is part of this body post 
  router.route('/add').post((req, res) => {
    const username = req.body.username;
  
    const newUser = new User({username});
  
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;