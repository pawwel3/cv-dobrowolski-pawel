import React from "react";
import call from "../img/call.png";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
const Contact = () => {
  return (
    <div style={{ textAlign: "center", margin: "25px" }}>
      <h1>Kontakt</h1>
      <div style={{ margin: "20px" }}>
        <a href="tel:696049075">
          <img src={call} alt="telefon" />
          <br />
          <p>696 04 90 75</p>
        </a>
      </div>
      <div style={{ margin: "20px" }}>
        <a href="mailito:pawel.dobrowolski111@gmail.com">
          <img src={email} alt="email" />
        </a>

        <br />
        <p>pawel.dobrowolski111@gmail.com</p>
      </div>
      <div style={{ margin: "20px" }}>
        <a href="https://www.linkedin.com/in/paweł-dobrowolski-79198a182">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
