import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { BSON } from "realm-web";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// import { Link, useLocation, useNavigate } from "react-router-dom";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import "./Main.css";

import IconSelf from "../assets/icon-self.png";
import Search from "../assets/search-icon.svg";
import IconSend from "../assets/icon-send.png";
import IconCamera from "../assets/icon-camera-main.png";

import styled from "styled-components";
import { messagesList } from "../pages/Data";

import ConPrs1 from "../assets/pp1.png";
import ConPrs2 from "../assets/pp2.png";
import ConPrs3 from "../assets/pp3.jpeg";
import ConPrs4 from "../assets/pp4.jpeg";



const contactList = [
  {
    id: 1,
    name: "Anubhav Sharma",
    profilePic: ConPrs1,
    lastText: "Hey Man",
    lastTextTime: "12:58 PM",
  },
  {
    id: 2,
    name: "Mayank",
    profilePic: ConPrs2,
    lastText: `what going on bro`,
    lastTextTime: "12:45 PM",
  },
  {
    id: 3,
    name: "Anjali",
    profilePic: ConPrs3,
    lastText: "baba lets go out?",
    lastTextTime: "12:30 PM",
  },
  {
    id: 4,
    name: "Kaushal",
    profilePic: ConPrs4,
    lastText: "no broo",
    lastTextTime: "12:00 PM",
  },
];




// const Container = styled.div`
// display: flex ;
// flex-direction: column;
// height: 100%;
// flex: 2;
// background: #f6f7f8;
// `;
const ProfileHeader=styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 15px;
    align-items: center;
    gap : 10px;
`;

const ProfileImage =styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

const ChatBox =styled.div`
display: flex;
background: #f0f0f0;
padding: 10px;
align-items: center;
bottom : 0;
`;

const EmojiImage =styled.img`
width:30px;
height: 28px;
opacity: 0.4;
cursor: pointer;
margin-right:2rem;
`;
const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: #e5ddd6;
`;

const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ?'flex-end':'flex-start') };
display:flex;
margin: 5px 16px;
`;

const Message = styled.div`
background: ${(props) => (props.isYours ?"#daf8cb":"white" )};
max-width:50%;
color: #303030;
padding: 8px 10px;
font-size: 19px;
`;



const ConversationComponent = (props) => {

  // const navigate = useNavigate();
  const onCamera = () => {
    const path = `/webCamera`;
    navigate(path);
  };
const { userData } = props;
const navigate = useNavigate();
const { pName } = useContext(UserContext);
let pname = pName;

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
        <div className="form-bp">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
            //   borderTop: "8px solid #1D5A90",
            //   borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
                      {/* <Card.Body> */}
                          {/* <Container> */}
                              <ProfileHeader>
                                  <ProfileImage src={ConPrs4} />
                                  Anubhav Sharma
                              </ProfileHeader>
                              <MessageContainer>
                                  {messagesList.map((messageData) => (
                                      <MessageDiv isYours={messageData.senderID === 0}>
                                          <Message isYours={messageData.senderID === 0}>{[messageData.text]} </Message>
                                      </MessageDiv>
                                  ))}

                              </MessageContainer>

                      {/* <ChatBox> */}
                          <div className="SearchContainer">
                              <input type="text" class="SearchInput"  placeholder="Type a message"/>
                              <EmojiImage src={IconSend} />
                              <EmojiImage src={IconCamera} onClick={onCamera}/>

                          </div>
                      {/* </ChatBox> */}

                          {/* </Container> */}

                      {/* </Card.Body> */}
           
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default ConversationComponent;