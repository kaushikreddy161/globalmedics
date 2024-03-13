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
import CarouselSlider from "./CarouselSlider";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";
import { Form } from "react-bootstrap";
import IconDailyCheckIn from "../assets/icon-daily-checkIn.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import RNRunnyNose from "../assets/icon-sym-rno-rno.png";
import RNBlockedNose from "../assets/icon-sym-rno-bno.png";
import RNSneezing from "../assets/icon-sym-rno-sne.png";
import RNRunnyNoseS from "../assets/icon-sym-rno-rno-sel.png";
import RNBlockedNoseS from "../assets/icon-sym-rno-bno-sel.png";
import RNSneezingS from "../assets/icon-sym-rno-sne-sel.png";

import AboveNose from "../assets/icon-sym-rno-anose.png";
import LeftSide from "../assets/icon-sym-rno-lnose.png";
import RightSide from "../assets/icon-sym-rno-rnose.png";

import IconYes from "../assets/icon-yes.png";
import IconNo from "../assets/icon-no.png";

import Apple_Model from "../assets/plist/Model_1.png";
import Amazon_Model from "../assets/plist/Model_2.png";
import Boat_Model from "../assets/plist/Model_3.png";
import Noise_Model from "../assets/plist/Model_4.png";

import DiarrhoeaMotion from "../assets/icon_diarrhoea_motion.png";
import DiarrhoeaPre from "../assets/icon_diarrhoea_pre.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";
import IncDecCounter from "./IncDecCounter";

const prodList = [
  {
    name: "APPLE Watch Series 3",
    source: Apple_Model,
    price: "24000 $",
  },
  {
    name: "Amazfit GTR 2",
    source: Amazon_Model,
    price: "14000 $",
  },
  {
    name: "boAt Storm Pro",
    source: Boat_Model,
    price: "10000 $",
  },
  {
    name: "noise Storm Pro",
    source: Noise_Model,
    price: "8000 $",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductList = () => {
  const onSubmit = () => {
    const path = `/symptoms`;
    navigate(path);
  };

  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();
  const [listThree, setListThree] = useState();

  const [an, setAN] = useState(false);
  const [ls, setLS] = useState(false);
  const [rs, setRS] = useState(false);

  const [anose, setANose] = useState([{ name: "Above nose", icon: AboveNose }]);

  const [lside, setLSide] = useState([{ name: "Left side", icon: LeftSide }]);

  const [rside, setRSide] = useState([{ name: "Right side", icon: RightSide }]);

  const [list1, setList1] = useState([
    { name: "Yes", icon: IconYes, value: "1" },
    { name: "No", icon: IconNo, value: "2" },
  ]);

  const [list2, setList2] = useState([
    { name: "Yes", icon: IconYes, value: "1" },
    { name: "No", icon: IconNo, value: "2" },
  ]);

  const [list3, setList3] = useState([
    { name: "Yes", icon: IconYes, value: "1" },
    { name: "No", icon: IconNo, value: "2" },
  ]);

  const navigate = useNavigate();

  const { user, pId, pName } = useContext(UserContext);
  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
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

  const NoseChangeImage = (val) => {
    if (val.value === "an" && an === true) {
      anose[0].icon = AboveNose;
    } else if (val.value === "an" && an === false) {
      anose[0].icon = AboveNose;
    }
    setANose([...anose]);

    if (val.value === "ls" && ls === true) {
      lside[0].icon = LeftSide;
    } else if (val.value === "ls" && ls === false) {
      lside[0].icon = LeftSide;
    }
    setLSide([...lside]);

    if (val.value === "rs" && rs === true) {
      rside[0].icon = RightSide;
    } else if (val.value === "rs" && rs === false) {
      rside[0].icon = RightSide;
    }
    setRSide([...rside]);
  };

  const List1ChangeImage = (val, id) => {
    console.log("val", val);
    setListOne(val.value);
    if (val.value == 1) {
      list1[0].icon = RNRunnyNoseS;
      list1[1].icon = RNBlockedNose;
      list1[2].icon = RNSneezing;
      setList1([...list1]);
    }
    if (val.value == 2) {
      list1[0].icon = RNRunnyNose;
      list1[1].icon = RNBlockedNoseS;
      list1[2].icon = RNSneezing;
      setList1([...list1]);
    }
    if (val.value == 3) {
      list1[0].icon = RNRunnyNose;
      list1[1].icon = RNBlockedNose;
      list1[2].icon = RNSneezingS;
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
          title="Product List"
          title2=""
          title3=""
          limg="rl"
          rimg="rb"
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
            {prodList.map((item) => (
              <div class="container">
                <div class="row" style={{ marginTop: "1rem" }}>
                  <div class="col-3">
                    <div>
                      <div style={{ textAlign: "center" }} className="plist">
                        <img src={item.source} style={{ width: "100%" }} />
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <p className="plist-txt">{item.name}</p>
                    <p className="plist-txt">Price: {item.price}</p>
                    {/* <IncDecCounter /> */}
                    <button type="button" class="plist-add-cart">
                      Add to Cart
                    </button>
                  </div>
                  <div class="col-3"></div>
                </div>
              </div>
            ))}
            {/* <div class="container">
              <div class="row">
                <div class="col-6">
                  <div>
                    <div style={{ textAlign: "center" }} className="plist">
                      <img src={item.source} style={{ width: "50%" }} />
                    </div>
                    <p className="plist-txt">APPLE Watch Series 3</p>
                    <p className="plist-txt">Price: 4000 $</p>
                    <p></p>
                  </div>
                </div>
                <div class="col-6">
                  <div style={{ textAlign: "center" }}>
                    <img src={Amazon_Model} style={{ width: "50%" }} />
                    <p>Amazfit GTR 2</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div style={{ textAlign: "center" }}>
                    <img src={Boat_Model} style={{ width: "50%" }} />
                    <p>boAt Storm Pro</p>
                  </div>
                </div>
                <div class="col-6">
                  <div style={{ textAlign: "center" }}>
                    <img src={Noise_Model} style={{ width: "50%" }} />
                    <p>noise colorfit</p>
                  </div>
                </div>
              </div>
            </div> */}
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
                onClick={onSubmit}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default ProductList;
