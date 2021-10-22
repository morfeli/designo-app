import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import { BoxLoading } from "react-loadingg";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Utility/ScrollToTop";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const WebDesign = React.lazy(() => import("./pages/WebDesign"));
const AppDesign = React.lazy(() => import("./pages/AppDesign"));
const GraphicDesign = React.lazy(() => import("./pages/GraphicDesign"));
const LocationsPage = React.lazy(() => import("./pages/LocationsPage"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<BoxLoading />}>
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
      </Suspense>
    </div>
  );
}

export default App;
