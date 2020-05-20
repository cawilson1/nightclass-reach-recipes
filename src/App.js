import React, { useState, useEffect } from "react";
import { Router, Link, navigate } from "@reach/router";
import recipesdb from "./recipesdb";
import { Card } from "@material-ui/core";

const Home = () => {
  return <div>Your fave app for viewing 4 recipes!</div>;
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
        return <RecipesListCard recipe={recipe} />;
      })}
    </div>
  );
};
const Recipe = props => {
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    //would be an async api call in a real app
    setRecipe(recipesdb.find(recipe => recipe.id === Number(props.recipeId)));
  }, []);

  if (!recipe) {
    return (
      <div>
        Sorry, no recipe matches the id {props.recipeId}!<br />
        Have you searched for your recipe on our{" "}
        <Link to="/recipes">recipes page</Link>?
      </div>
    );
  }

  return <IndividualRecipeCard recipe={recipe} />;
};

const RecipesListCard = props => {
  return (
    <Card
      onClick={() => navigate(`/recipes/${props.recipe.id}`)}
      style={{ margin: 20, padding: 10 }}
    >
      <div>{props.recipe.food}</div>
      <img src={props.recipe.image} alt={"recipe"} width={200} />
      <div>{props.recipe.instructions}</div>
      <div>{props.recipe.id}</div>
    </Card>
  );
};

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

const NotFound = () => {
  return <div>Sorry, there is no page at this location!</div>;
};

function App() {
  return (
    <div style={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
      <nav style={{ backgroundColor: "gold", height: "5vh" }}>
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
