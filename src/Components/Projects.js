import React from "react";
import "../style/Projects.css";
import word from "../img/world-wide-web.png";
import github from "../img/github.png";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projekty</h1>
      <p>
        <h3>Pogoda</h3>
        <a
          className="App-link"
          href="https://dobrowolski-paw.github.io/weather-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={word} alt="www"></img>
        </a>
        <a
          className="App-link"
          href="https://github.com/pawwel3/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github"></img>
        </a>
      </p>
      <p>
        <h3>CosmoLight</h3>
        <a
          className="App-link"
          href="https://pawwel3.github.io/cosmolight/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={word} alt="www"></img>
        </a>
        <a
          className="App-link"
          href="https://github.com/pawwel3/cosmolight/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github"></img>
        </a>
      </p>
      <p>
        <h3>Calculator</h3>
        <a
          className="App-link"
          href=" https://pawwel3.github.io/calculator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={word} alt="www"></img>
        </a>
        <a
          className="App-link"
          href="https://github.com/pawwel3/calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github"></img>
        </a>
      </p>
      <p>
        <h3>Gra Pink-Pong na komputer</h3>
        <a
          className="App-link"
          href="https://pawwel3.github.io/ping-pong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={word} alt="www"></img>
        </a>
        <a
          className="App-link"
          href="https://github.com/pawwel3/ping-pong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github"></img>
        </a>
      </p>
      <p>
        <h3>Gra spostrzegawczość</h3>
        <a
          className="App-link"
          href="https://pawwel3.github.io/perceptivity/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={word} alt="www"></img>
        </a>
        <a
          className="App-link"
          href="https://github.com/pawwel3/perceptivity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github"></img>
        </a>
      </p>
      <p>
        <h3>Gra diamond</h3>

        <a
          className="App-link"
          href="https://github.com/pawwel3/Diamond"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github"></img>
        </a>
      </p>
      <p>
        <h3>Gra szubienica</h3>

        <a
          className="App-link"
          href="https://github.com/pawwel3/szubienica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github"></img>
        </a>
      </p>
    </div>
  );
};

export default Projects;
