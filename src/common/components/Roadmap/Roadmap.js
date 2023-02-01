import Container from "react-bootstrap/Container";
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Insta } from '../../icons/insta.svg';
import { ReactComponent as Discord } from '../../icons/discord.svg';
import { ReactComponent as Youtube } from '../../icons/youtube.svg';
import { ReactComponent as Telegram } from '../../icons/telegram.svg';
import { ReactComponent as Medium } from '../../icons/medium.svg';

import "./Roadmap.scss";

const Roadmap = () => {

  return (
    <Container fluid className="roadmap-wrapper">
      <a href="https://www.gooogle.com" className="btn-purple roadmap">See 2023 Roadmap</a>
      <Container fluid className="social-wrapper">
        <Container className="social">
          <div className="text">
            Join the DeFi Hoge community and stay updated on everything we’re doing!
          </div>
          <div className="links">
            <a href="#"><Twitter /></a>
            <a href="#"><Insta /></a>
            <a href="#"><Discord /></a>
            <a href="#"><Youtube /></a>
            <a href="#"><Telegram /></a>
            <a href="#"><Medium /></a>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default Roadmap;
