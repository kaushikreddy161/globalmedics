import React, { useEffect, useContext, useState, useRef } from "react";
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
import CarouselSlider from "./CarouselSlider";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";
import { Form } from "react-bootstrap";
import IconCamera from "../assets/icon-other-camera.png";
import IconCameraS from "../assets/icon-other-camera-sel.png";
import IconVideo from "../assets/icon-other-video.png";
import IconVideoS from "../assets/icon-other-video-sel.png";
import "./Login.css";
const list = [
  {
    name: "Click Photo",
    source: IconCamera,
    navDir: "/webCamera",
  },
  {
    name: "Record Video",
    source: IconVideo,
    navDir: "/videoAudioRecorder",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



const DEFAULT_URL = "E:\Krishna\Projects\GlobalMedics\test.webm"
const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
const imgtext='https://www.youtube.com/watch?v=Rqu5b7KMll0';
const AnyOtherDetails = () => {

  const imgb = "http://localhost:3000/46cf40b1-4fa7-4812-bf67-b6ce0277861c";

  const [url, setUrl] = React.useState(DEFAULT_URL)
  const [blobData, setBlobData] = React.useState(null)
  const[imageUrl, setImageUrl] = useState('')
  const playerRef = useRef(null);
  

const fetchAndCovertToBlob = ()=> {

  fetch(url)

          .then( response => response.blob())

       .then((blob) => {

             const url = URL.createObjectURL(blob);

             console.log("imageurl:", url);

             setImageUrl(url);  

             const {size, type} = blob;

             alert(` IMG Type: ${type} \n IMG Size: ${size}`);

             console.log("Blob Data", blob);

         });

 }
  const [listOne, setListOne] = useState();
  const [list1, setList1] = useState([
    { name: "Click Photo", icon: IconCamera, value: "1" },
    { name: "Record Video", icon: IconVideo, value: "2" },
  ]);

  const onSubmit = () => {
    const path = `/`;
    navigate(path);
  };

  // const onSubmit = () => {
  //   if (listOne == "1") {
  //     const path = `/webCamera`;
  //     navigate(path);
  //   }
  //   else {
  //     const path = `/videoAudioRecorder`;
  //     navigate(path);
  //   }
  // };

  const navigate = useNavigate();
  const { user, pId, pName } = useContext(UserContext);
  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");
  useEffect(() => {
    fetchAndCovertToBlob();
    //  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);

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
          setSelLId(resp._id.toString());
        } else {
          alert("Loved Ones ID not loaded..");
        }
      });
    }
  };

  const List1ChangeImage = (val, id) => {
    console.log("val", val);
    setListOne(val.value);
    if (val.value == 1) {
      list1[0].icon = IconCameraS;
      list1[1].icon = IconVideo;
      setList1([...list1]);
    }
    if (val.value == 2) {
      list1[0].icon = IconCamera;
      list1[1].icon = IconVideoS;
      setList1([...list1]);
    }
    console.log("list1", list1);
  };


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
          title="Any other Detail"
          title2="Please add any relevant additional information"
          title3=""
          limg="rl"
          rimg="rao"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-dc">
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
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Date and time of observation (if not current time)
                </p>
                <Form.Control
                  className="name-input"
                  type="datetime-local"
                  // placeholder=""
                  // value={dateTime}
                  name="dateTime"
                  // onChange={(e) => setdTime(e.target.value)}
                  style={{
                    color: "#ADAAA7",
                    marginTop: "0.5rem",
                    // marginLeft: "0.7rem",
                    fontSize: "0.9rem",
                  }}
                ></Form.Control>
              </div>
              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              <div className="container">
                <label for="exampleFormControlTextarea1" className="text-gray">Please describe any other detail you believe that might be relevant.</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
              </div>

              <div>  
              {/* <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} /> */}
              {/* <ReactPlayer ref="E:\Krishna\Projects\GlobalMedics\test.mp4" url={VIDEO_PATH} controls={true} /> */}
                {/* <img src={imageUrl} alt="Image Placeholder" /> */}
                </div>

                <div
                style={{
                  textAlign: "center",
                  marginTop: "10pt",
                  marginBottom: "10pt",
                }}
              >
                <Button
                  style={{
                    background: "#1D5A90",
                    borderRadius: 50,
                    width: "50%",
                    color: "#ffffff",
                    textTransform: "none",
                  }}
                  // onClick={onSubmit}
                  type="submit"
                >
                  Submit
                </Button>
              </div>

              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Record Audio-Visual
                </p>
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
                }}
              >
                {list.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                        onClick={() => navigate(item.navDir)}
                        sx={{ cursor: "pointer" }}
                        style={{
                          borderTop: "6px solid #1D5A90",
                          borderRadius: "10pt",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        }}
                        className="CatCard"
                      >
                        <p className="CatImg">
                          <img
                            src={item.source}
                            style={{
                              width: "60%",
                            }}
                          />
                        </p>
                        <p className="CatName">{item.name}</p>
                      </Item>
                    </>
                  </Grid>
                ))}
              </Grid>
            </Box>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default AnyOtherDetails;
