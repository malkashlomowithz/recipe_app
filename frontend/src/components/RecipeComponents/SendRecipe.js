import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './AddRecipe.css'
import {API_BASE_URL_RECIPES , API_BASE_URL} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";
import{ GoThumbsup, GoThumbsdown} from "react-icons/go";

function SendRecipe(props) {

 //get all the details of the recipe from the db by recipe id.
 
 const [data, setData] =  useState([]);

 useEffect(() => {

    const  fetchData =  async () => {

        const recipeId = window.location.pathname.split('/')[2];

        await axios(`${API_BASE_URL_RECIPES}/${recipeId}`,)
        .then(res => {

        sendRecipeToState(res.data)
        setData([res.data]);
        })
        .catch(error => {
            console.log(error)
        })        
    };
    fetchData();    
  }, []);

 const [state , setState] = useState({
        to: "",
        message:"",
        recipe: [],
        successMessage: null,
        alertMessage: null
     })
//set the state: send the input values to state
     const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))        
    }
    const redirectToThisRecipe = (id) => {

        props.history.push(`/recipe/${id}`);
    }

    const sendRecipeToState = (data) => {

        setState(prevState => ({
            ...prevState,
            recipe: data
        }));
    }

    //send info to server
    async function  handleSubmitClick(e){
        e.preventDefault();

        if(state.to.length && data.length ){
                
            const info = {
                to: state.to,
                message: state.message,
                recipe: state.recipe,
                email: localStorage.getItem('email') 
            }  
            axios.post(`${API_BASE_URL}/share`, info)
            .then(res => {
                if(res.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        alertMessage : null,
                        successMessage :` your recipe was sent to ${info.to}`
                    }));
                    setTimeout(() => {
                        redirectToThisRecipe(state.recipe._id)
                    }, 3500) 
                }})
            .catch(error => {
                console.error(error)
            })         
        }else{
            setState(prevState => ({
                ...prevState,
                alertMessage : "An email address and a brief message is required!"
            }));
        }
    }
    return(
    <div className="card col-12 col-lg-4 mt-2 hv-center addRecipe">
    
        {data.map(item => ( 
         <form key = {item._id}>
            <h4 className = "cardTitle">Send your recipe:</h4>
            <div className="form-group text-left">
                <label htmlFor="exampleInputTitle">Title</label>
                <input type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="Give your recipe a title"
                    value={item.title}
                    onChange={handleChange} 
                />
               <input type="text" 
                    style={{display:"none"}}
                    id="data" 
                    placeholder="Give your recipe a title"
                    value={ state.data}
                    onChange={handleChange} 
                />
            </div>
           
            <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="to" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.to}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">To whom do you want to send this recipe</small>
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputTitle">Message</label>
                <textarea  type="text" 
                    className="form-control" 
                    id="message" 
                    value = {state.message}                    
                    onChange={handleChange} 
                    rows="6"
                    cols="60"
                />
            </div>
                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    <span><GoThumbsup/> </span>  {state.successMessage}
                </div>
                <div className="alert alert-danger mt-2" style={{display: state.alertMessage ? 'block' : 'none' }} role="alert">
                    <span><GoThumbsdown/> </span>  {state.alertMessage}
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                Send
                </button>
        </form>
            ))}

        </div>   
        )

}
export default withRouter(SendRecipe) 