import {menuItems} from "../../../routes";
import { optiswapUrl, voteBanner, voteSnapshot } from "common/links";
import Container from "react-bootstrap/Container";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

import "./Header.scss";

const Header = () => {

  return (
    <Container fluid className="header-wrapper">
      <a href={voteSnapshot} target="_blank" > 
       <img className="imgBanner" src={voteBanner} alt="banner image" /> </a> 
      <a href={optiswapUrl} className="btn-secondary buy">BUY $HOGE</a>
      <NavbarMenu menu={menuItems} />
      
    </Container>
  );
};

export default Header;
