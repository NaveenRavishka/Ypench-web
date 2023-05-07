import React from 'react'
import Adminnav from './Adminnav'
import Navigation from "../pages/Navigation"
import { useNavigate } from 'react-router';
import Footer from './Footer';

function AdminPanel() {
    const navigate = useNavigate();
  return (
    <div>
    <div class="main">
     <Adminnav/>
     
     <div className='welcome'>
      WELCOME TO YPENCH ADMIN PANEL</div>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>

     <button className='viewbutton' onClick={()=>{navigate('/AdminotelView')}}>View the Hotel Deatils</button>
     <br></br>
     <br></br>
     <br></br>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/AdminVehiView')}}>View the Vehicle Deatils</button>
     
     
     
      </div>
      



   <Footer/>
      
      </div>
     


   
    
    
  )
}

export default AdminPanel