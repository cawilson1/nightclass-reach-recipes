import React from "react";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import RecipeIndex from "./components/RecipeIndex";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
      <NavBar />
      <Router>
        <Home path="/" />
        <Recipes path="recipes">
          <Recipe path=":recipeId" />
          <RecipeIndex path="/" />
        </Recipes>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
