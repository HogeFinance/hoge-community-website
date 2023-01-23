import PropTypes from "prop-types";

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";

import "./Layout.scss";
import Roadmap from "../common/components/Roadmap/Roadmap";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      <div className="content">
        {children}
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
