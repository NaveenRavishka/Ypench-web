import React from 'react'
import YalaAdminView from './YalaAdminview';
import Beliadminview from './Beliadminview';
import EllaAdminView from './EllaAdminview';
import AdamAdminview from './AdamAdminview';
import HikkaAdminview from './HikkaAdminview';
import HortonAdminview from './HortonAdminview';
import KnuckelsAdminview from './KnucklesAdminview';
import LipAdminview from './LipAdminview';
import NilaAdminview from './NilaAdminview';
import TrincoAdminview from './TrincoAdminview';
import UnaAdminview from './UnaAdminview';
import SigiriAdminview from './SigiriAdminview';


function AdminotelView() {
  return (
    <div>
    <h1> Hotel Details</h1> 
      <br></br>
     <h2>Yala Hotels</h2> 
     <br></br>
      <YalaAdminView/>
    <br>
    </br><br>
    </br><br>
    </br><br>
    </br>
   <h2> Belihuloya Hotels</h2>
    <br>
    </br>
    <Beliadminview/>
 <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Ella Hotels</h2>
 <br></br>
 <EllaAdminView/>
 <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Adam's Peek Hotels</h2>
    <AdamAdminview/>
 <br></br>
 <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Hikkaduwa Hotels</h2>
    <HikkaAdminview/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Horton Hotels</h2>
    <HortonAdminview/><br></br>
 <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Knuckels Hotels</h2>
    <KnuckelsAdminview/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Hiptopn Hotels</h2>
    <LipAdminview/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Nilaweli Hotels</h2>
    <NilaAdminview/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Trincomalee Hotels</h2>
    <TrincoAdminview/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Unawatuna Hotels</h2>
    <UnaAdminview/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Sigiri Hotels</h2>
    <SigiriAdminview/>
    
    </div>
  )
}

export default AdminotelView