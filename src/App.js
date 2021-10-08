import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
