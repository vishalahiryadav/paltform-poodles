import React from "react";
import { Link } from "react-router-dom";

function Adopted({img,petName,adopterName,AdoptionDate,PetId}) {
  return (
    <div className="adopted row justify-content-center m-2 p-0 align-items-center">
      <div className="col-12 col-md-3">{img}</div>
      <div className="col-12 col-md-4">
        <h2>
          {adopterName}
        </h2>
        <br />
        <h2>
          {petName}
        </h2>
      </div>
      <div className="col-12 col-md-5">
        <h2 className="p-0">
          {AdoptionDate}
        </h2>
        <br />
        <h2> 
       <Link to="/PetId" className="">
       <div>{PetId}</div>
      </Link>
        </h2>
      </div>
    </div>
  );
}


export default Adopted;

