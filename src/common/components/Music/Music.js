import Container from "react-bootstrap/Container";
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';

import "./Music.scss";

const Music = () => (
  <Container fluid className="music-wrapper">
    <Container className="music">
      <div className="left">
        <div className="image" />
      </div>
      <div className="right">
        <h3>Music, Memes, and NFTs</h3>
        <div className="text">
          With community focus comes community talent. We’ve seen exceptional work being done in the music, art, meme, and NFT space by talented HOGE members. These works were done in true DeFi spirits, where the sweat from those building would push progress forward not just for them, but for everyone in HOGE collectively.
          <br /><br />
          Take a look below at what the HOGE community has created together in the past year and a half, and be inspired.
        </div>
        <div className="memes">
          <div className="bull" />
          <div className="text">
            <span>Memes. Memes. Memes. ‘Nuff said.</span>
            <a href="#">View Artwork<ArrowRight className="icon" /></a>
          </div>
        </div>
      </div>
    </Container>
  </Container>
);

export default Music;
