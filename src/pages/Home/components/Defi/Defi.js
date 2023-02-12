import Container from "react-bootstrap/Container";
import { certikUrl } from "../../../../common/links";
import "./Defi.scss";

const Defi = () => {

  return (
    <Container fluid className="defi-wrapper">
      <Container className="defi">
        <div className="defi-content">
          <h1 className="title">
            The Original. Pure DeFi.
          </h1>
          <h1 className="subtitle">
            Community Powered.
          </h1>
          <div className="text">
            From simple and humble meme token beginnings, to over 20+ projects and protocols deployed and in the works, Hoge continues to culture its mission: utility through community.
          </div>
          <div className="buttons" hidden={true}>
            <a href="/ecosystem" className="btn-purple">Our ecosystem</a>
            <a href="/docs" className="btn">See documentation</a>
          </div>
        </div>
      </Container>
      <Container fluid className="certik-wrapper">
        <Container className="certik">
          <div className="text">Full contract audit completed by</div>
          <div className="certik-logo" />
          <a href={certikUrl} className="btn">View Report</a>
        </Container>
        <div className="separator-gradient" />
      </Container>
    </Container>
  );
};

export default Defi;
