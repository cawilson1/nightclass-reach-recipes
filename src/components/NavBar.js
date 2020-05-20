import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "gold", height: "5vh" }}>
      <Link to="/">Home</Link> <Link to="/recipes">Recipes</Link>
    </nav>
  );
};
export default NavBar;
