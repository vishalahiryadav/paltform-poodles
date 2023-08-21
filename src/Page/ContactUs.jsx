import React from 'react'
import PendingAdoptions from '../Component/PendingAdoptions'
import Sidebar from "../Component/Sidebar"
import MainSideOfDashboard from "../Component/MainSideOfDashboard"

function contactUs() {
  return (<>  <Sidebar />
  <MainSideOfDashboard /><div className="main_area_bottom">

    <div className='contact_box d-flex flex-column text-center align-items-center mt-5 gap-5'>
      <button className='contact_us_button mt-4'>Contact us</button>
      <p className=''>Got something to share ?Feel free to reach us.</p>
      <p>Email: Demo@email.com</p>
      <p>Mobile:179914</p>

    </div>

  </div>
  </>
  )
}

export default contactUs