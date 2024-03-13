import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import "../pages/Main.css";

// import "./SubMenu.css";


const SidebarLink = styled(Link)`
  display: flex;
  // color: #ffffff;
  color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background: #EBEBEB;
    border-left: 4px solid #EBEBEB;
    cursor: pointer;
    color: #000000;
  }

`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: transparent;
  // background: #FFFFFF;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  color: #000000;

  &:hover {
    background: #FFFFFF;
    cursor: pointer;
    color: #000000;
  }
`;







const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          
          {/* <div class="figure">
            <img class="image-main" src={item.icons} />
            <img class="image-hover" src={item.icon} />
          </div> */}

          <img src={item.icon} className="img-fill" />
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <img src={item.icon} />
              {/* {item.icon} */}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
