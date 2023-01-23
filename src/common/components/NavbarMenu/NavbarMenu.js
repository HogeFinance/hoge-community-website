import React from "react";
import _ from "lodash";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button'

import Translate from "../../Translate";

import "./NavbarMenu.scss";

export const NavbarMenu = (props) => {

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="site-navigation">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <img alt="Hoge" src="/images/hoge_logo.png" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {props.menu.map((item) => {
              if (_.has(item, "page")) {
                return <SimpleItem key={item.page} to={item.page} />
              } else {
                return <DropItem key={item.k} pages={item.pages} k={item.k} />
              }
            })}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Offcanvas href="/">
          <Button />
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

const SimpleItem = ({to}) => (
  <NavLink className={"nav-link"} to={to === "home" ? "/" : to} exact={to === "home" ? "true" : "false"}>
    <Translate k={`MENU.${to.toUpperCase()}`} />
  </NavLink>
);

const DropItem = ({k, pages}) => (
  <NavDropdown title={<Translate k={`MENU.${k.toUpperCase()}`} />} id="collapsible-nav-dropdown">
    {pages.map((page) =>
      <NavLink key={page} className={"dropdown-item"} to={`/${page}`}>
        <Translate k={`MENU.${page.toUpperCase()}`} />
      </NavLink>
    )}
  </NavDropdown>
);

export default NavbarMenu;


/*<NavLink exact={"true"} to="/">
  <Translate k="MENU.HOME"/>
</NavLink>

<DropdownMenu k={"PAGE1.HEADER.TEXT1"} menuItems={{}} />*/

/*
<nav className="site-navigation show" role="navigation">
  <div className="menu-menu-container">
    <ul id="menu-menu" className="menu">
      <li id="menu-item-405"
          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-404 current_page_item menu-item-405">
        <a href="https://hogefinance.com/" aria-current="page">Home</a></li>
      <li id="menu-item-1893"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1893">
        <a>About</a>
        <ul className="sub-menu">
          <li id="menu-item-2813"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2813"><a
            target="_blank" rel="noopener"
            href="https://hogeinc.mypinata.cloud/ipfs/QmTUFBpztKVjqWEhv2ZievJdhBQuBzEtUkQVUPcx3tJo9Q">ROADMAP</a>
          </li>
          <li id="menu-item-3324"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3324"><a
            target="_blank" rel="noopener" href="https://hogefinance.com/ecosystem/">Ecosystem</a></li>
          <li id="menu-item-2847"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2847"><a
            target="_blank" rel="noopener" href="/hoge_whitepaper/">Whitepaper</a></li>
          <li id="menu-item-2584"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2584"><a
            target="_blank" rel="noopener" href="https://www.certik.org/projects/hogefinance">Certik Audit</a>
          </li>
          <li id="menu-item-3387"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3387"><a
            target="_blank" rel="noopener" href="https://tinyurl.com/HogeNetworks">HogeNetworks</a></li>
        </ul>
      </li>
      <li id="menu-item-1894"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1894">
        <a>DeFi</a>
        <ul className="sub-menu">
          <li id="menu-item-2030"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2030"><a
            href="https://optiswap.pro">Optiswap</a></li>
          <li id="menu-item-2218"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2218"><a
            target="_blank" rel="noopener" href="https://www.hogeuniversity.org/calculator">HOGE Wallet
            Calculator</a></li>
          <li id="menu-item-2219"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2219"><a
            target="_blank" rel="noopener" href="https://hoge.report/">HOGE Report</a></li>
        </ul>
      </li>
      <li id="menu-item-1897"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1897">
        <a>Marketplace/NFTs</a>
        <ul className="sub-menu">
          <li id="menu-item-2282"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2282"><a
            href="https://hoge.store">Merch Store</a></li>
          <li id="menu-item-2314"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2314"><a
            target="_blank" rel="noopener" href="https://www.hogemint.com/">HOGEMint</a></li>
        </ul>
      </li>
      <li id="menu-item-1895"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1895">
        <a>Media</a>
        <ul className="sub-menu">
          <li id="menu-item-2419"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2419"><a
            href="https://hogefinance.com/memenftsubmission/">MEME Submission</a></li>
          <li id="menu-item-2220"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2220"><a
            target="_blank" rel="noopener" href="https://hoge.fun/">Games (hoge.fun)</a></li>
        </ul>
      </li>
      <li id="menu-item-1896"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1896">
        <a>Donate</a>
        <ul className="sub-menu">
          <li id="menu-item-1412"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1412"><a
            href="https://hogefinance.com/donate/">HOGE Donations</a></li>
        </ul>
      </li>
      <li id="menu-item-2313" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2313">
        <a target="_blank" rel="noopener" href="https://hogenation.com/">HOGE Nation Forum</a></li>
    </ul>
  </div>
</nav>*/
