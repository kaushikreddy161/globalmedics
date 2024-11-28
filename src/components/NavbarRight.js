import React from "react";
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import IconMenu from "../assets/right-menu.png";
import "./NavbarRight.css";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest, b2cPolicies } from '../authConfig';

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import MessangerSubMenu from "./MessangerSubMenu";
// import NavbarRight from "../components/NavbarRight";
import logo from "../assets/logo-blue.png";
import { MessageSidebarData } from "./MessageSidebarData";

import ChatDashbord from "../Chat/ChatDashboard";



const Nav = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 2rem;
  // height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 4rem;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  color: #000000;
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding-top:1rem;
  overflow-y:scroll;
  background: white;
  // background: (360deg, #1E4890 88.6667%, #0AF796 43.3333%);
  // background: linear-gradient(360deg, #1E4890 84.6667%, #0AF796);
  `;



function NavbarRight() {

  const [click, setClick] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const { instance, inProgress } = useMsal();
  let activeAccount;

  if (instance) {
    activeAccount = instance.getActiveAccount();
  }
  const handleLogoutRedirect = () => {
    instance.logoutRedirect();
  };

  const handleLoginRedirect = () => {
    //loginRequest.extraQueryParameters = {"campaignId": 'germany-promotion'};
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  // const showSidebar = () => setSidebar(!sidebar);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebar(!sidebar);
  };


  return (
    <div>

      <nav className="navbar">
        <div className="container">
          {/* <div className="logo">
          <Logo />
        </div> */}
          {/* <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div> */}

          <div className="menu-icon" onClick={handleShowNavbar}>
            <img width="20" src={IconMenu} className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul style={{ marginTop: "6px" }}>
              <li>
                {/* <NavLink onClick={showSidebar}> */}
                <NavLink to="/voiceChat">
                    <img
                  src={require("../assets/icon-nav-message.png")}
                  width="15"
                  height="auto"
                  alt="Global Medics"
                  style={{ marginLeft: "1.5rem", marginRight: "0.2rem", textAlign: "right", }}
                /> Message</NavLink>
              </li>
              <li>
                <NavLink to="/emergencyResponseAndPain">  <img
                  src={require("../assets/icon-nav-emr.png")}
                  width="15"
                  height="auto"
                  alt="Global Medics"
                  style={{ marginLeft: "1.5rem", marginRight: "0.2rem", textAlign: "right", }}
                /> Emergency</NavLink>
              </li>
              <li>
                <NavLink to="/userFeedbackForm"><img
                  src={require("../assets/icon-nav-fback.png")}
                  width="20"
                  height="auto"
                  alt="Global Medics"
                  style={{ marginLeft: "1.5rem", marginRight: "0.2rem", textAlign: "right", }}
                /> Feedback</NavLink>
              </li>
              {/* <li>
              <NavLink to="/emergencyResponseAndPain">
                <img
                  src={require("../assets/icon-notification.png")}
                  width="15"
                  height="auto"
                  alt="Global Medics"
                  style={{ marginLeft: "1.5rem", marginRight: "0.2rem", textAlign: "right", }}
                /> Notification</NavLink>
            </li> */}
              <li>
                <AuthenticatedTemplate>
                  <NavLink
                    onClick={handleLogoutRedirect}
                  >
                    <img
                      src={require("../assets/icon-signout.png")}
                      width="15"
                      height="auto"
                      alt="Global Medics"
                      style={{ marginLeft: "1.5rem", marginRight: "0.2rem", textAlign: "right", }}
                    /> Sign Out</NavLink>
                </AuthenticatedTemplate>
              </li>
              <li>
                <UnauthenticatedTemplate>
                  <NavLink
                    onClick={handleLoginRedirect}
                  >
                    <img
                      src={require("../assets/icon-sign-in.png")}
                      onClick={handleLogoutRedirect}
                      width="15"
                      height="auto"
                      alt="Global Medics"
                      style={{ marginLeft: "1.5rem", marginRight: "0.2rem", textAlign: "right", }}
                    /> Sign In</NavLink>
                </UnauthenticatedTemplate>
              </li>
            </ul>


            <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to="#">
                  <div className="LeftHamburgerClose">
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                  </div>
                </NavIcon>

                <ChatDashbord />

              </SidebarWrap>
            </SidebarNav>


          </div>
        </div>
      </nav>

    </ div>
  );
}
export default NavbarRight;