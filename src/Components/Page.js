import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Completed from "./Completed";
import Started from "./Started";
import Projects from "./Projects";
import Contact from "./Contact";
const ErrorPage = () => (
  <h1 style={{ textAlign: "center" }}>
    Stron nie istnieje
    <br /> przejdz na:
    <br />
    <a href="https://pawwel3.github.io/cv-dobrowolski-pawel/">Home</a>
  </h1>
);
const Page = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/completed" component={Completed} />
        <Route path="/started" component={Started} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Page;
