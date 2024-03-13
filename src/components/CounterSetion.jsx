import React from "react";
import { Link } from "react-router-dom";

import "../styles/CounterSetion.css";

import Button from "@mui/material/Button";

import titileVDO from "../assets/TitleVDO.mp4";
import { BsGithub } from "react-icons/bs";

const CounterSetion = () => {
  return (
    <div className="container-counter">
      <div className="section-title">
        <h1>Job Inter View at Synerry</h1>
        <p>
          REACT JS | Nodejs + Swagger API Doc | MongoDB | GoogleCloud |
          Microservice
        </p>
        <div className="buttun-title">
          <Button className="githubButton" to="/">
            <BsGithub />
          </Button>
        </div>
      </div>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={titileVDO} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default CounterSetion;
