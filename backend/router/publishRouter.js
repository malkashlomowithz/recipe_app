const express = require('express');
const router = express();
const {publish , seeAllPublishedRecipes , AddToTop10 , removeFromTop10 , seeTop10} = require('../controllers/PublishControllers');

router.use(
    express.urlencoded({
      extended: true
    })
  )
  
  router.use(express.json())
  
  router.post('/publish',(req, res) => {

    console.log("res",req)
  
    publish(req.body)
    .then(res => res.status(200).send(res))
    .catch(error => res.status(404).send(error))
  })

  router.get('/publish/seePublished',async (req, res) => {
    
      
   try{ const publishedList =  await seeAllPublishedRecipes()
        res.json(publishedList)
   } catch (error) {
        res.status(404)
      } 
    })

    router.put('/publish/Top10/:id',(req, res) => {

      AddToTop10(req.params.id)
      .then(recipe => {
        res.json(recipe).status(200)        
      })
      .catch(error => {
        res.status(404).send(error)
        console.log("can not add")
      });
    })  

    router.put('/publish/removeFromTop10/:id',(req, res) => {

      removeFromTop10(req.params.id)
      .then(recipe => {
        res.json(recipe).status(200)        
      })
      .catch(error => {
        res.status(404).send(error)
        console.log("can not remove")
      });
    })  

    router.get('/publish/getTop10', async (req, res) => {
  
      try{ const top10 =  await seeTop10()
           res.json(top10)
      } catch (error) {
           res.status(404)
         } 
       })

  module.exports = router 
