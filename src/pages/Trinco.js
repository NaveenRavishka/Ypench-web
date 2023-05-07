import React, { useState,useEffect } from 'react';
import {storage,db} from "./Firebase";
import { addDoc,collection, getDoc, serverTimestamp,doc } from 'firebase/firestore';
import { async } from '@firebase/util';
import "./hoteldetails.css";
import { useParams, useNavigate } from 'react-router';




const initialState = {
  name:"",
  address:"",
  email:"",
  contact:"",
  owner:"",
  rooms:"",
  days:"",
  price:"",
  rating:"",
  locationUrl:"",
  img:"",
}

function Trinco() {
 const navigate = useNavigate();
const [data,setData]=useState(initialState);
const {name,email,contact,owner,rooms,address,days,price,rating,locationUrl,img} = data;
const [errors,setErrors] = useState({});
const {id}  = useParams();
 
useEffect(() => {
 id && getSingleUser();
},[id]);

const getSingleUser =async()=>{

const docRef = doc(db,"Trincomalee",id);
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
 await addDoc(collection(db,"Trincomalee"),{
  ...data,
  timestamp:serverTimestamp()
 })
 navigate('/Home')
};

  return (
    <div className='hotel'>
   
   <div className='hotel-title'>Fill the Hotel Deatils</div>
   <div className='hotbox'>
   <div class="hotelcontainer">
    <form onSubmit={handleSubmit}>
      <br></br>
    <label for="fname">Hotel Name</label>
    <input type="text" id="name" name="name" placeholder="Hotel Name"value={name} required
    onChange={handleChange} Error={errors.name ? {contact:errors.name}:null}
    ></input><br/>
     <label for="fname">Address</label>
    <input type="text" id="adress" name="address" placeholder="Hotel Name"value={address} required
    onChange={handleChange} Error={errors.address ? {contact:errors.address}:null}
    ></input><br/>
      <label for="fname">Email</label>
      <input type="text" id="email" name="email" placeholder="Email"value={email}
    onChange={handleChange}
    ></input><br/>
     <label for="fname">Location Url</label>
    <input type="text" id="locationUrl" name="locationUrl" placeholder="LocationUrl" value={locationUrl} required
   onChange={handleChange}
   ></input><br/>
      <label for="fname">Contact Number</label>
       <input type="text" id="contact" name="contact" placeholder="Contact Number"value={contact} required
    onChange={handleChange} autoFocus
    ></input>
    <br/>
    <label for="fname">Owner Name</label>
    <input type="text" id="owner" name="owner" placeholder="Owner Name"value={owner} required
    onChange={handleChange} 
    ></input><br/>
      <label for="fname">No of Rooms</label>
     <input type="text" id="rooms" name="rooms" placeholder="No of Rooms"value={rooms} required
    onChange={handleChange}
    ></input><br/>
    <label for="fname">Price</label>
   <input type="text" id="price" name="price" placeholder="Price"value={price} required
  onChange={handleChange}
  ></input><br/>
<label for="fname">Rate</label><br></br>
   <input type="number" id="rating" name="rating" placeholder="Rate"value={rating} required
  onChange={handleChange}
  ></input><br/>
  <label for="fname">Days</label><br></br>
   <input type="number" id="days" name="days" placeholder="days"value={days} required
  onChange={handleChange}
  ></input><br/>
 
    
    <input type="submit" value="Submit"></input>
     
        </form> 
        </div>        
        </div>
    </div>
    
  )
}

export default Trinco