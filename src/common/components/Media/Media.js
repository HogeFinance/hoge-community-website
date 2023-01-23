import React from "react";

import Container from "react-bootstrap/Container";

import "./Media.scss";

const Media = () => (
  <Container fluid className="media-wrapper">
    <Container className="media">
      <h3>Media</h3>
      <div className="links">
        <a href="#" className="yahoo_finance" />
        <a href="#" className="bloomberg" />
        <a href="#" className="usa_today" />
      </div>
      <div className="articles">
        <a href="#" className="btn-secondary">View Articles</a>
      </div>
    </Container>
  </Container>
);

export default Media;
