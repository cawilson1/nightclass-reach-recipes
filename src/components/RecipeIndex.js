import React, { useState, useEffect } from "react";
import recipesdb from "../recipesdb";
import RecipesListCard from "./RecipesListCard";

const RecipeIndex = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    //do a real request to an API/ server/db. Async fn usually
    setRecipes(recipesdb);
  }, []);
  return (
    <div>
      {recipes.map(recipe => {
        return <RecipesListCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};
export default RecipeIndex;
