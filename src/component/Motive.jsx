import React from 'react'

function Motive(props) {
  return <div className="hind">
  <div>{props.tag}</div>
  <div>
    <h3>{props.heading}</h3>
    <p>{props.paragraph}</p></div>
  </div>
}

export default Motive;