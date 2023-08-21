import React from 'react'
import Short_tab from '../Component/Short_tab'
import Sidebar from "../Component/Sidebar"
import MainSideOfDashboard from "../Component/MainSideOfDashboard"

function Settings() {
  return (<>  <Sidebar />
  <MainSideOfDashboard />
    <div className='main_area_bottom'>
    <textarea className='ngo_discription m-auto' placeholder='Short Ngo Description'></textarea>
    <div className='row align-items-center'>

        <div className='col-12 col-md-2'>
         <img src="/Image/Ellipse 32.svg" alt="" />
        </div>
        <div className='col-12 col-md-3'> <Short_tab img="../Image/Group 33.svg" value="Add Pet" className=" p-0" /></div>
        <div className='col-12 col-md-3'><Short_tab img="../Image/G.svg" value="All Pets" className="p-0" /></div>
 
      </div>
      <form action="post" className="row">
      <input className='a' placeholder="hind"></input>
      <button className='b'>Upadate</button>
      </form>

      <form action="post" className="row" >
      <input className='a' placeholder="hind"></input>
      <button className='b'>Upadate</button>
      </form> 
    </div>
    </>
  )
}

export default Settings