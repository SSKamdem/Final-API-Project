import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavBarElements";
import './NavBar.css';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
            <NavLink to="/" activeStyle>
                HOME
            </NavLink>
          <NavLink to="/recipes" activeStyle>
            RECIPES
          </NavLink>
          <NavLink to="/about" activeStyle>
            ABOUT
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;