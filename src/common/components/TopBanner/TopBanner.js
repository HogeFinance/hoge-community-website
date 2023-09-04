import Container from "react-bootstrap/Container";
import "./TopBanner.scss";
import { useContext } from "react";

const TopBanner = ({showVote, voteSnapshot, voteBanner}) => {

  if (showVote) {
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
