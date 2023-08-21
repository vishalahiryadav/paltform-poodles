import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import LandingPage from "./Page/LandingPage";
import RegistrationPage from "./Page/RegistrationPage";
import Dashboard from "./Page/Dashboard";
import Footer from "./Component/Footer";
import NgoPets from "./Page/NgoPets";
import Bookings from "./Page/Bookings";
import ContactUs from "./Page/ContactUs"
import Settings from "./Page/Settings"
import AdoptionRequest from "./Page/AdoptionRequest";
import PetId from "./Page/PetId";

function App() {
  return (
    
    <div className="App">
    <Router>
    <Header/>
    <Routes>
   <Route path="/" element={ <LandingPage />}></Route>
   <Route path="/registration" element={ <RegistrationPage />}></Route>
   <Route path="/Dashboard" element={ <Dashboard />}></Route>
   {/* <Route path="/Dashboard" element={ <Dashboard />}></Route> */}
   <Route path="/NgoPets" element={ <NgoPets />}></Route>
   <Route path="/Bookings" element={ <Bookings />}></Route>
   <Route path="/ContactUs" element={ <ContactUs />}></Route>
   <Route path="/Settings" element={ <Settings />}></Route>
   <Route path="/AdoptionRequest" element={ <AdoptionRequest />}></Route>
   <Route path="/PetId" element={ <PetId />}></Route>
   </Routes>
   </Router>


    </div>
           
     
  )
}

export default App;

