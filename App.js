import Layout from "layouts";
import Home from "pages/Home";
import Policy from "pages/Policy";
import React from "react";
import ReactGA from "react-ga4";
import { Route } from "react-router-dom";
import "styles/App.scss";

function App() {

  return (
    <Layout ga={ReactGA}>
      <Route path="/" element={<Home ga={ReactGA} />} />
      <Route path="/privacy" element={<Policy />} />
      <Route path="/*" element={<Home ga={ReactGA} />} />
    </Layout>
  );
}

export default App;
