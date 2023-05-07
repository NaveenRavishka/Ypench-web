import React from 'react'
import EllaCarAdmin from './EllaCarAdmin'
import EllaBikeAdmin from './EllaBikeAdmin'
import EllaWheelAdmin from './EllaWheelAdmin'




function AdminVehiView() {
  return (
    <div>
    <h1> Vehicle Details</h1> 
      <br></br>
     <h2>Cars</h2> 
     <br></br>
      <EllaCarAdmin/>
    <br>
    </br><br>
    </br><br>
    </br><br>
    </br>
   <h2> Bike </h2>
    <br>
    </br>
    <EllaBikeAdmin/>
 <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Wheel</h2>
 <br></br>
 <EllaWheelAdmin/>
    </div>
  )
}

export default AdminVehiView