import Container from "react-bootstrap/Container";

import "./GamingTop.scss";

const GamingTop = () => {

  return (
    <Container fluid className="gamingtop-wrapper">
      <Container className="gamingtop">
        <a href="https://www.gooogle.com" className="btn-purple join">Our ecosystem</a>
      </Container>
    </Container>
  );
};

export default GamingTop;
