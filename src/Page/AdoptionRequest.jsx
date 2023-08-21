import React from "react";
import Sidebar from "../Component/Sidebar"
import MainSideOfDashboard from "../Component/MainSideOfDashboard"

function AdoptionRequest() {
  return (
    <>  <Sidebar />
  <MainSideOfDashboard /><div className="main_area_bottom"></div>
    <div className="main_area_bottom Adoption_request">
      <div>
        <h2>Adoption Details</h2>
        <table className="m-2 w-100">
          <thead>
            <th>Adoption Id</th>
            <th>Status</th>
            <th>PetId</th>
            <th>Adopter Name</th>
            <th>Adoption Date</th>
          </thead>
          <tbody>
            <tr>
              <td>123456</td>
              <td>Pending</td>
              <td>456789</td>
              <td>lokeshi brar</td>
              <td>30/8/2023</td>
            </tr>
          </tbody>
        </table>
        <small className="note">
          **IN STATUS FIELD KINDLY UPDATE THE STATUS OF ADOPTION REQUEST TO
          AVOID CONFLICT
        </small>
        <hr />
      </div>

      <div>
        <h2>Adopter Details</h2>
        <table className="m-2 w-100">
          <thead>
            <th>Adopter Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
          </thead>
          <tbody>
            <tr>
              <td>Lokesh Ahir</td>
              <td>8696995374</td>
              <td>ahirlokesh750@gmail.com</td>
              <td>Jaipur,Rajasthan colony Address, 302018</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>


      <div>
      <h2>Pet Details</h2>
      <table className="m-2 w-100">
      <thead>
        <th>Pet Name</th>
        <th>PetId</th>
        <th>Category</th>
        <th>Status</th>
        <th>Breed</th>
      </thead>
      <tbody>
      <tr>
        <td><img src="/Image/Ellipse 32.svg" alt="" /></td>
        <td>568456</td>
        <td>Dog</td>
        <td>onHold</td>
        <td>Labrador</td>
</tr>
</tbody>
</table>
<hr />
      </div>
    </div>
     </>
  );
}

export default AdoptionRequest;
