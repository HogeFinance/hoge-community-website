import Container from "react-bootstrap/Container";

import "./Defi.scss";

const Defi = () => {

  return (
    <Container fluid className="defi-wrapper">
      <Container className="defi">
        <div className="defi-content">
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
            <a href="https://www.gooogle.com" className="btn">See documentation</a>
          </div>
        </div>
      </Container>
      <Container fluid className="certik-wrapper">
        <Container className="certik">
          <div className="text">Full contract audit completed by</div>
          <div className="certik-logo" />
          <a href="https://www.gooogle.com" className="btn">View Report</a>
        </Container>
      </Container>
    </Container>
  );
};

export default Defi;
