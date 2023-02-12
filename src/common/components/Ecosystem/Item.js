import PropTypes from "prop-types";

import "./Item.scss";
import {ReactComponent as ArrowRight} from "../../icons/arrow-right.svg";

const Item = ({image, name, text, url}) => (
  <div className="item-eco">
    <div className="image">
      <img src={image} alt={image} />
    </div>

    <div className="item-eco-inner">
      <div className="name">{name}</div>
      <div className="text">{text}</div>
      <a href={url}>Learn More<ArrowRight className="icon" /></a>
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
