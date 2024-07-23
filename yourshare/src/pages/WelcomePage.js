import React from "react";

import { Link, useNavigate } from "react-router-dom";


export const WelcomePage = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (event)=>{
    event.preventDefault();
    navigate("/community")

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name"></input>
        </label>
        <button type="submit">Submit</button>
      </form>
     <p> <Link to="/community">Sign In</Link></p>

    </div>
  );
};
