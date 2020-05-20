import React from "react";
import Recipes from "../components/Recipes";

const RecipesPage = props => {
  console.log("recipespage", props);
  return <Recipes props={props} />;
};

export default RecipesPage;
