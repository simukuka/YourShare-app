import React, {useState} from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BorrowItem } from "./pages/BurrowItem";
import { SignupPage } from "./pages/SignupPage";
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const pages = {
  WelcomePage: "WelcomePage",
  CommunityPage: "CommunityPage",
  AddItemPage: "AddItemPage",
  SignupPage: "SignupPage",
};

function App() {

  return(
   
  
  <div className="App">
     <nav>
      <ul>
        <ul>
          <Link to="/">Signup Page</Link>
        </ul>
        <ul>
          <Link to="/welcome">Welcome Page</Link>
        </ul>
        <ul>
          <Link to="/community">Community Page</Link>
          
        </ul>
        <ul>
          <Link to="/additem">Add Item</Link>
        </ul>
        <ul>
          <Link to="/borrow">Borrow Page</Link>
        </ul>
      </ul>
    </nav>
    
    <Routes>
      <Route path="/" element={<SignupPage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/additem" element={<AddItemPage/>}/>
      <Route path ="/borrow" element ={<BorrowItem/>}/>
      <Route path ="/welcome" element ={<WelcomePage/>}/>
      <Route path="*" element={<div>Page Not Found 484</div>}/>
    </Routes>
  </div>
  );
}

export default App;
