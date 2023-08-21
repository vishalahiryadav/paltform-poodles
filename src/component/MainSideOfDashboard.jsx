import React from "react";
import Address from "../Component/Addrass";
import Long_tab from "../Component/Long_tab";

function MainSideOfDashboard() {
  return (
    <div className="main_area row gap-5">
 
        <Address />
        <div className="group_of_long_tab col-12 col-md-6 d-flex flex-column justify-content-end align-items-end">
          <Long_tab value="Number Of Pet Profile  :130" />
          <Long_tab value="Total Adoption : 10" />
          <Long_tab value="New Bookings : 5" />
        </div>
    </div>
  );
}

export default MainSideOfDashboard;
