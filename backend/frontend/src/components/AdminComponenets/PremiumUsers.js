import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import { API_BASE_URL_ADMIN} from '../../constants/apiConstants';

export default function PremiumUsers() {
    const [data, setData] =  useState([]);

    //get users from DB
   
       useEffect(() => {
        const data = {"email" : localStorage.getItem('email'),
                      "token" : localStorage.getItem('token')}

         const  fetchData =  async () => {
             
            await axios.post(`${API_BASE_URL_ADMIN}/seePremium-users`,data)
            .then(res => {

                setData(res.data.payload);              
            })
            .catch(error => {

                console.log(error)
            }) 
         };      
          fetchData();     
       }, []);
   
       return(
   
           <div>
               <div style={{width: "70%",margin:"auto"}}>
               <h3>All premium users</h3>
               
               <table className="table "style={{border:"2px solid #f5a267"}} >
                   <thead>
                   <tr>
                       <th>Id</th>
                       <th>Nickname</th>
                       <th>Email</th> 
                   </tr>
                   </thead>               
                   <tbody >
                   {data.map(item => (
                   <tr key = {item.id}>
                       <td >{item.id}</td>
                       <td >{item.nickname}</td>
                       <td>{item.email}</td>
                       {/* <td>{item.joined_date}</td>
                       <td>{item.last_logged}</td>
                       <td onClick = {() => deleteUser(item.id)}>delete </td> */}
                   </tr>
                   ))}
                   </tbody>                
               </table>            
               </div>
           </div>
       )
   
   
   }
