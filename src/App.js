import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import recipesdb from "./recipesdb";
import { Card } from "@material-ui/core";

const Home = () => {
  return <div>Home</div>;
};
const Recipes = props => {
  return <div>{props.children}</div>;
};
const RecipeIndex = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    //do a real request to an API/ server/db. Async fn usually
    setRecipes(recipesdb);
  }, []);
  return (
    <div>
      {recipes.map(recipe => {
        return (
          <Card style={{ margin: 20, padding: 10 }}>
            <div>{recipe.food}</div>
            <img src={recipe.image} alt={"recipe"} width={200} />
            <div>{recipe.instructions}</div>
            <div>{recipe.id}</div>
          </Card>
        );
      })}
    </div>
  );
};
const Recipe = props => {
  return <div>Recipe {props.recipeId}</div>;
};
const NotFound = () => {
  return <div>Sorry, there is no page at this location!</div>;
};

function App() {
  return (
    <div style={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
      <nav>
        <Link to="/">Home</Link> <Link to="/recipes">Recipes</Link>
      </nav>

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
