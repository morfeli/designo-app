import React, {Suspense} from "react";
import Header from "./components/Header/Header";

import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import LocationsPage from "./pages/LocationsPage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Utility/ScrollToTop";

const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="centered">
              Loading..
          </div>
        }
      <Header />
      <Switch>
        <Route path="/" exact>
          <ScrollToTop />
          <HomePage />
        </Route>
        <Route path="/web-design" exact>
          <ScrollToTop />

          <WebDesign />
        </Route>
        <Route path="/app-design" exact>
          <ScrollToTop />

          <AppDesign />
        </Route>
        <Route path="/graphic-design" exact>
          <ScrollToTop />

          <GraphicDesign />
        </Route>
        <Route path="/about" exact>
          <ScrollToTop />

          <AboutUs />
        </Route>
        <Route path="/locations" exact>
          <ScrollToTop />

          <LocationsPage />
        </Route>
        <Route path="/contact">
          <ScrollToTop />

          <ContactPage />
        </Route>
        <Route path="*">
          <ScrollToTop />

          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
