import React from "react"
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import LandingPage from "./Pages/LandingPage";
import RegistrationPage from "./Pages/RegistrationPage";
import Footer from "./Component/Footer";
function App() {
  return (
    
    <div className="App">
    <Router>
    <Header/>
    <Routes>
   <Route path="/" element={ <LandingPage />}></Route>
   <Route path="/registration" element={ <RegistrationPage />}></Route>

   </Routes>
    <Footer />
   </Router>
    </div>
           
     
  )
}

export default App;

