import React from 'react'

function DataArray2Call(props) {
  return <div className="img_with_text col-12 col-md-6 col-lg-4">
  <div>{props.img}</div>
  <div>
    <h4>{props.heading}</h4>
    <p>{props.paragraph}</p></div>
  </div>
}

export default DataArray2Call;