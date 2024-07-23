import React, {useState} from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { CommunityPage } from "./pages/CommunityPage";
import { SignupPage } from "./pages/SignupPage";

export const pages = {
  WelcomePage: "WelcomePage",
  CommunityPage: "CommunityPage",
  AddItemPage: "AddItemPage",
  SignupPage: "SignupPage",
};

function App() {
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
  )
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
