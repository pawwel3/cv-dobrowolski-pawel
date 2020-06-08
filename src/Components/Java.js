import React from "react";
import javaCert01 from "../img/javaCert01.jpg";
import javaCert02 from "../img/javaCert02.jpg";
import javaCert03 from "../img/javaCert03.jpg";
import "../style/Java.css";
const Java = () => {
  return (
    <div className="Certy">
      <img
        src={javaCert01}
        alt="certyfikat java"
        style={{ width: "33%", float: "left" }}
      />
      <img
        src={javaCert02}
        alt="certyfikat java"
        style={{ width: "33%", float: "left" }}
      />
      <img
        src={javaCert03}
        alt="certyfikat java"
        style={{ width: "33%", float: "left" }}
      />
    </div>
  );
};

export default Java;
