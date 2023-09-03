import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";

import "./Layout.scss";
import Roadmap from "../common/components/Roadmap/Roadmap";
import TopBanner from "../common/components/TopBanner/TopBanner";

const Layout = (props) => {
  const { children } = props;
  const location = useLocation();
  const pageName = location.pathname.slice(1) || 'home';

  return (
    <div className={`layout ${pageName}`}>
      <Header />
      <TopBanner {...props.config.topBanner} />
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
