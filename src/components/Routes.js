import React from "react";
import { Router } from "@reach/router";
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import RecipePage from "../pages/RecipePage";
import RecipeIndexPage from "../pages/RecipeIndexPage";
import NotFoundPage from "../pages/NotFoundPage";

function Routes() {
  return (
    <Router>
      <HomePage path="/" />
      <RecipesPage path="recipes">
        <RecipePage path=":recipeId" />
        <RecipeIndexPage path="/" />
      </RecipesPage>
      <NotFoundPage default />
    </Router>
  );
}

export default Routes;
