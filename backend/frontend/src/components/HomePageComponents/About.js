import React from 'react'
import { withRouter } from "react-router-dom";
import './About.css'



 function About(props){

    const redirectToRegister = () => {
        props.history.push('/register'); 
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });  
    }

    return(
        <div className='about'>
       
            
            <div className = "aboutUs">
            <h1>-Get to know us-</h1>
                My ambition is that everyone no matter where he or she is on the globe will have full access to their favorite recipes from any device. If you want to be part of this revolutionary idea all you need to do is
                 <br/><span className="loginText" onClick={() => redirectToRegister()}>  sign up and creat an account.  <br/>
                 </span> 
                 Then you will be able to upload your recipes and have them with you wherever you are.
                 </div>
        </div>

    )
}
export default withRouter(About);