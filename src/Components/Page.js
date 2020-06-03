import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Completed from "./Completed";
import Started from "./Started";
import Projects from "./Projects";
const Page = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/completed" component={Completed} />
      <Route path="/started" component={Started} />
      <Route path="/projects" component={Projects} />
    </div>
  );
};

export default Page;
