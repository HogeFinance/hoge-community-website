import PropTypes from "prop-types";

import "./Item.scss";

const Item = ({image, name, text, url}) => (
  <div className="item-game">
    <a href={url} className="image">
      <img src={image} />
    </a>

    <div className="tem-game-inner">
      <div className="name">{name}</div>
      <div className="text">{text}</div>
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

export default Item;
