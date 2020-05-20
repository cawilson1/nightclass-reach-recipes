import React from "react";
const Recipes = props => {
  console.log("recipes props", props);
  return <div>{props.props.children}</div>;
};

export default Recipes;
