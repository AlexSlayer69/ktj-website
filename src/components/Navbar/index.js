import React from "react";
import { Nav, NavLink, NavMenu,Bars,Btn1,Btn2 } 
    from "./NavbarElements";    
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <Bars/>
          <NavLink to="/log-in" activeStyle>
            <Btn1>Log In</Btn1>
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            <Btn2>Sign Up</Btn2>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;