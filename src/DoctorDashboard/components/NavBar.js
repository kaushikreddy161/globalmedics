import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../components/SliderbarData";
import "./NavBar.css";
import logo from "../assets/logo.png";
import doctorimg from "../assets/doctor.png";

function NavBar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <div className="docImgDiv">
            <span>
              <img alt="Global Medics" src={doctorimg} className="docImg" />
            </span>
          </div>
          <div className="docNameDiv">
            <span className="docNameSpan1">
                {props.loginDoctor.firstName} {props.loginDoctor.lastName}
            </span>
          </div>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  to={item.path}
                  activeStyle={{ color: "black", background: "white" }}
                >
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}

          <div className="logo">
            <span>
              <img alt="Global Medics" src={logo} style={{ width: "50px" }} />
            </span>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
