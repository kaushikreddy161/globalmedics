import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { BSON } from "realm-web";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import "./Main.css";

import Search from "../assets/search-icon.svg";


import FamilyGroup from "../assets/fmly-group.png";
import CareGroup from "../assets/cg-group.png";
import FriendGroup from "../assets/frnd-group.png";
import DocGroup from "../assets/doc-group.png";


const ContactList = [
  {
    id: 1,
    name: "Family Group",
    profilePic: FamilyGroup,
    lastText: "Hey Man",
    lastTextTime: "12:58 PM",
  },
  {
    id: 2,
    name: "Local Care Givers",
    profilePic: CareGroup,
    lastText: `what going on bro`,
    lastTextTime: "12:45 PM",
  },
  {
    id: 3,
    name: "Friends",
    profilePic: FriendGroup,
    lastText: "baba lets go out?",
    lastTextTime: "12:30 PM",
  },
  {
    id: 4,
    name: "Doctors",
    profilePic: DocGroup,
    lastText: "no broo",
    lastTextTime: "12:00 PM",
  },
];

const ChatContactList = (props) => {

const { userData } = props;
const navigate = useNavigate();
const { pName } = useContext(UserContext);
let pname = pName;


const onChat = () => {
  const path = `/conversationComponent`;
  navigate(path);
};



  return (
    <Container
      style={{ background: "#EBEBEB", maxWidth: "100%", minWidth: "300px" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        {/* <FixedHeader
          title="Chats"
          title2="Assign Local Care Givers to patients"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="adci"
        /> */}
        <div className="car-ds">
        <CarouselSlider />
      </div>
        <div className="form-bp">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
            <div className="Container">
                {/* <div className="ProfileInfoDiv">
                    <img className="ProfileImage" src={IconSelf} />
                </div> */}
                 <div className="SearchBox">
                    <div className="SearchContainer">
                        <img className="SearchIcon" src={Search} />
                        <input type="text" class="SearchInput"  placeholder="Search or start new chat"/>
                    </div>
                </div>
            </div>

            <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {ContactList.map((item) => (
                    <div
                      className="row align-items-top text-res con-list"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        height: "70px",
                        verticalAlign: "middle",
                        cursor:"pointer",
                        // marginLeft: "-1rem",
                        // marginRight: "-2rem",
                      }}
                      onClick={onChat}
                    >
                      <div class="col-2">
                        <img src={item.profilePic} alt="" className="img-chat"/>
                      </div>
                      <div class="col-6">
                        <spna className="cont-name">{item.name}</spna>
                        <br/>
                        <spna className="last-message">{item.lastText}</spna>
                      </div>
                      
                      <div
                        class="col-4"
                        style={{ textAlign: "right"}}
                      >
                        <>{item.lastTextTime}</>
                      </div>
                      <div className="line-sep"></div>
                    </div>
                    
                  ))}
                  
                </div>
              </Card>

            </Card.Body>
           
          </Card>
        </div>
      </Grid>
      
    </Container>
  );
};

export default ChatContactList;