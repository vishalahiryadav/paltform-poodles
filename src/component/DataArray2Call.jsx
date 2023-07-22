import React from 'react'

function DataArray2Call(props) {
  return <div className="img_text">
  <div>{props.img}</div>
  <div className='head_text'>
    <h4>{props.heading}</h4>
    <p>{props.paragraph}</p></div>
  </div>
}

export default DataArray2Call;