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

  const AddToCart = () => {
    const path = `/productAddToCart`;
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
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              // borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <div className="div-input-search" style={{ width: "500px" }}>
              Search Products for Papa
              <div class="container">
                <div class="row">
                  <div class="col-3">
                    
                    <select name="color" >
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                    </select>
                    
                  </div>
                  <div class="col-8">
                    <div class="form-group has-search">
                      <SearchIcon className="form-control-feedback" />
                      <input type="text" class="form-control" placeholder="Search for products..." />
                    </div>
                  </div>
                  <div class="col-1">
                    <ShoppingCartIcon onClick={AddToCart} />
                  </div>
                </div>
              </div>
            </div>



          </Card>
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
                    <ShoppingCartIcon className="ecom-cart" onClick={AddToCart} />
                  </div>
                </div>
              </div>
            </div>
            {prodList.map((item) => (
              <div class="container">
                <div class="row" style={{ marginTop: "1rem" }}>
                  <div class="col-6">
                    <div style={{ textAlign: "center" }} className="plist">
                      <img src={item.source} style={{ width: "60%" }} />
                    </div>
                  </div>
                  <div class="col-6">
                    <p className="plist-com-name">{item.name}</p>
                    <p className="plist-com-name">Price: {item.price}</p>
                    <button type="button" class="plist-add-cart">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div style={{ height: "20pt" }}></div>
              </div>
            ))}


          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default ProductList;
