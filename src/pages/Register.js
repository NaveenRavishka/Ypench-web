import { async } from '@firebase/util';
import React,{useState} from 'react';
import {auth} from './Firebase';
import "./register.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Navigation from "../pages/Navigation"
import { useNavigate } from 'react-router';

function Register() {
  const navigate = useNavigate();
  const[userEmail,setUserEmail]=useState("");
  const[userpassword,setUserPassword]=useState("");
  

 const register = async ()=>{
  try{
    navigate("/")
    const user = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userpassword
    );
    
  }
  catch(error)
  {
    console.log(error.message);
  }
  
 }

  return (
  
   
    <div className='reg'>
   
    <center>
     <div className='regis-title'>Registration form</div>
      <div className="regbox">

 
  <div class="regcontainer">
  <form>
   
  <div class="group">  
  <label for="name">First  Name</label><br></br>
  <input type="text" id="name" placeholder='First Name'></input>
  <span class="highlight"></span>
      <span class="bar"></span><br/>
  </div>
  <br></br>
  <div class="group">  
  <label for="name">Last Name</label><br/>
  <input type="text" id="last name" placeholder='Last Name'></input>
  <span class="highlight"></span>
      <span class="bar"></span><br/>
  </div>

  <br></br>
  <div class="group">  
  <label for="name">Email Address</label><br/>
  <input type="text" id="email" placeholder='Email Address' required
  onChange={(event)=>{setUserEmail(event.target.value);}}
  ></input><br/>
  <span class="highlight"></span>
      <span class="bar"></span>
  </div>
  <br></br>
  
  <div class="group">  
  <label for="name">Password</label><br/>
  <input type="password" id="password"  minLength="8" placeholder='Password'  required
  onChange={(event)=>{setUserPassword(event.target.value);}}
  ></input>
  <span class="highlight"></span>
      <span class="bar"></span>
  </div>
  <br></br>
  <br/><br/>
    <input type="submit" value="Submit" onClick={register}></input>
    </form>
  </div>

  </div>
    </center>
  
    </div>
    
  )
}

export default Register