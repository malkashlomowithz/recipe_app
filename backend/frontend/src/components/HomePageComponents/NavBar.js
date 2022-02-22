import React from 'react'
import './NavBar.css'
import Logo from './logo.png'
import { withRouter } from "react-router-dom";
import { ImUser } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

 function NavBar(props){

    

    const loggedInAs = localStorage.getItem('nickname');
    const isLogged = localStorage.getItem('isLogged');

    const redirectToHome = () => {
        scrollToTop()
        props.history.push('/');  
    }   
    const redirectToAddRecipe =  () =>{
       
    //sends user to the top of the page to see the entire form,
                 scrollToTop()
        props.history.push('/addRecipe');
     
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    const redirectToLogin = () => {
        scrollToTop()
        
        props.history.push('/login');  
    }
    const redirectToRegister = () => {
        scrollToTop()
        
        props.history.push('/register');    
    }
    const redirectToProfile = () => {
        scrollToTop()
        
        props.history.push('/editProfile');    
    }
    
    function UsersRecipes(){
        scrollToTop()

        props.history.push('/UsersRecipes'); 

}
    const Logout = () => {
        
        localStorage.clear();
        props.history.push('/');
       // window.location.reload();
    }

    return(
        <div className='nav'>
                
                     <img src={Logo} alt="description" onClick={() => redirectToHome()} className="navLogo"/> 
                
                <div >
                    <ul className = 'navLinks'>
                        
                        <li className = 'navLink' 
                            onClick={() => redirectToAddRecipe()}>Add a new recipe</li>
                        <li className = 'navLink' onClick={() => UsersRecipes()}> See all my recipes</li>
                        <li  className = 'navLink' style={{display: isLogged === 'true'  ? 'none' : 'inline-block' }} 
                            onClick={() => redirectToLogin()}>Log into my account</li>
                        <li style={{display: isLogged === 'true'  ? 'none' : 'inline-block' }} className = 'navLink' onClick={() => redirectToRegister()}>Creat an account</li>
            
                        <li className = 'isLogged' style={{display: isLogged === 'true'  ? 'block' : 'none' }}onClick={() => redirectToProfile()}><ImUser/> Hi {loggedInAs}!</li>
                        <li className = 'Logout' style={{display: isLogged === 'true'  ? 'block' : 'none' }}onClick={() => Logout()}><BiLogOut/> Logout</li>
                        
                    </ul>
                </div> 
  
                               

        </div>
    )
}
export default withRouter(NavBar)