import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

import Header from "../common/components/Header/Header";
import Footer from "../common/components/Footer/Footer";
import Rider from "../common/components/Rider/Rider";
import TopBanner from "../common/components/TopBanner/TopBanner";

import "./Layout.scss";

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
      <Rider />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
