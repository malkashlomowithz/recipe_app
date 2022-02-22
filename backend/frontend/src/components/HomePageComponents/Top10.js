import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import './Top10.css'
import Img from './top-10.jpg'
import Time from './Time'
import Top10Card from './Top10Card'
import {API_BASE_URL_RECIPES} from '../../constants/apiConstants';
import {API_BASE_URL_PUBLISH} from '../../constants/apiConstants';

  function Top10(props){

    const [data, setData] =  useState([]);
 
     useEffect(() => {
    const  fetchData =  async () => {

      await axios(`${API_BASE_URL_PUBLISH}/getTop10`)
      
      .then(res => {

        setData(res.data);
      })

      .catch(error => {
        console.log(error)
      })
 
      
    };
 
    fetchData();

  }, []);

  const redirectToClickedRecipe = (id) => {

    props.history.push(`/top10page/${id}`);
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
          <div className = "row">

              {data.map(item => (
                <div key = {item._id}
                className ='  col-lg-6 col-md-6 col-sm-12'  
                     onClick = {() => redirectToClickedRecipe((item._id))}>
                  <Top10Card
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