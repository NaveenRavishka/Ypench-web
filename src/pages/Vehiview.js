import React from 'react'
import YalaView from './YalaView'
import BeliView from './BeliView'
import EllaView from './EllaVIew'
import EllaBikeView from './EllaBikeView'
import EllaWheelView from './EllaWheelView'
import EllaCarView from './EllaCarView';


function VehiView() {
  return (
    <div>
    <h1> Vehicle Details</h1> 
      <br></br>
     <h2>Cars</h2> 
     <br></br>
      <EllaCarView/>
    <br>
    </br><br>
    </br><br>
    </br><br>
    </br>
   <h2> Bike </h2>
    <br>
    </br>
    <EllaBikeView/>
 <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2>Wheel</h2>
 <br></br>
 <EllaWheelView/>
    </div>
  )
}

export default VehiView