const router = require('express').Router();
//below is the mongoose model 
let Recipe = require('../models/recipe.model');


//get all recipes
router.get('/', (req, res)=> {
  //user.find is mongoose method. find all users from mongodb db. find method returns promise
  //res.json means return something in json format. return users from db. 
  Recipe.find()
  .then(recipes=> res.json(recipes))
  .catch(err=> res.status(400).json('Error: ' + err));
})

//get recipe by id
router.get('/:id', (req, res)=> {
  Recipe.findById(req.params.id)
  .then(recipe => res.json(recipe))
  .catch(err => res.status(400).json('Error: ' + err));
})


//this is post request
router.post('/add', (req, res)=> {
  const peepname = req.body.peepname;
  const title = req.body.title;
  const url = req.body.url;
  const date = Date.parse(req.body.date);

  const newRecipe = new Recipe({
    peepname,
    title,
    url,
    date,
  });

  newRecipe.save()
  .then(()=> res.json('Recipe added!'))
  .catch(err => res.status(400).json('Error: ' + err));

});

router.put('/update/:id', (req, res)=> {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.peepname = req.body.peepname;
      recipe.title = req.body.title;
      recipe.url = req.body.url;
      recipe.date = Date.parse(req.body.date);

      recipe.save()
        .then(()=> res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.delete('/:id', (req, res)=> {
  Recipe.findByIdAndDelete(req.params.id)
  .then(()=> res.json('Recipe deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
