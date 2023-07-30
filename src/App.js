import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Component/Header";
import LandingPage from "./Pages/LandingPage";
import RegistrationPage from "./Pages/RegistrationPage";
function App() {
  return (
    
    <div className="App">
    <Router>
    <Header/>
    <Routes>
   <Route path="/" element={ <LandingPage />}></Route>
   <Route path="/registration" element={ <RegistrationPage />}></Route>

   </Routes>
   </Router>
    </div>
           
     
  )
}

export default App;

