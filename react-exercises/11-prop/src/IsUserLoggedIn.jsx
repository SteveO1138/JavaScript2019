import React from "react";
import ReactDOM from "react-dom";
import isUserLoggedIn from "./App.jsx";


function IsUserLoggedIn (props){
    
   return  props.Users.map((user,index)=>{
    return (<ul>
        <li>Name {user.name}</li></ul>
       

     
    )
   })

    
       
       
};

export default IsUserLoggedIn;