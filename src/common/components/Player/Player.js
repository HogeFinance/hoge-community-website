import PropTypes from "prop-types";

import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";

import "./Player.scss";

const Player = ({url, autoPlay =  false, showControls = false, loop = false}) => {

  return (
    <Container fluid>
      <Container className="player">
        <div className="elementor-widget-container">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url={url}
              controls={showControls}
              playing={autoPlay}
              volume={0.1}
              loop={loop}
            />
          </div>
        </div>
      </Container>
    </Container>
  )
};

Player.prototypes = {
  url: PropTypes.string.isRequired
}

export default Player;
