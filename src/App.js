import React from "react";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

function App() {
  return (
    <div style={{ backgroundColor: "lightgrey", minHeight: "100vh" }}>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
