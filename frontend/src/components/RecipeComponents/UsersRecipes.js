import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import {API_BASE_URL_RECIPES} from '../../constants/apiConstants';
import './UsersRecipes.css'
import RecipeCard from '../RecipeComponents/RecipeCard'

 function UsersRecipes(props) {

  //get the users recipe collection from the DB

  const [data, setData] =  useState([]);
  const localUserDetails = {

    email : localStorage.getItem('email'),
    token : localStorage.getItem('token'),
    device : localStorage.getItem('device'),
}

    useEffect(() => {
      //get the user email from the local storage and get the users recipe collection from DB by email

      const q = localStorage.getItem('email')

      const  fetchData =  async () => {
       
        await axios(`${API_BASE_URL_RECIPES}/search?word=${q}`)
        .then(async res => {

          if(res){

          //before rendering the data on the browser we will make sure the user is token logged in
            await axios.post(`https://my-recipe-app-1fe491.appdrag.site/api/auth/tokenLogin`,localUserDetails)
            .then(result => {

              if(result.data.payload === "Not Logged"){

                //if user is not token logged in redirect him to login.
    
                props.history.push(`/login`);
              }else if (result.data.payload.token) {

                setData(res.data);
                localStorage.setItem("token", result.data.payload.token)
              }else {

                props.history.push(`/login`);

              }    
            })
            .catch(error => {
    
              console.log(error)
            })
          }
        })
        .catch(error => {

          console.log(error)
        })     
      };
      fetchData();
  
    }, []);
    //direct the user to the clicked recipe.

  const  redirectToClickedRecipe = (id) => {

    props.history.push(`/recipe/${id}`);
  }
  
    return (
        <div className = "recipes">

           <h1  className = "usersTitle"> all my recipes </h1>
           <small className = "form-text text-muted"> There are {data.length} recipes in your collection.</small>

           <div className = "row m-1" >

              {data.map(item => (
                <div key = {item._id} className = ' col-lg-3 col-md-4 col-sm-6  '
                     onClick = {() => redirectToClickedRecipe(item._id)}>
                  <RecipeCard
                          recipe = {item}   
                          id = {item._id}                       
                        />
                </div>      
              ))}
          </div>   
        </div>
    )
}
export default withRouter(UsersRecipes)



