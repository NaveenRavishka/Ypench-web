import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';




import Home from './pages/Home';
import Register from './pages/Register';
import Hoteldetails from './pages/Hoteldetails';
import Vehicledeatils from './pages/Vehicledeatils';
import Login from './pages/Login';
import View from './pages/View';
import Vehiview from './pages/Vehiview';
import Yala from './pages/Yala';
import Beli from './pages/Beli';
import Ella from './pages/Ella';
import AdminPanel from './pages/AdminPanel';

import HotelButton from './pages/HotelButton';
import EllaBike from './pages/EllaBike';
import EllaCar from './pages/EllaCar';
import EllaWheel from './pages/EllaWheel';
import VehicleButton from './pages/VehicleButton';
import AdminotelView from './pages/AdminotelView';
import AdminVehiView from './pages/AdminVehiView';
import Adam from './pages/Adam';
import Hikka from './pages/Hikka';
import Horton from './pages/Horton';
import Knuckels from './pages/Knuckels';
import Lip from './pages/Lip';
import Nila from './pages/Nila';
import Trinco from './pages/Trinco';
import Una from './pages/Una';
import Sigiri from './pages/Sigiri';
                    
 



function App() {
return (
  <>
  
<div className='App'>

<Router>
  <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/AdminPanel" element={<AdminPanel/>}/>
 
  <Route path="/AdminVehiView" element={<AdminVehiView/>}/> 
 
  <Route path="/Yala" element={<Yala/> }/>
  <Route path="/Beli" element={<Beli/> }/>
  <Route path="/Ella" element={<Ella/> }/>  
  <Route path="/Adam" element={<Adam/> }/> 
  <Route path="/Hikka" element={<Hikka/> }/> 
  <Route path="/Horton" element={<Horton/> }/> 
  <Route path="/Knuckels" element={<Knuckels/> }/> 
  <Route path="/Lip" element={<Lip/> }/> 
  <Route path="/Nila" element={<Nila/> }/> 
  <Route path="/Trinco" element={<Trinco/> }/> 
  <Route path="/Una" element={<Una/> }/> 
  <Route path="/Sigiri" element={<Sigiri/> }/> 
  

    <Route exact path="/Home"  element={<Home/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/HotelButton" element={<HotelButton/>}/>
    <Route path="/View" element={<View/>}/>
    <Route path="/Hoteldetails" element={<Hoteldetails/>}/>
    
  <Route path="/VehicleButton" element={<VehicleButton/>}/>
    <Route path="EllaBike" element={<EllaBike/>} />
    <Route path="EllaCar" element={<EllaCar/>} />
    <Route path="EllaWheel" element={<EllaWheel/>} />
    <Route path="/Vehicledeatils" element={<Vehicledeatils/>}/>
    <Route path="/update/:item" element={<Vehicledeatils/>}/>
    <Route path ="/Vehiview" element={<Vehiview/>}/>
    <Route path ="/AdminotelView" element={<AdminotelView/>}/>
    
    
    
    </Routes>
    </Router>

  </div>
  </>

);
}

export default App;

