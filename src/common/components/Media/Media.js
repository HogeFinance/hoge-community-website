import Container from "react-bootstrap/Container";

import "./Media.scss";

const Media = () => (
  <Container fluid className="media-wrapper">
    <Container className="media">
      <h3>Media</h3>
      <div className="links">
        <a href="https://finance.yahoo.com/news/meme-coins-spotlight-shiba-inu-131231491.html" className="yahoo_finance" />
        <a href="https://www.bloomberg.com/press-releases/2021-08-19/hoge-token-aims-to-go-global-with-community-projects-like-hoge-university-an-nft-marketplace" className="bloomberg" />
        <a href="https://www.usatoday.com/story/sponsor-story/hoge-finance/2021/09/24/hoge-finance-joins-national-conversation-cryptocurrency-regulation/5815023001/" className="usa_today" />
      </div>
{/*      <div className="articles">
        <a href="#" className="btn">View Articles</a>
      </div>*/}
    </Container>
  </Container>
);

export default Media;
