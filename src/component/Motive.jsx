import React from 'react'

function Motive(props) {
    return <div>
      {props.tag}
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
    </div>
}

export default Motive;