import PropTypes from "prop-types";
import "./ContainerHeader.scss";

const ContainerHeader = ({title, text, showSeparator = false}) => {

  return (
    <>
      <div className="container-header">
        <h3>{title}</h3>
        <div className="text">{text}</div>
      </div>

      {showSeparator && (
        <div className="separator" />
      )}
    </>
  );
}

ContainerHeader.prototypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  separator: PropTypes.bool
}

export default ContainerHeader;
