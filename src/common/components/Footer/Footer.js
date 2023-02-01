import Container from "react-bootstrap/Container";

import "./Footer.scss";
const Footer = () => {

  return (
    <Container fluid className="footer-wrapper">
      <Container className="footer">
        <div className="inquiries">
          For general inquiries, reach us at <a href="#">contact@hogefinance.com</a><br />
          For marketing, reach us at <a href="#">marketing@hogefinance.com</a>
        </div>
        <div className="links">
          <a href="#">Etherscans</a>
          <a href="#">CoinMarketCap</a>
          <a href="#">CoinGecko</a>
          <a href="#">DexTools</a>
        </div>
        <div className="note">
          This website does not constitute an offer to purchase or solicitation to sell, nor is it a recommendation to buy or sell, any token or other product. Purchasing and selling tokens is inherently risky and holders must bear their risk of loss. Neither the authors of this website nor any participants in the Floki Inu project accept any liability for losses or taxes that holders, purchasers or sellers of Floki Inu may incur. The value of Floki Inu may decrease and may be highly volatile.This website is not directed towards any person located in a jurisdiction where purchasing, selling or holding Floki Inu is prohibited or regulated. Consult your local laws before transacting in any cryptocurrency.
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
