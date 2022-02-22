import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {API_BASE_URL_RECIPES, API_BASE_URL_PUBLISH, API_BASE_URL_PREMIUM} from '../../constants/apiConstants';


function PublishRecipe() {
    
    const [state , setState] = useState({
        recipe: [],
        successMessage: null,
        alertMessage: null,
        isPremium : null
    })

    const recipeId = window.location.pathname.split('/')[2];

    //get the recipe you want to publish from DB

    const [data, setData] =  useState([]);

 useEffect(() => {

    const  fetchData =  async () => {
               
        await axios(`${API_BASE_URL_RECIPES}/${recipeId}`)
        .then(res => {
            console.log(res)

            setState(prevState => ({
                ...prevState,
                recipe: res.data
            }));
            setData([res.data]);
        })
        .catch(error => {
            console.log(error)
        })   
    };
    fetchData();    
  }, []);

  //check if user is a premium user.

  const [user, setUser] =  useState([]);

  useEffect(() => {
 
     const  fetchData =  async () => {
         const user = {
             'email':localStorage.getItem('email'),
             'token':localStorage.getItem('token')
         }
        await axios.post(`${API_BASE_URL_PREMIUM}/checkPremium`, user)
        
        .then(res => {
            
            setUser(res.data.payload);
            setState(prevState => ({
                ...prevState,
                isPremium: res.data.payload
            })); 
        })
        .catch(error => {
            console.log(error)
        })
    };      
    fetchData();    
 }, []);

    async function  handleSubmitClick(){

        const publishRecipe =  state.recipe;
        await axios.post(`${ API_BASE_URL_PUBLISH}`, publishRecipe )

        .then(res => {

            console.log(res)
        })
        .catch(error => {

            console.log(error)
        })

    }

    //only if the user is a premium user will he see this return on the recipe page.
    
    return (
        <div className = 'p-3'
        style={{display: state.isPremium === 'Premium user'? 'block' : 'none' }}>
           <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >PUBLISH THIS RECIPE</button>
        </div>
    )
}
export default PublishRecipe
