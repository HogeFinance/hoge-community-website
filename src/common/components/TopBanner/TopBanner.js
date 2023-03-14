import Container from "react-bootstrap/Container";

import { voteBanner, voteSnapshot } from "common/links";

import "./TopBanner.scss";

const TopBanner = () => {

  return (
    <Container fluid className="banner-wrapper">
      <a href={voteSnapshot} target="_blank" >
        <img className="imgBanner" src={voteBanner} alt="banner image" />
      </a>
    </Container>
  );
};

export default TopBanner;
