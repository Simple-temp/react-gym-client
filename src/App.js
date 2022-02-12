import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdvancedGym from "./Pages/AdvancedGym/AdvancedGym/AdvancedGym";
import Classes from "./Pages/Classes/Classes/Classes";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/advancedgym/:key" element={<AdvancedGym/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
