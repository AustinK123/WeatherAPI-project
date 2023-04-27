import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/Rand" activeStyle>
            Generate Random
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Input Lat and Long
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Input City Name
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;