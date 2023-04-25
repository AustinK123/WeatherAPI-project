import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/contact" activeStyle>
            Home
          </NavLink>
          <NavLink to="/weather" activeStyle>
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