import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavBarElements";
import './NavBar.css';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
            <NavLink to="/home" activeStyle>
                Home
            </NavLink>
          <NavLink to="/recipes" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;