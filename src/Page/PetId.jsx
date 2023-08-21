import React from 'react'
import Sidebar from "../Component/Sidebar"
import MainSideOfDashboard from "../Component/MainSideOfDashboard"

function PetId() {
  return (<>  <Sidebar />
  <MainSideOfDashboard /><div className="main_area_bottom"></div>
    <div className='Pet-id main_area_bottom'>
      <h2>Pet Details</h2>
      <div className="row align-item-center">
        <div className="col-12 col-md-3">
          <img src="/Image/Ellipse 32.svg" alt="" />
        </div>
        <div className="col-12 col-md-3 p-4">
        <p>
          Added On: 30/12/2022
          </p>
          <br />
          <p>
           PetId: 4156987 
          </p>
        </div>
     </div>
     <table className='m-4'>
      <thead>
        <th>PetName</th>
        <th>Gender</th>
        <th>Pet Age</th>
        <th>Category</th>
        <th>Status</th>
        <th>Breed</th>
      </thead>
      <tbody>
        <tr>
        <td>tida</td>
        <td>mixVeg</td>
        <td>superpuppy</td>
        <td>seturmurg</td>
        <td>onHold</td>
        <td>Labrador</td>
        </tr>
      </tbody>
     </table>
     <div className='Pet_details m-4'>
     <p>
     Pet Description:
     <p>GOOD IN A HOME WITH Other dogs, cats, children.</p>
     </p>
     <address className=''>
      <p>Address:</p>
      <p>B-40A ,krishi nagar ,tonk road ,jaipur ,302018</p>
     </address>
    </div>
     <h2>Delete pet</h2>
    </div>
    </>
  )
}

export default PetId