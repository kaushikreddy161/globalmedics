import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import IconSinging from "../assets/icon-singing.png";
import IconPlaying from "../assets/icon-playing.png";
import IconWatching from "../assets/icon-watching.png";
import IconPainting from "../assets/icon-painting.png";
import IconTheatre from "../assets/icon-theatre.png";
import IconListening from "../assets/icon-listening.png";
import IconPhotography from "../assets/icon-photography.png";
import IconWriting from "../assets/icon-writing.png";
import IconDancing from "../assets/icon-dancing.png";

import FixedHeader from "../components/FixedHeader";
// import CarouselSlider from "./CarouselSlider";

const list = [
  {
    name: "Singing",
    source: IconSinging,
    navDir: "/comingsoon",
  },
  {
    name: "Playing Instruments",
    source: IconPlaying,
    navDir: "/comingsoon",
  },
  {
    name: "Watching Movies",
    source: IconWatching,
    navDir: "/comingsoon",
  },
  {
    name: "Painting",
    source: IconPainting,
    navDir: "/comingsoon",
  },
  {
    name: "Theatre / Drama",
    source: IconTheatre,
    navDir: "/comingsoon",
  },
  {
    name: "Listening to Music",
    source: IconListening,
    navDir: "/comingsoon",
  },
  {
    name: "Photography",
    source: IconPhotography,
    navDir: "/comingsoon",
  },
  {
    name: "Writing",
    source: IconWriting,
    navDir: "/comingsoon",
  },
  {
    name: "Dancing",
    source: IconDancing,
    navDir: "/comingsoon",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HobbiesArts() {
  const navigate = useNavigate();

  const onSubmit = () => {
    const path = `https://globalmedics.ai/webdocgm2710/`;
    navigate(path);
  };

  // const onBack = () => {
  //   const path = `/careManagerDetails`;
  //   navigate(path);
  // };
  // const datex = new Date();
  return (
    <Container
      style={{
        background: "#EBEBEB",
        maxWidth: "100%",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Hobbies - Arts"
          title2="What art forms do they enjoy doing the most?"
          title3="No login history found."
          limg="rl"
          rimg="rr"
        />

        {/* <CarouselSlider /> */}
        <div className="form-mcard">
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
              // marginTop:"0rem",
              // marginBottom:"0rem",
            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                // container
                // spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                  // marginTop:"0rem",
                  // marginBottom:"0rem",
                }}
              >
                {list.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                        onClick={() => (item.name === "Social Worker" ? "" : navigate(item.navDir))}
                        // onClick={onSubmit}
                        // onClick={() => navigation.navigate(item.navDir)}
                        // onPress={() => this.props.navigation.navigate("Details")}
                        sx={{ cursor: (item.name === "Social Worker" ? "" : "pointer") }}
                        style={{
                          borderTop: "6px solid #1D5A90",
                          borderRadius: "10pt",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          backgroundColor: (item.name === "Social Worker" ? "#cfcbcb" : "white")
                        }}
                        className="CatCard"
                      >
                        <p className="CatImg">
                          <img
                            src={item.source}
                            style={{
                              width: "60%",
                            }}
                            alt=""
                          />
                        </p>
                        <p className="CatName">{item.name}</p>
                      </Item>
                    </>
                  </Grid>
                ))}

                
              </Grid>
            </Box>
            {/* <div style={{ height: "100px" }}></div> */}
          </Card>
        </div>
      </Grid>
      <div style={{ height: "150px" }}></div>
    </Container>
  );
}
export default HobbiesArts;
