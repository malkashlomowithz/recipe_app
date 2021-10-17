import React from 'react'
import './RecipePage.css'
import {FaUtensils} from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'


 function RecipePage({recipe}) {

    return (
        <div className = 'page'> 
           <h1 className = 'recipeTitle'>{recipe.title}</h1> 
           <h4 className = 'text-muted'>{recipe.description}</h4>
           <div className='info'>
           <table className = ' container'>
           <tbody>
  
               <tr>
                    <th><FaUtensils /> Servings:</th>
                    <th>< FaClock/> Preparation time:</th>    
                </tr>
                <tr>
                    <td>{recipe.servings}</td>
                    <td>{recipe.preparation_time}</td>
                </tr> 
            </tbody>
           </table>
           </div>
           <div className = "imageCon">
                <img className = 'pageImg' src={`http://localhost:3000/images/${recipe.file}`} alt = 'recip'/>
            <div>
                    
                </div>
            </div>
           
           <h2>Ingredients:</h2>
           <textarea  
                type="text" 
                value={recipe.ingredients}
                className = "textarea" readOnly
           />
           <h2>Preparations:</h2>
           <textarea 
                type="text" 
                value={recipe.preparations}
                className = "textarea" readOnly
            />
        </div>
    )
}

export default (RecipePage)