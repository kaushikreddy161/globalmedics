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

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

import Apple_Model from "../assets/plist/Model_1.png";
import Amazon_Model from "../assets/plist/Model_2.png";
import Boat_Model from "../assets/plist/Model_3.png";
import Noise_Model from "../assets/plist/Model_4.png";

import "./Login.css";

const prodList = [
  {
    name: "APPLE Watch Series 3",
    source: Apple_Model,
    price: "24000 $",
  },

];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProductAddToCart = () => {
  const onSubmit = () => {
    const path = `/symptoms`;
    navigate(path);
  };

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
              // borderTop: "8px solid #1D5A90",
              // borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <div className="div-input-search">
              <div class="container">
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col-9">
                    <div class="form-group has-search">
                      <SearchIcon className="form-control-feedback" />
                      <input type="text" class="form-control" placeholder="Search for products..." />
                    </div>
                  </div>
                  <div class="col-2">
                    <ShoppingCartIcon className="ecom-cart" />
                  </div>
                </div>
              </div>
            </div>
            {prodList.map((item) => (



              <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                <p className="plist-com-name" style={{ color: "gray" }}>Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular</p>
                <div style={{ textAlign: "center" }} >
                  <img src={item.source} style={{ width: "60%" }} />
                  <i class="fa fa-heart" id="heart" ></i>
                </div>
                <p className="plist-com-name" style={{ color: "red" }}>Deal</p>
                <p className="plist-com-name" style={{ fontSize: "2rem" }}><span style={{ color: "red" }}>-50%</span> 4,999</p>
                <p className="plist-com-name">Price : ₹    <span style={{ textDecoration: "line-through" }}>9,999</span></p>
                <p className="plist-com-name" style={{ color: "green" }}>In stock.</p>
                {/* <input type="number" class="form-control" placeholder="Quantity" style={{width:"30%"}}/> */}
                {/* <div class="input-group mb-2 mr-sm-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">Quantity</div>
                  </div>
                  <input type="number" class="form-control" placeholder="" style={{ width: "30%" }}></input>
                </div> */}
                {/* <button type="button" class="plist-add-cart">
                      Add to Cart
                    </button>
                <button type="button" class="plist-add-cart">
                      Buy Now
                    </button>*/}
                <div style={{ height: "20pt" }}></div> 

<p className="plist-com-name"><b>Details</b></p>

<div class="container">
  <div class="row">
    <div class="col-6">
    Brand
    </div>
    <div class="col-6">
    Apple
    </div>
  </div>
  <div class="row">
    <div class="col-6">
    Style
    </div>
    <div class="col-6">
    GPS
    </div>
  </div>
  <div class="row">
    <div class="col-6">
    Colour
    </div>
    <div class="col-6">
    Space Grey Aluminium Case with Midnight Sport Band
    </div>
  </div>
  <div class="row">
    <div class="col-6">
    Special
    </div>
    <div class="col-6">
    Feature	Sleep Monitor, GPS, Notifications
    </div>
  </div>
  <div class="row">
    <div class="col-6">
    Age
    </div>
    <div class="col-6">
    Range (Description)	Adult
    </div>
  </div>
</div>
<div style={{ height: "20pt" }}></div>
<p className="plist-com-name"><b>Product Image Gallery</b></p>
<div style={{ height: "20pt" }}></div> 


	
 
 


                {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={item.source} style={{ width: "60%" }} />
    </div>
    <div class="carousel-item">
    <img src={item.source} style={{ width: "60%" }} />
    </div>
    <div class="carousel-item">
    <img src={item.source} style={{ width: "60%" }} />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
              </div>
            ))}


          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default ProductAddToCart;
