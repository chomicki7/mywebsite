import React, { Component } from "react";
import "./Main.css";
import Calculator from "../calc2.png";
import Track from "../track2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} border/>;
const envelope = <FontAwesomeIcon icon={faEnvelope} border />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} border />;

class Main extends Component {
  render() {
    return (
      <div>
        <section className="about">
          <div className="title">
            <h1>Mariano Chomicki</h1>
            <h3> &#60; Web Developer &#62;</h3>
            <ul className="list">
              <a href="#work">
                <li>Works</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
            <div className="description">
              <p>
                <span>Self taught</span> developer,<span>eager to learn</span>{" "}
                new technologies. <span>Highly motivated</span> and
                <span> goal-oriented</span> individual committed to pursuing a
                long-term career change in development. Looking to take
                advantage of having a customer-service oriented background that
                provided me with soft skills such as problem solving, team
                player attitude, and great adaptability.
              </p>
            </div>
          </div>
        </section>
        <section className="work" id="work">
          <h2>Last projects I have done</h2>
          <h3>
            <span>&#60;</span> Calculator Vanilla JS <span>&#62;</span>
          </h3>
          <a
            href="https://codepen.io/chomicki7/pen/yLJMQJr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Calculator} alt="calculadora"></img>
          </a>
          <h3>
            <span>&#60;</span> Note-like Gym tracking App <span>&#62;</span>
          </h3>
          <a
            href="https://codepen.io/chomicki7/pen/KKMWrQL"
            target="_blank"
            rel="noopener noreferrer"
            className="margin"
          >
            <img src={Track} alt="track app"></img>
          </a>
        </section>

        <section id="contact" className="contact">
          <h2>Contacta conmigo!</h2>
          <div className="links">
            <a
              href="mailto:chomicki7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {envelope}
            </a>
            <a
              href="https://github.com/chomicki7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {github}
            </a>
            <a
              href="https://www.linkedin.com/in/mariano-chomicki-134829103/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedin}
            </a>
          </div>
        </section>
      </div>
    );
  }
}
export default Main;