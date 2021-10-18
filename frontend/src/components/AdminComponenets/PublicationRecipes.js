import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import { API_BASE_URL_PUBLISH} from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";

function PublicationRecipes() {

    const [data, setData] =  useState([]); 

 //get users from DB

    useEffect(() => {

      const  fetchData =  async () => {

         await axios.get(`${ API_BASE_URL_PUBLISH}/seePublished`)
         .then(res => {
             console.log(res.data)

             setData(res.data);
         })
         .catch(error => {

            console.log(error)
         })
      };  
       fetchData();  
    }, []);

    //this function will remove recipe from top 10
 
    async function removeFromTop10(id){

        if(window.confirm(`Are you sure you want to remove from top 10?`)){

          await axios.put(`${ API_BASE_URL_PUBLISH}/removeFromTop10/${id}`)

            .then(res => {
                if(res.status === 200){

                alert("The recipe was added to the top 10") 
                }  
            })
            .catch(error =>{
            console.log(error)
            alert(error)
            })
        }
    }

  async function addToTop10(id){
      
    if(window.confirm(`Are you sure you want to add recipe to the top 10?`)){

        await axios.put(`${ API_BASE_URL_PUBLISH}/Top10/${id}`)
            .then(res => {
                if(res.status === 200){

                    alert("The recipe was added to the top 10") 
                }  
            })
            .catch(error =>{
                console.log(error)
                alert(error)
            })
    }
  }  
    return(

        <div>
            <div style = {{width: "70%",margin:"auto"}}>
            <h3>Published Recipes</h3>
            
            <table className = "table "style={{border:"2px solid #f5a267"}} >
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Created by</th>
                    <th>Date</th>
                </tr>
                </thead>               
                <tbody >
                {data.map(item => (
                <tr key = {item._id}>                   
                    <td>{item.title}</td>
                    <td >{item.created_by}</td>
                    <td>{(item.created_at).slice(0,10)}</td>
                    <td onClick = {() => addToTop10(item._id)} 
                        style = {{cursor: "pointer", color: "green", font_weight: "bold"}}>
                            ADD TO TOP 10 
                    </td>
                    <td onClick = {() => removeFromTop10(item._id)} 
                        style = {{cursor: "pointer", color: "green", font_weight: "bold"}}>
                            Remove from top 10
                     </td>
                </tr>
                ))}
                </tbody>                
            </table>            
            </div>
        </div>
    )


}

export default withRouter(PublicationRecipes);




        
