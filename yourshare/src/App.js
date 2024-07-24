import React from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BrowsePage } from "./pages/BrowsePage";
import { BorrowItem } from "./pages/BurrowItem";
import { SignupPage } from "./pages/SignupPage";
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return(
   
  
  <div className="App">
     <nav>
      <ul>
        <li>
          <Link to="/">Welcome Page</Link>

        </li>
        <li>
          <Link to="/community">Community Page</Link>
          
        </li>
        <li>
          <Link to="/additem">Add Item</Link>
        </li>
        <li>
          <Link to="/browse">Browse Item</Link>
        </li>
        <li>
          <Link to="/signup">Signup Page</Link>
        </li>
        <li>
          <Link to="/borrow">Borrow Page</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/community" element={<CommunityPage/>}/>
      <Route path="/additem" element={<AddItemPage/>}/>
      <Route path ="/browse" element ={<BrowsePage/>}/>
      <Route path ="/borrow" element ={<BorrowItem/>}/>
      <Route path ="/signup" element ={<SignupPage/>}/>
      <Route path="*" element={<div>Page Not Found 484</div>}/>
    </Routes>
</div>);
}

export default App;
