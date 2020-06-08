import React from "react";
import { NavLink, Route } from "react-router-dom";
import Java from "./Java";
import java from "../img/java.png";
import js from "../img/js.png";
import github from "../img/github.png";
import react from "../img/react.png";
import "../style/Completed.css";
import ReactCert from "./ReactCert";
import GitCert from "./GitCert";
import Js from "./Js";
const kursList = [
  { name: "Java", path: "/completed/java", src: java },
  { name: "JavaScript", path: "/completed/javaScript", src: js },
  { name: "Reakt od podstaw", path: "/completed/react", src: react },
  { name: "Wprowadzenie do Git i GitHub", path: "/completed/git", src: github },
];
const Completed = () => {
  const kurs = kursList.map((item) => (
    <div key={item.name}>
      <NavLink to={item.path} style={{ textDecoration: "none" }}>
        <img src={item.src} alt={item.name}></img>
        <br />
        {item.name}
      </NavLink>
    </div>
  ));

  return (
    <div className="Completed">
      <h1>Kursy ukończone</h1>
      <div className="Kurs">{kurs}</div>
      <div>
        <Route path="/completed/java" component={Java} />
        <Route path="/completed/javaScript" component={Js} />
        <Route path="/completed/react" component={ReactCert} />
        <Route path="/completed/git" component={GitCert} />
      </div>
    </div>
  );
};

export default Completed;
