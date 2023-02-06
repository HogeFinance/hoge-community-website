import PropTypes from "prop-types";

import { ReactComponent as Telegram } from '../../../../common/icons/telegram.svg';
import { ReactComponent as Check } from '../../../../common/icons/check.svg';

import "./Item.scss";

const Item = ({image, name, checked, title, telegram, background, history, benefit}) => (
  <div className="item-officer">
    <div className="image">
      <img src={image} />
    </div>
    <div className="name">{name}
      {checked && <Check />}
    </div>
    <div className="title-off">{title}</div>
    <a href={`https://telegram.me/${telegram}`} target="_blank" className="telegram"><Telegram />@{telegram}</a>
    <div className="background text">
      <h5>Background</h5>
      {background}
    </div>
    <div className="history text">
      <h5>History</h5>
      {history}
    </div>
    <div className="benefit text">
      <h5>Benefit</h5>
      {benefit}
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    title: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
    benefit: PropTypes.string.isRequired
  })
}

export default Item;
