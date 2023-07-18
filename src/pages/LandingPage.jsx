import React from "react";

function LandingPage() {
  return (
    <div className="container-fluid d-flex">
      <div>
        <p class="section_1_1">
          Let’s Find Homes for Pets Together Join Our Adoption Platform
        </p>
        <p class="section_1_2">
          Pets are our loyal friends, showering us with love and affection. Now
          it’s our turn to help them find loving homes through our pet adoption
          platform.
        </p>
        <button class="signup">SignUp</button>
      </div>
      <div>
      <img src={require('./g10.png')} className="dia" />

</div>
    </div>
  );
}

export default LandingPage;
