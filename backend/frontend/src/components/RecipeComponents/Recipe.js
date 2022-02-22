import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipePage from './RecipePage';
import './recipe.css';
import {API_BASE_URL_RECIPES} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import{ GoThumbsup } from "react-icons/go";
import Share from  './recipeIcons/share.png';
import Update from  './recipeIcons/update.png';
import AddImage from  './recipeIcons/addImage.png';
import Delete from  './recipeIcons/delete.png';
import PublishRecipe from '../PremiumComponents/PublishRecipe'
function Recipe(props) {

  const [data, setData] =  useState([]);
  const [state , setState] = useState({

    selectedFile: null,
    successMessage: null,
    alertMessage : null,  
})


// get the recipe from the bd with recipe id from the location pathname
  useEffect(() => {

    const  fetchData =  async () => {

      //get the id number to fined the recipe by id
      const recipeId = props.location.pathname.split('/')[2];

      await axios(`${API_BASE_URL_RECIPES}/${recipeId}`,)
      .then(async res => {

        setData([res.data]);
      })
      .catch( error => {

        console.log(error)
      })
    };
    fetchData();

  }, []);

  // function that directs the user to see all his recipes.
  const redirectUsersRecipes = () => { 

    props.history.push('/UsersRecipes');
   }

   // function thats deletes the recipe from db
 function deleteThisRecipe(id ,title){

    if(window.confirm(`Are you sure you want to delete ${title} recipe?`)){

    axios.delete(`${API_BASE_URL_RECIPES}/${id}`,)
      .then(res => {
        if(res.status === 200){

          //if this recipe was deleted send successMessage.
          setState(prevState => ({
            ...prevState,
            alertMessage : null,
            successMessage : <p>{title} was deleted from your recipe collection!</p>
        }));

        // send the user back to his collection.
        setTimeout(() => {
          redirectUsersRecipes()
        }, 4500)                 
        }
      })
      .catch(error => {
          console.error(error)
      })
  }  
  }  
  //this function will direct the user to the update recipe page.
  const updateThisRecipe = (id) => {

    props.history.push(`/updateRecipe/${id}`);
  }

  //this function will direct the user to the send recipe page.
  const shareRecipe = (id) => {

    props.history.push(`/sendRecipe/${id}`);
  }
  // adding a image to the state
  const onChangeHandler=event=>{
    setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  //Send the image to the DB
  const onClickHandler = (id, title) => {
  
    const data = new FormData() 
    data.append('file', state.selectedFile)

    axios.put(`${API_BASE_URL_RECIPES}/image/${id}`, data,)
    .then(res => {

     const image = res.data
 
      if(res.status === 200) {
        //if the recipe was updated with the new image then:
        //A)the state will be set with the updated image
        setData([image])
        //B)the user will see a success message
        setState(prevState => ({
          ...prevState,
          alertMessage : null,
          successMessage : `An image was added for ${title}!`
        }))
        //the user will be sent to the top of the page to see the new image
        setTimeout(() => {

          window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        }, 3300)
      }    
    })
    .catch(error => {
        console.error(error)
    })
  }
  

  return(
    <>
      {data.map(item => ( 
        <div key = {item._id}>             
                <RecipePage
                        recipe = {item}  
                        key = {item._id}  
                        id = {item._id}                       
                /> 
        <div className = "icons" >     
            <div className="alert alert-success mt-2 col-lg-8" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
              <span><GoThumbsup/> </span>  {state.successMessage}
            </div>
        <div >      
          <img className = "image"
                src={Delete} alt="Delete "              
                onClick = {() => deleteThisRecipe(item._id, item.title)}
          /> Delete this recipe from your collection
            <br/> 

        <img className = "image"
              src={Update} alt="update "                         
              onClick = {() => updateThisRecipe(item._id)}
        /> Update your recipe
          <br/>

        <img className = "image"
                src={AddImage} alt="addImage "
        /> Add a image to your recipe
          <input type="file" name="file" onChange={onChangeHandler}/>
        <button type="button" style = {{display:"none"}} onClick={onClickHandler(item._id,item.title)}></button> 
          <br/>
          
        <img className = "image"
            src={Share} alt="share "            
            onClick = {() => shareRecipe(item._id,)}
        /> Share your recipe 
<PublishRecipe/>
      </div>     
      </div>  
      </div>                         
      ))} 
  </>
)
}
export default withRouter(Recipe);
