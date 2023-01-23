import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import "./Player.scss";

const Player = ({url}) => (
  <div className="elementor-widget-container">
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        url={url} />
    </div>
  </div>
);

Player.prototypes = {
  url: PropTypes.string.isRequired
}

export default Player;
