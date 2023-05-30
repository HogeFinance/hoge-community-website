import Container from "react-bootstrap/Container";
import { 
  etherscanUrl, 
  coinmarketcapUrl, 
  coingeckoUrl, 
  dextoolsUrl,
  redditUrl, 
  twitterUrl, 
  tiktokUrl,
  telegramUrl, 
  discordUrl,
  instagramUrl
  } from "common/links";
import Twitter from '../../icons/twitter.png';
import Telegram from '../../icons/telegram.png';
import Discord from '../../icons/discord.png';
import Reddit from '../../icons/reddit.png';
import Instagram from '../../icons/insta.svg'
import Tiktok from '../../icons/tiktok.png'

// import { ReactComponent as Insta } from '../../icons/insta.svg';
// import { ReactComponent as Youtube } from '../../icons/youtube.svg';
// import { ReactComponent as Medium } from '../../icons/medium.svg';
// import { ReactComponent as TikTok } from '../../icons/tiktok.png';

import "./Footer.scss";
const Footer = () => {

  return (
    <Container fluid className="footer-wrapper">
      <Container className="footer">
        <Socials />
        <div className="inquiries">
          For general inquiries, reach us at <a href="mailto:contact@hogefinance.com">contact@hogefinance.com</a><br />
          For marketing, reach us at <a href="mailto:marketing@hogefinance.com">marketing@hogefinance.com</a>
        </div>
        <div className="links">
          <a href={etherscanUrl} target="_blank" rel="noreferrer">Etherscan</a>
          <a href={coinmarketcapUrl} target="_blank" rel="noreferrer">CoinMarketCap</a>
          <a href={coingeckoUrl} target="_blank" rel="noreferrer">CoinGecko</a>
          <a href={dextoolsUrl} target="_blank" rel="noreferrer">DexTools</a>
        </div>
        <div className="note">
          This website does not constitute an offer to purchase or solicitation to sell, nor is it a recommendation to buy or sell, any token or other product. Purchasing and selling tokens is inherently risky and holders must bear their risk of loss. Neither the authors of this website nor any participants in the project accept any liability for losses or taxes that holders, purchasers or sellers may incur. The value may decrease and may be highly volatile.This website is not directed towards any person located in a jurisdiction where purchasing, selling or holding tokens is prohibited or regulated. Consult your local laws before transacting in any cryptocurrency.
        </div>
      </Container>
    </Container>
  );
};

const Socials = () => {
  return <Container fluid className="social-wrapper">
    <Container className="social">
      <div className="text">
        Join the DeFi Hoge community<br/>and stay updated on<br/>everything we’re doing!
      </div>
      <div className="links">
        <a href={redditUrl} target="_blank" rel="noreferrer"><img src={Reddit} alt={Reddit} /></a>
        <a href={telegramUrl} target="_blank" rel="noreferrer"><img src={Telegram} alt={Telegram} /></a>
        <a href={discordUrl} target="_blank" rel="noreferrer"><img src={Discord} alt={Discord} /></a>
        <a href={twitterUrl} target="_blank" rel="noreferrer"><img src={Twitter} alt={Twitter} /></a>
        <a href={tiktokUrl} target="_blank" rel="noreferrer"><img src={Tiktok} alt={Tiktok} /></a>
        <a href={instagramUrl} target="_blank" rel="noreferrer"><img src={Instagram} alt={Instagram} /></a>
      </div>
    </Container>
  </Container>
}

export default Footer;
