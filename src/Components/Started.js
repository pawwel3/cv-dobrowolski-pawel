import React from "react";
import react from "../img/react.png";
import php from "../img/php.png";
import "../style/Started.css";
const Started = () => {
  return (
    <div className="Started">
      <h1>Kursy rozpoczęte</h1>
      <div>
        <img src={react} alt="react logo"></img>
        <h3>React dla średnio zaawansowanych</h3>
        <lu>
          <li>Redux</li>
          <li>Styled-components</li>
          <li>React memo</li>
          <li>Portals</li>
          <li>React Final Form</li>
          <li>JSON Server</li>
          <li>Redux middlewares</li>
          <li>React hooks</li>
          <li>React lazy i Suspense</li>
          <li>React Query</li>
          <li>Context API</li>
        </lu>
      </div>
      <div>
        <img src={php} alt="php logo"></img>
        <h3>Programowanie w PHP 7.4 od podstaw - teoria i praktyka</h3>
        <lu>
          <li>składnia PHP</li>
          <li>podstawy bazy danych MySQL</li>
          <li>architektura projektu jak w rzeczywistej pracy</li>
          <li>programowanie obiektowe w PHP</li>
          <li>dobre praktyki programowania</li>
          <li>architektura MVC i metody CRUD</li>
        </lu>
      </div>
    </div>
  );
};

export default Started;
