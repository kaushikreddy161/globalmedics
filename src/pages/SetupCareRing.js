import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

import IconSetupCareRing from "../assets/icon-setup-care-ring.png";
import faceIcon from "../assets/icon-patient-photo.png";
import ImgPapa from "../assets/img-papa.png";
import ImgMummy from "../assets/img-mummy-ji.png";
import ImgMa from "../assets/img-ma.png";
import ImgAuntyJi from "../assets/img-aunty-ji.png";
import ImgAddNewMember from "../assets/img-add-new-member.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
const clist = [
  {
    name: "Papa",
    source: faceIcon,
    type: "P",
  },
];
const list = [
  // {
  //   name: "Papa",
  //   source: ImgPapa,
  //   type: "P",
  // },
  // {
  //   name: "Ma",
  //   source: ImgMummy,
  //   type: "R",
  // },
  // {
  //   name: "Mummy Ji",
  //   source: ImgMa,
  //   type: "O",
  // },
  // {
  //   name: "Aunty Ji",
  //   source: ImgAuntyJi,
  //   type: "O",
  // },
  {
    name: "Add Member",
    source: ImgAddNewMember,
    type: "O",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SetupCareRing = () => {
  const navigate = useNavigate();
  const [patientName, setpName] = useState("");
  const [status, setStatus] = useState("0");
  const [selLid, setSelLId] = useState("");
  const [lovedones, setlovedOnes] = useState([]);
  const [rdate, setrDate] = useState("");

  const onBack = () => {
    const path = `/patientpersonalDetailsForm`;
    navigate(path);
  };

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    //   console.log('user:',user.id);
    //   console.log('location:',location.state.lid);
    if (user) {
      let ccid = BSON.ObjectID(user.id).toString();
      const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
      // console.log('else direct:',ccid);
      lovd.then((resp) => {
        if (resp) {
          setStatus("1");
          setpName(resp.displayName);
          setSelLId(resp._id.toString());
          setlovedOnes(resp);
        } else {
          alert("Loved Ones Not Created..");
          // navigate(`/addLovedOnes`);
        }
      });
    }
  };

  const onSubmit = (rtype) => {
    let path = "";

    if (rtype === "P") {
      path = `/moduleSummaryTwo`;
    } else {
      path = `/addLovedOnes`;
    }

    navigate(path, { state: { id: rtype } });
  };

  const { user } = useContext(UserContext);
  const datex = new Date();

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Setup Care Ring"
          title2="Select the loved one you wish to setup Care Rings for."
          title3="Last Updated: 10-10-2022"
          // limg="all"
          rimg="scr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-sc">
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
              <div className="container">
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                        <Grid
                          container
                          spacing={{ xs: 2, md: 3 }}
                          columns={{ xs: 4, sm: 8, md: 12 }}
                          style={{
                            maxWidth: "500px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {list.map((item) => (
                            <Grid item xs={2} sm={4} md={4}>
                              <Item
                               // sx={{ cursor: "pointer" }}
                                // onClick={() => navigation.navigate(item.navDir)}
                                // onPress={() => this.props.navigation.navigate("Details")}
                              //  onClick={() => onSubmit(`${item.type}`)}
                                style={{
                                  borderTop: "6px solid #1D5A90",
                                  borderRadius: "10pt",
                                  backgroundColor: "#C9C8C7",
                                  boxShadow:
                                    "0 18px 40px -12px rgba(0,0,0,0.3)",
                                }}
                              >
                                <p
                                  style={{
                                    marginTop: "0rem",
                                    marginBottom: "0rem",
                                  }}
                                >
                                  <img
                                    src={item.source}
                                    style={{
                                      width: "45%",
                                      //   height: "auto",
                                    }}
                                  />
                                </p>
                                <p
                                  style={{
                                    color: "#707070",
                                    fontSize: "1rem",
                                    fontFamily: "Helvetica",
                                    marginTop: "0rem",
                                    marginBottom: "0rem",
                                  }}
                                >
                                  {item.name}
                                </p>
                              </Item>
                            </Grid>
                          ))}
                        </Grid>
                  </Box>
                </div>
              </div>
            </Card.Body>
            <div style={{ height: "20vh" }}></div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default SetupCareRing;
