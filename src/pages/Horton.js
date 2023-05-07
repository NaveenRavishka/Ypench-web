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

function Horton() {
 const navigate = useNavigate();
const [data,setData]=useState(initialState);
const {name,email,contact,owner,rooms,address,days,price,rating,locationUrl,img} = data;
const [errors,setErrors] = useState({});
const {id}  = useParams();
 
useEffect(() => {
 id && getSingleUser();
},[id]);

const getSingleUser =async()=>{

const docRef = doc(db,"HortonPlace",id);
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
    errors.email = "email is required";
  }
  if(!contact){
    errors.contact = "contact is required";
  }
  if(!owner){
    errors.owner = "owner is required";
  }
  if(!rooms){
    errors.rooms = "rooms is required";
  }
  if(!address){
    errors.address = "address is required";
  }
  if(!days){
    errors.days = "days is required";
  }
  if(!price){
    errors.price = "price is required";
  }
  if(!rating){
    errors.rating = "rating is required";
  }
  if(!locationUrl){
    errors.locationUrl = "locationUrl is required";
  }
  
  return errors;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  let errors= validate();

 if(Object.keys(errors).length)return setErrors(errors);
 await addDoc(collection(db,"HortonPlace"),{
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
    onChange={handleChange} error={errors.name ? {content:errors.name}:null}
    ></input><br/>
     <label for="fname">Address</label>
    <input type="text" id="adress" name="address" placeholder="Hotel Name"value={address} required
    onChange={handleChange} error={errors.address ? {content:errors.address}:null}
    ></input><br/>
      <label for="fname">Email</label>
      <input type="text" id="email" name="email" placeholder="Email"value={email} required
    onChange={handleChange}  error={errors.email ? {content:errors.email}:null}
    ></input><br/>
     <label for="fname">Location Url</label>
    <input type="text" id="locationUrl" name="locationUrl" placeholder="LocationUrl" value={locationUrl} required
   onChange={handleChange} error={errors.locationUrl ? {content:errors.locationUrl}:null}
   ></input><br/>
      <label for="fname">Contact Number</label>
       <input type="text" id="contact" name="contact" placeholder="Contact Number"value={contact} required
    onChange={handleChange} error={errors.contact ? {content:errors.contact}:null}
    ></input>
    <br/>
    <label for="fname">Owner Name</label>
    <input type="text" id="owner" name="owner" placeholder="Owner Name"value={owner} required
    onChange={handleChange}  error={errors.owner ? {content:errors.owner}:null}
    ></input><br/>
      <label for="fname">No of Rooms</label>
     <input type="text" id="rooms" name="rooms" placeholder="No of Rooms"value={rooms} required
    onChange={handleChange}error={errors.rooms ? {content:errors.rooms}:rooms}
    ></input><br/>
    <label for="fname">Price</label>
   <input type="text" id="price" name="price" placeholder="Price"value={price} required
  onChange={handleChange} error={errors.price ? {content:errors.price}:price}
  ></input><br/>
<label for="fname">Rate</label><br></br>
   <input type="number" id="rating" name="rating" placeholder="Rate"value={rating} required
  onChange={handleChange} error={errors.rating ? {content:errors.rating}:rating}
  ></input><br/>
  <label for="fname">Days</label><br></br>
   <input type="number" id="days" name="days" placeholder="days"value={days} required
  onChange={handleChange} error={errors.days ? {content:errors.days}:days}
  ></input><br/>
 
    
    <input type="submit" value="Submit"></input>
     
        </form> 
        </div>        
        </div>
    </div>
    
  )
}

export default Horton
