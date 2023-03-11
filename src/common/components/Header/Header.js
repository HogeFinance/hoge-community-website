import {menuItems} from "../../../routes";
import Container from "react-bootstrap/Container";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import {optiswapUrl} from "../../links";

import "./Header.scss";

const Header = () => {

  return (
    <Container fluid className="header-wrapper">
      <a href={optiswapUrl} className="btn-secondary buy">BUY $HOGE</a>
      <NavbarMenu menu={menuItems} />
    </Container>
  );
};

export default Header;
