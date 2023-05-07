import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import Footer from './Footer';
import "./Home.css";
import Navigation from "../pages/Navigation"
import { useNavigate } from 'react-router';



function Home() {
const navigate = useNavigate();

  return (
    <div>
    <div class="main">
     <Navigation/>
     
     <div className='welcome'>
      WELCOME TO YPENCH USER PANEL</div>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>

     <button className='viewbutton' onClick={()=>{navigate('/View')}}>View the Hotel Deatils</button>
     <br></br>
     <br></br>
     <br></br>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Vehiview')}}>View the Vehicle Deatils</button>
     
     
     
      </div>
      



   <Footer/>
      
      </div>
     


   
    
    
   
 
  )
}

export default Home
