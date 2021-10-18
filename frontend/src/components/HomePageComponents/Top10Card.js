import React from 'react'
import '../RecipeComponents/RecipeCard.css'
import {Card} from 'react-bootstrap'
import { IoIosTimer } from 'react-icons/io'

export default function RecipeCard({recipe}) {

    return (
        <div >
            <Card className = "recipeCard" > 

               <Card.Img   variant="top" src = {`images/${recipe.file}`} className ='caredImage'/>
               
               <div className='card-text text-muted'><br/>
               <small className="text-muted">Added on: {(recipe.created_at).slice(0,10)}</small>
               </div>
                       
               <Card.Title className='card-text'>{recipe.title}</Card.Title> 
               
               <Card.Body >
               
               <IoIosTimer className = "timer" /> {recipe.preparation_time}
 
               </Card.Body>
   
            </Card>  
            
        </div>
    )
}
