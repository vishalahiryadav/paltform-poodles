import React from "react";

function Work(props) {
    return <div>
      {props.tag}
      <h3>{props.heading}</h3>
      <p>{props.paragraph}</p>
    </div>

}

export default Work;



