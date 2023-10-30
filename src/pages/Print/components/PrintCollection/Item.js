import PropTypes from "prop-types";

import "./Item.scss";
import React from "react";

const Item = ({image, name }) => {
  const assetUrl = new URL(`../${image}`, document.baseURI).href;
  const redirectUrl = new URL("../print", document.baseURI).href;

  return (
    <div className="item-music">
      <div className="image">
        <img src={image} alt={image}/>
      </div>
      <io-print-button
        contract-id="0xfAd45E47083e4607302aa43c65fB3106F1cd7607" //Address of the smart contract
        owner-id="0x1920bd8C66ef7F5AC44846413B74CB05f5182B14" //Owner's wallet address
        item-title={name}
        token-id={name}
        asset-url={assetUrl}
        redirect-url={redirectUrl}
        blockchain="eth"
        theme="dark"
      >
      </io-print-button>
    </div>
  )
};

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

export default Item;
