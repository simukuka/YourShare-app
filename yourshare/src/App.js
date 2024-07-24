import React, {useState} from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BrowsePage } from "./pages/BrowsePage";
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
  const [currentPage, setCurrentPage] = useState("SignupPage");
  const [username, setUsername] = useState("");

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === "SignupPage" && (
        <SignupPage changePage={changePage} setUsername={setUsername} />
      )}
      {currentPage === "WelcomePage" && <WelcomePage username={username} />}
    </div>
  );

  // return (
  // <div className="App">
  //   <Routes>
  //     <Route path="/" element={<WelcomePage/>}/>
  //     <Route path="/community" element={<CommunityPage/>}/>
  //     <Route path="/additem" element={<AddItemPage/>}/>
  //     <Route path="*" element={<div>Page Not Found 484</div>}/>
  //   </Routes>
  // </div>
  // );
}

// function App() {
//   const [currentPage, setCurrentPage] = React.useState(pages.AccountPage);

//   const componentToShow = React.useMemo(() => {
//     let whichComponentToShow;

//     console.log("currentPage: " + currentPage);
//     switch (currentPage) {
//       case pages.CommunityPage:
//         whichComponentToShow = <CommunityPage changePage={setCurrentPage} />;
//         break;
//       case pages.AddItemPage:
//         whichComponentToShow = <AddItemPage changePage={setCurrentPage} />;
//         break;
//       case pages.WelcomePage:
//       default:
//         whichComponentToShow = <WelcomePage changePage={setCurrentPage} />;
//         break;
//     }
//     return whichComponentToShow;
//   }, [currentPage, setCurrentPage]);

//   return <div className="App">{componentToShow}</div>;
// }

export default App;
