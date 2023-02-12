/* eslint-disable jsx-a11y/anchor-has-content */
import Container from "react-bootstrap/Container";
import { yahoo, bloomberg, usatoday } from "common/links";
import "./Media.scss";

const Media = () => (
  <Container fluid className="media-wrapper">
    <Container className="media">
      <h3>Media</h3>
      <div className="links">
        <a href={yahoo} className="yahoo_finance"/>
        <a href={bloomberg} className="bloomberg"/>
        <a href={usatoday} className="usa_today"/>
      </div>
{/*      <div className="articles">
        <a href="#" className="btn">View Articles</a>
      </div>*/}
    </Container>
  </Container>
);

export default Media;
