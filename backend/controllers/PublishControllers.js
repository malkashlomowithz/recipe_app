PublishedRecipe = require('../models/publishModel');


async function publish(newPublishedRecipe) {
   
    const publishedRecipe = new PublishedRecipe(newPublishedRecipe)

    try {

      await publishedRecipe.save()
      
    } catch (error) {
      console.log('cannot publish', error)
      throw new Error('cannot add recipe')
    }
  }

async function seeAllPublishedRecipes(){

  try {    
    return await PublishedRecipe.find()  
  } catch (error) {
    console.log('cannot get', error)
    throw new Error('cannot get the list')
  }      
} 

async function AddToTop10(id){

  try {
    await PublishedRecipe.findByIdAndUpdate(id ,{top_10: true} )
  } catch (error) {
    console.log('cannot update', error)
    throw new Error('cannot update')
  }
}

async function removeFromTop10(id){

  try {
    await PublishedRecipe.findByIdAndUpdate(id ,{top_10: false} )
  } catch (error) {
    console.log('cannot update', error)
    throw new Error('cannot update')
  }
}

async function seeTop10(){

  try {    
    return await PublishedRecipe.find({top_10 : true})  
  } catch (error) {
    console.log('cannot get', error)
    throw new Error('cannot get the list')
  }     

}

  module.exports = {publish , seeAllPublishedRecipes , AddToTop10 , removeFromTop10 , seeTop10}
