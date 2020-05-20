import React from "react";
import { Card } from "@material-ui/core";
import { navigate } from "@reach/router";

function something(recipe) {
  return navigate(`/recipes/${recipe.id}`);
}

const RecipesListCard = ({ recipe }) => {
  return (
    <Card onClick={() => something(recipe)} style={{ margin: 20, padding: 10 }}>
      <div>{recipe.food}</div>
      <img src={recipe.image} alt={"recipe"} width={200} />
      <div>{recipe.instructions}</div>
      <div>{recipe.id}</div>
    </Card>
  );
};
export default RecipesListCard;
