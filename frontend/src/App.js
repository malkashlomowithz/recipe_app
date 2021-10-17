import React from 'react';
import './App.css';
import LoginForm from './components/LoginComponents/LoginForm';
import RegistrationForm from './components/RegistrationComponents/RegistrationForm';
import Confirm from './components/RegistrationComponents/confirm'
import ConfirmedEmail from './components/RegistrationComponents/ConfirmedEmail';
import SendEmail from './components/LoginComponents/SendEmail'
import NavBar from './components/HomePageComponents/NavBar'
import Footer from './components/HomePageComponents/Footer'
import ContactForm from './components/HomePageComponents/ContactForm'
import HomePage from './components/HomePageComponents/HomePage'
import NewPassword from './components/LoginComponents/NewPassword';
import AddRecipe from './components/RecipeComponents/AddRecipe'
import UsersRecipes from './components/RecipeComponents/UsersRecipes';
import UpdateRecipe from './components/RecipeComponents/UpdateRecipe';
import SendRecipe from './components/RecipeComponents/SendRecipe';
import Recipe from './components/RecipeComponents/Recipe'
import EditProfile from './components/LoginComponents/EditProfile';
import Explanation from './components/PremiumComponents/Explanation'
import ConfirmedPayment from './components/PremiumComponents/ConfirmedPayment'
import AdminPage from './components/AdminComponenets/AdminComponents';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";

function App() {

  const userIsLoggedIn  =localStorage.getItem("isLogged");
  const userIsAdmin  = localStorage.getItem("isAdmin");

  return (
    <div className="App">
                  
    <Router>
    
    <NavBar/>

          <Switch>
          <Route exact path ="/">
            <HomePage />
            </Route>
            <Route path="/register">
              <RegistrationForm />
            </Route>
            <Route path="/confirm">
              <Confirm/>
            </Route>
            <Route path="/confirmedEmail">
              <ConfirmedEmail/>
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/newPassword">
              <NewPassword/>
            </Route>
            <Route path="/sendEmail">
              <SendEmail/>
            </Route>
            <Route path="/editProfile">
              <EditProfile/>
            </Route>                      
            <Route path="/updateRecipe">
              <UpdateRecipe/>
            </Route>
            <Route path="/sendRecipe">
              <SendRecipe/>
            </Route>
            <Route path="/recipe">
              <Recipe/>
            </Route>
            <Route path="/editProfile">
              <EditProfile/>
            </Route> 
            <Route path="/explanation">
              <Explanation/>
            </Route> 
            <Route path="/contact">
              <ContactForm/>
          </Route> 
          <Route path="/ConfirmedPayment">
              <ConfirmedPayment/>
          </Route> 
          {userIsLoggedIn === "true" ? (
          <Route exact path="/addRecipe" component = {AddRecipe}/>
          ):(<Redirect to = "/login" />)}
          {userIsLoggedIn === "true" ? (
          <Route exact path="/UsersRecipes" component ={UsersRecipes} />
          ):(<Redirect to = "/login" />)} 
          {userIsAdmin === "true" ? (
          <Route exact path="/admin" component = {AdminPage}/>
          ):(<Redirect to = "/" />)} 
          </Switch>
               
     <Footer/>
    </Router>
    </div>

  );
}

export default App;


