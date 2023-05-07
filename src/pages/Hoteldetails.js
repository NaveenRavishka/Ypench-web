import React, { useState,useEffect } from 'react';
import {storage,db} from "./Firebase";
import { addDoc,collection, getDoc, serverTimestamp,doc } from 'firebase/firestore';
import { async } from '@firebase/util';
import "./hoteldetails.css";
import { useParams, useNavigate } from 'react-router';




const initialState = {
  name:"",
  email:"",
  contact:"",
  owner:"",
  rooms:""
}

function Hoteldetails() {

const [data,setData]=useState(initialState);
const {name,email,contact,owner,rooms} = data;
const [errors,setErrors] = useState({});
const {id}  = useParams();
 
useEffect(() => {
 id && getSingleUser();
},[id]);

const getSingleUser =async()=>{

const docRef = doc(db,"hotel",id);
const snapshot = await getDoc(docRef); 
if(snapshot.exists()){
  setData({...snapshot.data()});
}

}

const handleChange=(e)=>{
 setData({...data,[e.target.name]: e.target.value});
};
const validate =()=>{
  let errors ={};
  if(!name){
    errors.name = "name is required";
  }
  if(!email){
    errors.name = "email is required";
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
 await addDoc(collection(db,"hotel"),{
  ...data,
  timestamp:serverTimestamp()
 })

};

  return (
    <div className='hotel'>
   
   <div className='hotel-title'>Fill the Hotel Deatils</div>
   <div className='hotbox'>
   <div class="hotelcontainer">
    <form onSubmit={handleSubmit}>
      <br></br>
    <label for="fname">Hotel Name</label>
    <input type="text" id="name" name="name" placeholder="Hotel Name"value={name}
    onChange={handleChange} Error={errors.name ? {contact:errors.name}:null}
    ></input><br/>
      <label for="fname">Email</label>
      <input type="text" id="email" name="email" placeholder="Email"value={email}
    onChange={handleChange}
    ></input><br/>
      <label for="fname">Contact Number</label>
       <input type="text" id="contact" name="contact" placeholder="Contact Number"value={contact}
    onChange={handleChange} autoFocus
    ></input>
    <br/>
    <label for="fname">Owner Name</label>
    <input type="text" id="owner" name="owner" placeholder="Owner Name"value={owner}
    onChange={handleChange} 
    ></input><br/>
      <label for="fname">No of Rooms</label>
     <input type="text" id="rooms" name="rooms" placeholder="No of Rooms"value={rooms}
    onChange={handleChange}
    ></input><br/>
    
    <input type="submit" value="Submit"></input>
     
        </form> 
        </div>        
        </div>
    </div>
    
  )
}

export default Hoteldetails