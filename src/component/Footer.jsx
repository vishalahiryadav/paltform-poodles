import React from "react";

function Footer() {
  return (
    <div className="footer m-5 d-flex ">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1000"
          height="450"
          viewBox="0 0 707 380"
          fill="none"
        >
          <path
            d="M53.8113 289.496C-28.8168 347.708 9.66108 547.278 9.66108 547.278L768.033 439.444L706.514 6.79615C706.514 6.79615 519.297 -31.2268 478.073 76.6507C436.849 184.528 303.281 69.1829 235.321 187.932C167.361 306.682 136.439 231.284 53.8113 289.496Z"
            fill="#D3DB50"
          />
        </svg>
        <div>
        <h4> Got Anything To share ? </h4>
        <input></input>
        <input></input>
        <input></input>
        <button>Connect Now</button>
        </div>
      </div>
     
    </div>
  );
}

export default Footer;
