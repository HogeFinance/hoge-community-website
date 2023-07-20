import Container from "react-bootstrap/Container";
import { voteBanner, voteSnapshot } from "common/links";
import "./TopBanner.scss";

const show = true;

const TopBanner = () => {
  if (show === true) {
    return (
      <Container fluid className="banner-wrapper">
        <a href={voteSnapshot} target="_blank" rel="noreferrer">
          <img className="imgBanner" src={voteBanner} alt="banner" />
        </a>
      </Container>
    );
  } else { return <></>}
};

export default TopBanner;
