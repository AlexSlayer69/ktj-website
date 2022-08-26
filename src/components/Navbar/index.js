import React from "react";
import { Nav, NavLink, NavMenu,Bars } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <Bars/>
          <NavLink to="/log-in" activeStyle>
            Log In
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;