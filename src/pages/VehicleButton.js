import React from 'react'
import { useNavigate } from 'react-router';
import "./Home.css";

function VehicleButton() {
     const navigate = useNavigate();

  return (
    <div>
    <div class="main">
    
     <div className='welcome'>
      Choose the Vehicle Type</div>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>

     <button className='viewbutton' onClick={()=>{navigate('/EllaBike')}}>Bike  Deatils</button>
     <br></br>
     <br></br>
     <br></br>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/EllaCar')}}> Car Deatils</button>
     <br></br>
     <br></br>
     <br></br>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/EllaWheel')}}>Wheel Deatils</button>
     
     
     
      </div>
      



  
      
      </div>
  )}
export default VehicleButton