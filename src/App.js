import React from "react";
import "./style/App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Page from "./Components/Page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Name">Paweł Dobrowolski</div>
        <div className="Center">
          <div className="Nav">
            <Nav />
          </div>
          <div className="Page">
            <Page />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
