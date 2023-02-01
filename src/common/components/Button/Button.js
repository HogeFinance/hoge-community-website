import PropTypes from "prop-types";

import BootstrapButton from "react-bootstrap/Button";
import Translate from "../../Translate";

import "./Button.scss";

const Button = (props) => {

  return (
    <BootstrapButton variant="custom">
      <Translate k={props.k} />
    </BootstrapButton>
  );
};

Button.propTypes = {
  k: PropTypes.string
}

Button.defaultProps = {
  k: "PLACEHOLDER"
}

export default Button;