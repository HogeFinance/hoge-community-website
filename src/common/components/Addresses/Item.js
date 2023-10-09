import PropTypes from "prop-types";

import "./Item.scss";
import React from "react";
import Button from "../Button/Button";

const Item = ({name, addr, text, url}) => (
  <div className="item-addr">
    <div className="item-addr-inner">
      <div className="name"><h4>{name}</h4></div>
      <div className="addr">
        <a href={url} className="eth" target="_blank">{addr}</a>
        <Button k={"Copy Address"} className="btn" onClick={() => {navigator.clipboard.writeText(addr)}} />
      </div>
      <div className="text">{text}</div>
    </div>
    <div className="separator" />
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    addr: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

export default Item;
