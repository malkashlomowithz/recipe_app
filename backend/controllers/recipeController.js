Recipe = require('../models/recipeModel');

 //post, adds the new recipe to the users recipe collection

async function addNewRecipe(newRecipe) {
   
    const recipe = new Recipe(newRecipe)

    try {
      await recipe.save()
      return await getRecipeById(recipe._id)
    } catch (error) {
      console.log('cannot add recipe', error)
      throw new Error('cannot add recipe')
    }
  }

// get, returns all users recipes with the required email

async function getAllMyRecipes(usersEmail){
    
  try {    
    return await Recipe.find({ created_by: usersEmail.word })  
  } catch (error) {
    console.log('cannot get', error)
    throw new Error('cannot get your recipes')
  }      
}

//get, returns only one recipe with the required id

async function getRecipeById(id){

  try {
    return await Recipe.findById(id)
  } catch (error) {
    console.log('cannot getRecipeById', error)
    throw new Error('cannot getRecipeById')
  }
}

//delete a recipe from users collection

async function deleteRecipe(id){
 
  return Recipe.findByIdAndDelete(id)
  .then(result => getAllMyRecipes(result.created_by))
  .catch(error => {
    console.log('did not delete', error)
    return error
  })
} 

//fined a recipe with id and update it

async function updateRecipe(id, updatedRecipe){  
  try {
    return await Recipe.findByIdAndUpdate(id,{updatedRecipe})
  } catch (error) {
    console.log('cannot getRecipeById', error)
    throw new Error('cannot getRecipeById')
  }
}

async function updateRecipeWithImage(id,imageFile){

  console.log(imageFile)
  try{
    return await Recipe.findByIdAndUpdate(id,{file:imageFile})

  } catch (error) {
    console.log('cannot update with image', error)
    throw new Error('cannot getRecipeById')
  } 
}

module.exports = {
  addNewRecipe, 
  getAllMyRecipes, 
  getRecipeById, 
  deleteRecipe, 
  updateRecipe, 
  updateRecipeWithImage
}


