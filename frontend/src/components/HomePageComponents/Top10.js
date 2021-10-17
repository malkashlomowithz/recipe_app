import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import './Top10.css'
import Img from './top-10.jpg'
import Time from './Time'
import RecipeCard from '../RecipeComponents/RecipeCard'
import {API_BASE_URL_RECIPES} from '../../constants/apiConstants';


  function Top10(props){

    const [data, setData] =  useState([]);
 
  //    useEffect(() => {
  //   const  fetchData =  async () => {
  //     const result = await axios(`${API_BASE_URL_RECIPES}/getTop10`);
 
  //     setData(result.data.payload.Table);
  //   };
 
  //   fetchData();

  // }, []);
  // console.log(data)


  const redirectToClickedRecipe = (id) => {

    props.history.push(`/recipe/${id}`);
  } 
  const redirectToExplanation = () => {

    props.history.push(`/explanation`);
  }

    return(
      
        <div className = 'top10'>
        <div className='today'><Time/></div>

          <div className = 'thisWeeks'>
              <h3>This weeks<img className = 'top10Img' src={Img} alt="description"/>best recipes!!</h3>     
              <h4 className = 'HowSubmitted'>These recipes are submitted to you by our premium users. </h4> 
              <span className="loginText" onClick = {() => redirectToExplanation()} >Become a premium user</span>
          </div> 
          <div className = 'cardsTop10'>

              {data.map(item => (
                <div key = {item.id} 
                     onClick = {() => redirectToClickedRecipe(item.id)}>
                  <RecipeCard
                          recipe = {item}   
                          id = {item.id}                       
                        />
                </div>      
              ))}
          </div>   
        </div>
    )
}
export default withRouter(Top10)