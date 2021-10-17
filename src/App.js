import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import LocationsPage from "./pages/LocationsPage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      {/* <WebDesign /> */}
      {/* <AppDesign /> */}
      {/* <GraphicDesign /> */}
      {/* <AboutUs /> */}
      {/* <LocationsPage /> */}
      {/* <ContactPage /> */}
      <Footer />
    </div>
  );
}

export default App;
