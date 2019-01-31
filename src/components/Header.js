import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <Navbar color="primary" dark expand="md">
      <NavbarBrand href="/">TestStrap</NavbarBrand>
    </Navbar>
  );
};

export default Header;
