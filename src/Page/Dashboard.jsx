import React, { useState } from 'react'
import Short_tab from '../Component/Short_tab'
import Adopted from '../Component/Adopted'
import PendingAdoptions from '../Component/PendingAdoptions'
import AddNewPet from '../Component/AddNewPet';
import AllPet from '../Component/AllPet';

import Sidebar from "../Component/Sidebar"
import MainSideOfDashboard from "../Component/MainSideOfDashboard"



{/* <Link to="/Dashboard" className="">
  <button>Dashboard</button>
</Link> */}

function Dashboard() {

  const [ButtonName, setButtonName] = useState();

  const renderSelectedComponent = () => {
    switch (ButtonName) {
      case 1:
        return <AddNewPet />;
      case 2:
        return <AllPet />;
      default:
        return <><PendingAdoptions img=<svg width="11rem" height="11rem" viewBox="0 0 118 112" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse id="Ellipse 32" cx="59" cy="56" rx="59" ry="56" fill="#D9D9D9" />
      </svg>
          petName="petName" status="status" fromDavid="fromDavid" viewAdoption="viewAdoption" /><PendingAdoptions img=<svg width="11rem" height="11rem" viewBox="0 0 118 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="Ellipse 32" cx="59" cy="56" rx="59" ry="56" fill="#D9D9D9" />
        </svg>
            petName="petName" status="status" fromDavid="fromDavid" viewAdoption="viewAdoption" /></>;
    }
  };


  return (<>
    <Sidebar />
        <MainSideOfDashboard />
    <div className='row main_area_bottom text-center g-5'>
      <div className='col-12 col-md-6'>
        <p className='m-3 topic_heading'>Quick Actions</p>
        <div className='d-flex quick_actions_button justify-content-between'>
          <div onClick={() => setButtonName(1)}>
            <Short_tab img="./Image/Group 33.svg" value="Add Pet" className="m-0" />
          </div>
          <div onClick={() => setButtonName(2)}>
            <Short_tab img="./Image/G.svg" value="All Pets" className="m-0" />
          </div>
        </div>
        <p className='m-3 topic_heading'>Pending Adoptions</p>
        {renderSelectedComponent()}

      </div>


      <div className='col-12 col-md-6'>
        <p className='my-4 topic_heading'>Adopted</p>
        <Adopted img=<svg width="11rem" height="11rem" viewBox="0 0 118 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="Ellipse 32" cx="59" cy="56" rx="59" ry="56" fill="#D9D9D9" />
        </svg>adopterName="adopter Name" petName="petName" AdoptionDate="AdoptionDate" PetId="PetId" />
        <Adopted img=<svg width="11rem" height="11rem" viewBox="0 0 118 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="Ellipse 32" cx="59" cy="56" rx="59" ry="56" fill="#D9D9D9" />
        </svg>adopterName="adopter Name" petName="petName" AdoptionDate="AdoptionDate" PetId="PetId" />
        <Adopted img=<svg width="11rem" height="11rem" viewBox="0 0 118 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse id="Ellipse 32" cx="59" cy="56" rx="59" ry="56" fill="#D9D9D9" />
        </svg>adopterName="adopter Name" petName="petName" AdoptionDate="AdoptionDate" PetId="PetId" />
      </div>
    </div>
</>
  )
}

export default Dashboard

