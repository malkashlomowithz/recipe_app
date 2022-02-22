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
import Recipe from './components/RecipeComponents/Recipe';
import Top10page from './components/HomePageComponents/Top10page'
import EditProfile from './components/LoginComponents/EditProfile';
import Explanation from './components/PremiumComponents/Explanation'
import ConfirmedPayment from './components/PremiumComponents/ConfirmedPayment'
import AdminPage from './components/AdminComponenets/AdminComponents';
import NotFound from './components/Notfound'

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
                  
    <NavBar/>

        <Switch>
          <Route exact path ="/" component = {HomePage}/>   
          <Route exact path="/register" component = {RegistrationForm} />
          <Route path="/confirm" component = {Confirm}/>
          <Route path="/confirmedEmail" component = {ConfirmedEmail}/>
          <Route exact path="/login" component = {LoginForm}/>     
          <Route path="/newPassword" component = {NewPassword}/>            
          <Route path="/sendEmail" component={SendEmail}/>
          <Route path="/editProfile" component={EditProfile}/>
          <Route path="/updateRecipe/:id" component={UpdateRecipe}/>
          <Route path="/sendRecipe/:id" component = {SendRecipe}/>
          <Route path="/recipe/:id" component = {Recipe}/>
          <Route path="/top10page/:id" component = {Top10page}/>
          <Route path="/editProfile" component={EditProfile}/>
          <Route exact path="/explanation" component={Explanation}/>
          <Route exact path="/contact" component={ContactForm}/>
          <Route path="/ConfirmedPayment" component={ConfirmedPayment}/>
          {userIsLoggedIn === "true" ? (
          <Route exact path="/addRecipe" component = {AddRecipe}/>
          ):(<Redirect to = "/login" />)}
          {userIsLoggedIn === "true" ? (
          <Route exact path="/UsersRecipes" component ={UsersRecipes} />
          ):(<Redirect to = "/login" />)} 
          {userIsAdmin === "true" ? (
          <Route exact path="/admin" component = {AdminPage}/>
          ):(<Redirect to = "/" />)} 
          <Route component={NotFound}/> 
          </Switch>
               
     <Footer/>
    
    
    </div>

  );
}
export default App;


