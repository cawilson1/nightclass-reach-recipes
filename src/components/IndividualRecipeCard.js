import React from "react";
import { Card } from "@material-ui/core";

const IndividualRecipeCard = ({ recipe }) => {
  return (
    <Card style={{ height: "70vh", margin: 20, padding: 10 }}>
      <div>{recipe.food}</div>
      <img src={recipe.image} alt={"recipe"} width={200} />
      <div>{recipe.instructions}</div>
      <div>{recipe.id}</div>
    </Card>
  );
};

export default IndividualRecipeCard;
