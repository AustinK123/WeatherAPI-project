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
Weather of Coord Input   
       </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;