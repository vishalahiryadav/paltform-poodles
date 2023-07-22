import React from "react";

function Footer() {
  return (
    <div className="footer_img">
      <img src={require("./a.svg").default} />
    <div className="footer d-flex ">
      <div className="footer_section_left">
        <h1>poodles</h1>
        <p>
          Our mission is to connect homeless pets in India with loving homes. We
          offer stress-free pet adoption services .
        </p>
        <div className="contact d-flex">
          <p>contact@poodles.in</p>
          <p>BTH,Jaipur</p>
        </div>
      </div>
    
    <div className="footer_section_right">
        <h4> Got Anything To share ? </h4>
        <div>
        <input className="border-0 border rounded"></input>
        <input className="border-0 border rounded"></input>
        <input className="border-0 border rounded"></input>
        <button className="border-0 border rounded">Connect Now</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Footer;
