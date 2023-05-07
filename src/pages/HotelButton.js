import React from 'react'
import { useNavigate } from 'react-router';
import "./Home.css";

function HotelButton() {
     const navigate = useNavigate();

  return (
    <div>
    <div class="main">
    
     <div className='welcome'>
      Choose the Location</div>
      
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
  <button className='viewbutton' onClick={()=>{navigate('/Yala')}}>Yala Hotel Deatils</button>
        <t>                                                       </t>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Beli')}}>Belihuloya Hotel Deatils</button>
     <t></t>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Ella')}}>Ella Hotel Deatils</button>
    <br></br><br></br>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Adam')}}>Adam's Peek Hotel Deatils</button>
    <t></t>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Hikka')}}>Hikkaduwa Hotel Deatils</button>

     <button className='vehiviewwbutton' onClick={()=>{navigate('/Horton')}}>Horton Hotel Deatils</button>
     <br></br><br></br>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Knuckels')}}>Knuckels Hotel Deatils</button>
     
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Lip')}}>Lipton's Seat Hotel Deatils</button>  
    
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Nila')}}>Nila Weli Hotel Deatils</button>  
<br></br><br></br>
     <button className='vehiviewwbutton' onClick={()=>{navigate('/Trinco')}}>Trincomalee Hotel Deatils</button>  

     <button className='vehiviewwbutton' onClick={()=>{navigate('/Una')}}>Unawatuna Hotel Deatils</button> 

     <button className='vehiviewwbutton' onClick={()=>{navigate('/Sigiri')}}>Sigiriya Hotel Deatils</button>  
     
      </div>
      



  
      
      </div>
  )}
export default HotelButton