import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"
import MainSideOfDashboard from "./MainSideOfDashboard"

function PendingAdoptions({img,petName,status,fromDavid,viewAdoption}) {
    return ( <div className="pending_adoption row justify-content-between m-2 p-0 align-items-center">
        <div className="col-12 col-md-3">{img}</div>
        <div className="col-12 col-md-4">
          <h2>
            {petName}
          </h2>
          <br />
          <h2>
            {status}
          </h2>
        </div>
        <div className="col-12 col-md-5">
          <h2>
            {fromDavid}
          </h2>
          <br />
          <h2>         
<Link to="/AdoptionRequest" className="">
<div>{viewAdoption}</div>
</Link>
          </h2>
        </div>
      </div>

    );
  }

export default PendingAdoptions