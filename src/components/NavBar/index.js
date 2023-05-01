import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavBarElements";

//Navigation bar
const Navbar = () => {
  return (
    <>
      <Nav style={{backgroundColor: "#ffcccc"}}>
        <NavMenu>
            <NavLink style={{color: "white", fontFamily: "fantasy"}} to="/" activeStyle>
            HOME
            </NavLink>
          <NavLink style={{color: "white", fontFamily: "fantasy"}} to="/arrabiata" activeStyle>
            ARRABIATA
          </NavLink>
          <NavLink style={{color: "white", fontFamily: "fantasy"}} to="/hotpot" activeStyle>
            HOTPOT
          </NavLink>
          <NavLink style={{color: "white", fontFamily: "fantasy"}} to="/kapsalon" activeStyle>
            KAPSALON
          </NavLink>
          <NavLink style={{color: "white", fontFamily: "fantasy"}} to="/ribollita" activeStyle>
            RIBOLLITA
          </NavLink>
          <NavLink style={{color: "white", fontFamily: "fantasy"}} to="/tofu" activeStyle>
            TOFU
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;