import React from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return(
  
  <div className="App">
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/additem" element={<AddItemPage/>}/>
      <Route path="*" element={<div>Page Not Found 484</div>}/>
    </Routes>
</div>);
}

export default App;
