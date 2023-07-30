import React from "react";

function Footer() {
  return (
    <div className="footer_end ">
      <div className="footer row flex-column-reverse flex-md-row">
        <div className="footer_section_left col-12 col-md-6">
          <h1>poodles</h1>
          <p>
            Our mission is to connect homeless pets in India with loving homes.
            We offer stress-free pet adoption services .
          </p>
      
          <p className="contact"> 41,42 Bhamashah Technohub
          <br />
          Sansthan Path,Jaipur
          <br />
           India
          <br /><br />
          <strong>Phone:  </strong>
          +91 8619953434<br />
          <strong>Email:  </strong>
          info.altiereality@gmail.com<br />
          </p>
                  </div>

                  <div className="footer_section_right col-12 col-md-6">
                    <h4> Got Anything To share ? </h4>
                    <div className="input_container">
                      <input className="border-0 border rounded"></input>
                      <input className="border-0 border rounded"></input>
                      <input className="border-0 border rounded"></input>
                      <button className="btn border-0 border rounded">Connect Now</button>
                    </div>
                  </div>
                </div>
                  <p className="copyright">© 2023 Poodles petcare. All rights reserved</p>
                </div>
                );
}

                export default Footer;
