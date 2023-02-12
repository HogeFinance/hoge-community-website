import PropTypes from "prop-types";
import { ReactComponent as Play } from '../../icons/play.svg';

import "./Item.scss";

const Item = ({image, name, artist, url}) => (
  <div className="item-music">
    <a className="image" href={url}>
      <Play className="play" />
      <img src={image} alt={image} />
    </a>
    <div className="name"><a href={url}>{name}</a></div>
    <div className="artist">{artist}</div>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

export default Item;
