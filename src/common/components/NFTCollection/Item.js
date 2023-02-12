import PropTypes from "prop-types";

import "./Item.scss";

const Item = ({image, name, text, url}) => (
  <div className="item">
    <div className="image">
      <img src={image} alt={image} />
    </div>
    <div className="name">{name}</div>
    <div className="text">{text}</div>
    <a href={url} className="btn">View Collection</a>
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
