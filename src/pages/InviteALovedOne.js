import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Button} from "@mui/material";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import { Form } from "react-bootstrap";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const InviteALovedOne = () => {
  const navigate = useNavigate();

  const [value, setValue] = React.useState('This is on a wait list');



  const onSubmit = () => {
    const path = `/inviteSent`;
    navigate(path);
  };

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Invite a Loved One"
          title2="Send a request to your loved one to grant you the permission to look after them remotely."
          title3="Last Updated"
          limg="rl"
          rimg="icr"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>


        <div className="form-invited-love">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              marginTop:"0rem",
              marginBottom:"0rem",
              color:"#209F85"
            }}
            className="cm-text-box"
          >
            <Card.Body>
              <label>What is their Nickname?</label>
              <Form.Control
                className="name-input"
                type="text"
                placeholder="Enter Loved One Nickname"
                name="patientNickname"
                // value={patientName}
                // onChange={(e) => setpName(e.target.value)}
                style={{
                  marginBottom: "0pt",
                  marginTop: "5pt",
                  color: "#ADAAA7",
                  // border: "0px solid white",
                }}
              ></Form.Control>
            </Card.Body>
          </Card>
        </div>

        <div className="form-invited-love_1">
          <Card className="invite-loved-one-card">
            <textarea class="form-control" rows="6">
              Hi, Can you please authorise me as your “next of kin” to look after you remotely? Regards, &#60;&#60;Next of Kin Firstname&#62;&#62;
            </textarea>

            <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "0rem",
            }}
          >
            <Button
              style={{
                background: "#1D5A90",
                borderRadius: 50,
                width: "50%",
                color: "#ffffff",
                textTransform: "none",
                marginTop:"0rem",
                marginBottom:"0rem",
              }}
              onClick={onSubmit}
              type="submit"
            >
              Send Invite
            </Button>
          </div>

          </Card>

          

        </div>

        
      </Grid>
    </Container>
  );
};

export default InviteALovedOne;
