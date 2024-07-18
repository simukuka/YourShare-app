import React from "react";
// import { pages } from "../App";
import { Link, useNavigate } from "react-router-dom";


export const WelcomePage = (props) => {

  };

export const CommunityPage = (props) => {
    const navigate = useNavigate();
  const handleSubmit = (event)=>{
    event.preventDefault();
    navigate("/additem")
  }
  return (
    <div>
      <h1>Community</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name"></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <p> <Link to="/additem">Sign In</Link></p>
    </div>
  );
};
