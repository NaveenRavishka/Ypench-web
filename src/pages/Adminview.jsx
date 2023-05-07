import React from 'react'
import "./admin.css"
import Footer from './Footer'
function Adminview() {
  return (
    <div>
          <div class="admin">
            <h1>Admin View</h1><br></br>
            <div class="box">
            <h2>Hotel Details</h2>
            <br></br>
           <div class="hoteltable">
            <table border ="1">
                <tr>
                    <td>Hotel Name</td>
                    <td>Location</td>
                    <td>Package Name</td>
                    <td>No of Person</td>
                    <td>Day</td>
                    <td>Night</td>
                    <td>Price</td>
                    <td>
                    <div class='okbtn'>
                     <button class="okbtn" role="button">Delete</button>
                    </div>
                    </td>
                </tr>
                
            </table>
            </div>
            <br></br><br></br>
            <div class="vehicle">
            <h2>Vehicle Detials</h2>
             <table border="1">
                <tr>
                    <td>Owner Name</td>
                    <td>Location</td>
                    <td>Vehicle No</td>
                    <td>Vehicle Type</td>
                    <td>Fuel Type</td>
                    <td>From</td>
                    <td>Price</td>
                    <td>
                    <div class='okbtn'>
                     <button class="okbtn" role="button">Delete</button>
                    </div>
                    </td>
                </tr>
                </table>
                </div>
              

            

            </div>

            </div>

       <Footer/>
    </div>
        
  )
}

export default Adminview