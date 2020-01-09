const router = require('express').Router();
//below is the mongoose model 
let Peep = require('../models/peep.model');

//first route. first 
// router.route('/').get((req, res)=> {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
router.get('/', (req, res)=> {
  //user.find is mongoose method. find all users from mongodb db. find method returns promise
  //res.json means return something in json format. return users from db. 
  Peep.find()
  .then(peeps=> res.json(peeps))
  .catch(err=> res.status(400).json('Error: ' + err));
})

//this is post request
router.post('/add', (req, res)=> {
  const peepname = req.body.peepname;
  const newPeep = new Peep({peepname});

  newPeep.save()
  .then(()=> res.json('Peep added!'))
  .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;