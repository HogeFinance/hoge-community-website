import PropTypes from "prop-types";

import "./Item.scss";
import React from "react";

const Item = ({image, name, artist, url}) => (
  <div className="item-music">
    <div className="image">
      <img src={image} alt={image} />
    </div>
    <io-print-button
      item-title={name}
      asset-url="https://ipfs.example.com/nft.mp4"
      redirect-url="https://example.com/token/12345"
      contract-id="0x1234567890"
      token-id="12345"
      owner-id="0x0987654321"
      blockchain="eth"
      theme="dark"
    >
    </io-print-button>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

export default Item;
