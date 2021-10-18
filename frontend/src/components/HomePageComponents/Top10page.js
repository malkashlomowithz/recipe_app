import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipePage from '../RecipeComponents/RecipePage';
import '../RecipeComponents/recipe.css';
import {API_BASE_URL_RECIPES} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";

function Top10page(props) {

  const [data, setData] =  useState([]);

// get the recipe from the bd with recipe id from the location pathname
  useEffect(() => {

    const  fetchData =  async () => {

      //get the id number to fined the recipe by id
      const recipeId = props.location.pathname.split('/')[2];

      await axios(`${API_BASE_URL_RECIPES}/${recipeId}`,)
      .then(async res => {

        console.log(res)

        setData([res.data]);
      })
      .catch( error => {

        console.log(error)
      })
    };
    fetchData();

  }, []);


  return(
    <>
      {data.map(item => ( 
        <div key = {item._id}>             
                <RecipePage
                        recipe = {item}  
                        key = {item._id}  
                        id = {item._id}                       
                /> 
      </div>                         
      ))} 
  </>
  )
}
export default withRouter(Top10page);
