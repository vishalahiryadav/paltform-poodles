import React from "react";

function DataArray1Call(props) {
    return <div className="card_box_1 col-12 col-md-4">
      {props.img}
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
    </div>

}

export default DataArray1Call;



