import Container from "react-bootstrap/Container";
import "./TopBanner.scss";
import { useContext } from "react";

const TopBanner = ({showBanner, bannerImage, bannerLink}) => {

  if (showBanner) {
    return (
      <Container fluid className="banner-wrapper">
        <a href={bannerLink} target="_blank" rel="noreferrer">
          <img className="imgBanner" src={bannerImage} alt="banner" />
        </a>
      </Container>
    );
  } else { return <></>}
};

export default TopBanner;
