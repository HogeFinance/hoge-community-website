import React from "react";

import Button from "../Button/Button";
import Container from "react-bootstrap/Container";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

import "./Header.scss";

const Header = () => {

  return (
    <Container fluid className="header-wrapper">
      <NavbarMenu menu={[
        {page: "home"},
        {
          k: "about",
          pages: ["about1", "roadmap", "eco"]
        },
        {
          k: "historian",
          pages: ["historian1", "historian2", "historian3"]
        }
      ]} />
      <Container className="header">
        <div className="header-content">
          <div className="title">
            The Original. Pure DeFi.
          </div>
          <div className="subtitle">
            Community Powered.
          </div>
          <div className="text">
            From simple and humble meme token beginnings, to over 20+ projects and protocols deployed and in the works, Hoge continues to culture its mission: utility through community.
          </div>
          <div className="buttons">
            <a href="https://www.gooogle.com" className="btn-purple">Our ecosystem</a>
            <a href="https://www.gooogle.com" className="btn-secondary">See documentation</a>
          </div>
        </div>
      </Container>
      <Container fluid className="certik-wrapper">
        <Container className="certik">
          <div className="text">Full contract audit completed by</div>
          <div className="certik-logo" />
          <a href="https://www.gooogle.com" className="btn-secondary">View Report</a>
      </Container>
      </Container>
    </Container>
  );
};

export default Header;
