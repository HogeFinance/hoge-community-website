import React from "react";

import Container from "react-bootstrap/Container";
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Insta } from '../../icons/insta.svg';

import "./Roadmap.scss";

const Roadmap = () => {

  return (
    <Container fluid className="roadmap-wrapper">
      <Container fluid className="social-wrapper">
        <Container className="social">
          <div className="text">
            Join the DeFi Hoge community and stay updated on everything we’re doing!
          </div>
          <div className="links">
            <a href="#"><Twitter /></a>
            <a href="#"><Insta /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Insta /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Insta /></a>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default Roadmap;
