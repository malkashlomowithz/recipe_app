
const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const router = express();



//require functions from controller

const { addNewRecipe , 
  getAllMyRecipes , 
  getRecipeById ,
  deleteRecipe,
  updateRecipe,
  updateRecipeWithImage
} = require('../controllers/recipeController');  

router.use(
  express.urlencoded({
    extended: true
  })
)

router.use(express.json())

router.post('/recipe',(req, res) => {

  addNewRecipe(req.body)
  .then(recipe => res.json(recipe))
  .catch(error => res.status(404).send(error))
})

router.get('/recipe/search', async (req, res) => {

  try {
    const recipes = await getAllMyRecipes(req.query)
    res.json(recipes)
  } catch (error) {
    res.status(404)
  }
})

router.get('/recipe/:id', async (req, res) => {

  try {
    const recipe = await getRecipeById(req.params.id)
    res.json(recipe)
  } catch (error) {
    res.status(404)
  } 
})
router.delete('/recipe/:id', async (req, res) => {

  deleteRecipe(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(error => res.status(404))
})
router.put('/recipe/:id', async (req, res) => {
  const recipes = updateRecipe(req.params.id, req.body)
  if (recipes) {
    res.json(recipes)
  } else {
    res.status(404).send(`recipe with id: ${req.params.id} not found`)
  }
})

//add or update a recipe image
router.use(fileUpload({
  useTempFiles : true,
  tempFileDir : path.join(__dirname,'tmp'),
}));

router.put('/recipe/image/:id', async (req, res, ) =>{
  
  if(req.files){
   
  let targetFile = req.files.file;
  
  let extName = path.extname(targetFile.name);
  
  let baseName = path.basename(targetFile.name, extName);
  
  let uploadDir = path.join(__dirname, '../../frontend/public/images', targetFile.name);

  let num = 1;
    while(fs.existsSync(uploadDir)){

        uploadDir = path.join(__dirname, 'public/', baseName + '-' + num + extName);
        num++;
    }
    targetFile.mv(uploadDir, (err) => {
      if (err){
 
          return res.status(500).send(err);
        }
          const thisFile = targetFile.name

     updateRecipeWithImage(req.params.id,  thisFile)
      .then(recipe => {
        res.json(recipe).status(200)
        
      })
      .catch(error => {
        res.status(404).send(error)
        console.log("can not update recipe with image")
      });
    });
  
  }
});

module.exports = router 
