import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import WebDesign from "./pages/WebDesign";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <WebDesign />
      <Footer />
    </div>
  );
}

export default App;
