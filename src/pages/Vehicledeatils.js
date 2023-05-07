import React, { useState,useEffect } from 'react';
import {storage,db} from "./Firebase";
import { addDoc,collection, serverTimestamp } from 'firebase/firestore';
import { async } from '@firebase/util';
import "./vehicledetails.css";




const initialState = {
  name:"",
  vehicle:"",
  contact:"",
  vehicleNo:"",
 
}

function Vehicledeatils() {

const [data,setData]=useState(initialState);
const {name,vehicle,contact,vehicleNo} = data;
const [errors,setErrors] = useState({});
 
 

const handleChange=(e)=>{
 setData({...data,[e.target.name]: e.target.value});
};
const validate =()=>{
  let errors ={};
  if(!name){
    errors.name = "name is required";
  }

  if(!contact){
    errors.name = "contact is required";
  
  }
  return errors;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  let errors = validate();
 if(Object.keys(errors).length)return setErrors(errors);
 await addDoc(collection(db,"vehicles"),{
  ...data,
  timestamp:serverTimestamp()
 })

};

  return (
    <div className='vehicle'>
     <center>
   <div className='vehicle-title'>Fill the Vehicle Details</div>
   <div className='box'>
   <div class="vehicontainer">
    <form onSubmit={handleSubmit}>
      <br></br>
   
    <label for="fname">Name</label>
    <input type="text" id="name" name="name" placeholder="Name"value={name}
    onChange={handleChange} Error={errors.name ? {contact:errors.name}:null}
    ></input><br/>
      <label for="fname">Vehicle</label>
      <input type="text" id="vehicle" name="vehicle" placeholder="Vehicle"value={vehicle}
    onChange={handleChange}
    ></input><br/>
      <label for="fname">Contact Number</label>
       <input type="text" id="contact" name="contact" placeholder="Contact Number"value={contact}
    onChange={handleChange} autoFocus
    ></input>
    <br/>
    <label for="fname">Vehicle No </label>
    <input type="text" id="vehicleNo" name="vehicleNo" placeholder="Vehicle No "value={vehicleNo}
    onChange={handleChange} 
    ></input><br/>
     <br></br>
     <br></br>
    
    <input type="submit" value="Submit"></input>
   
        </form> 
            </div>  
        </div>
        </center>
    </div>
    
  )
}

export default Vehicledeatils