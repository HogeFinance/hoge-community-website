import {menuItems} from "../../../routes";

import Container from "react-bootstrap/Container";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

import "./Header.scss";

const Header = () => {

  return (
    <Container fluid className="header-wrapper">
      <a href="https://www.gooogle.com" className="btn-secondary buy">BUY $HOGE</a>
      <NavbarMenu menu={menuItems} />
    </Container>
  );
};

export default Header;
