import React from "react";
import { Card } from "@material-ui/core";

const IndividualRecipeCard = props => {
  return (
    <Card style={{ height: "70vh", margin: 20, padding: 10 }}>
      <div>{props.recipe.food}</div>
      <img src={props.recipe.image} alt={"recipe"} width={200} />
      <div>{props.recipe.instructions}</div>
      <div>{props.recipe.id}</div>
    </Card>
  );
};

export default IndividualRecipeCard;
