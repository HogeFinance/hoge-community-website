import Container from "react-bootstrap/Container";

import "./GamingTop.scss";

const GamingTop = () => {

  return (
    <Container fluid className="gamingtop-wrapper">
      <Container className="gamingtop">
        <a href="https://hoge.fun/#servers" className="btn-purple join" target="_blank" rel="noreferrer">
          HOGE.FUN</a>
      </Container>
    </Container>
  );
};

export default GamingTop;
