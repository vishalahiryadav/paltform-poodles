import React from "react";
import Work from "../component/work";
import Motive from "../component/Motive";
import DataArray from "../component/DataArray";
import MotiveArray from "../component/MotiveArray";
import Footer from "../component/Footer";

function LandingPage() {
  
  
    return (
    <div>
      <div className="container-fluid d-flex">
        <div className="first_div col">
          <p className="first_div_1">
            Let’s Find Homes for Pets Together Join Our Adoption Platform
          </p>
          <p className="first_div_2">
            Pets are our loyal friends, showering us with love and affection.
            Now it’s our turn to help them find loving homes through our pet
            adoption platform.
          </p>
          <button className="first_div_signup text-white">SignUp</button>
        </div>
        <div className="m-0">
          <img src={require("./g10.png")} className="w-130" />
        </div>
      </div>
      <div className="section_2 text-white mx-5">
        Our mission is to provide a safe and reliable platform for NGOs to
        connect with loving families who are looking to adopt pets. We are
        committed to promoting responsible pet ownership and to working towards
        a future where every pet has a loving home
      </div>
      <div className="section_3 m-5">
        <p>Pet Adoption Made Easy: How Our Platform Connects NGOs and Adopters.</p>
        <div className="adoption d-flex">
       
        {DataArray.map(arr => (
          <Work
            key={arr.id}
            tag={arr.tag}
            heading={arr.heading}
            paragraph={arr.paragraph}
          />
        ))}   
        </div>
      </div>
      <div className="section_4 m-5">
            <p>Why Choose Our Pet Adoption Platform: Connecting NGOs and Adopters</p>
            <div className="connection d-flex">
       
       {MotiveArray.map(arr => (
         <Motive
           key={arr.id}
           tag={arr.tag}
           heading={arr.heading}
           paragraph={arr.paragraph}
         />
       ))}   
       </div>
      </div>
      <div className="section_5 m-7">
        <h2>JOIN OUR NEWSLETTER</h2>
        <p>Discover the Extraordinary World of Pet Adoption: Find Love, Loyalty, and Cuteness with Our Platform</p>
        <input type="email" />
        <button>Join Us</button>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
