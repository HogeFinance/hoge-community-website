import PropTypes from "prop-types";

import BootstrapButton from "react-bootstrap/Button";
import Translate from "../../Translate";

import "./Button.scss";

const Button = (props) => {

  return (
    <BootstrapButton variant="custom" onClick={props.onClick}>
      <Translate k={props.k} />
    </BootstrapButton>
  );
};

Button.propTypes = {
  k: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  k: "PLACEHOLDER"
}

export default Button;
