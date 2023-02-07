import Container from "react-bootstrap/Container";
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Insta } from '../../icons/insta.svg';
import { ReactComponent as Telegram } from '../../icons/telegram.svg';
// import { ReactComponent as Discord } from '../../icons/discord.svg';
// import { ReactComponent as Youtube } from '../../icons/youtube.svg';
// import { ReactComponent as Medium } from '../../icons/medium.svg';
// import { ReactComponent as TikTok } from '../../icons/tiktok.png';

import "./Roadmap.scss";

const Roadmap = () => {

  return (
    <Container fluid className="roadmap-wrapper">
      <a href="/roadmap" className="btn-purple roadmap">See 2023 Roadmap</a>
      <Container fluid className="social-wrapper">
        <Container className="social">
          <div className="text">
            Join the DeFi Hoge community and stay updated on everything we’re doing!
          </div>
          <div className="links">
            <a href="https://twitter.com/HogeFinance"><Twitter /></a>
            <a href="https://www.instagram.com/officialhoge/"><Insta /></a>
            <a href="https://t.me/hogefinance"><Telegram /></a>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default Roadmap;
