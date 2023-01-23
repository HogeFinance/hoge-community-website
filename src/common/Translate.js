import PropTypes from "prop-types";

import { useTranslation, Trans } from "react-i18next";

const Translate = ({k, className}) => {
  const { t } = useTranslation();
  let text= k;
  try {
      text = t(k);
  } catch (e) {
    console.warn("Message key not found", k, e);
  }

  return <span className={className}>{text}</span>;
};

Translate.propTypes = {
  k: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Translate;
