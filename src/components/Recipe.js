import React, { useState, useEffect } from "react";
import recipesdb from "../recipesdb";
import { Link } from "@reach/router";
import IndividualRecipeCard from "./IndividualRecipeCard";

function findRecipe(recipeId) {
  return recipesdb.find(recipe => recipe.id === Number(recipeId));
}

const Recipe = ({ recipeId }) => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    //would be an async api call in a real app
    setRecipe(findRecipe(recipeId));
  }, []);

  if (!recipe) {
    return (
      <div>
        Sorry, no recipe matches the id {recipeId}!<br />
        Have you searched for your recipe on our{" "}
        <Link to="/recipes">recipes page</Link>?
      </div>
    );
  }

  return <IndividualRecipeCard recipe={recipe} />;
};

export default Recipe;
