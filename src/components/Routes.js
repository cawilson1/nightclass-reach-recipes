import React from "react";
import { Router } from "@reach/router";
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import Recipe from "../components/Recipe";
import RecipeIndex from "../components/RecipeIndex";
import NotFound from "../components/NotFound";

function Routes() {
  return (
    <Router>
      <HomePage path="/" />
      <RecipesPage path="recipes">
        <Recipe path=":recipeId" />
        <RecipeIndex path="/" />
      </RecipesPage>
      <NotFound default />
    </Router>
  );
}

export default Routes;
