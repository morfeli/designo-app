import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import Characteristics from "./components/Characteristics /Characteristics";
import GetInTouch from "./components/Contact/GetInTouch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Characteristics />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
