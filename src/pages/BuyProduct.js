import React, { useEffect, useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider, Typography } from "@mui/material";
import FixedHeader from "../components/FixedHeader";
import IncDecCounter from "../pages/IncDecCounter"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuyProductCarousel from "./BuyProductCarousel";
import "./Main.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const BuyProduct = () => {
  

  const [imageSource, setImageSource] = useState("../assets/ecommerce/icon-wishlist-no.png");

  const handleImageChange = () => {
    if (imageSource === "../assets/ecommerce/icon-wishlist-no.png") { setImageSource("../assets/ecommerce/icon-wishlist.png"); }
    else { setImageSource("../assets/ecommerce/icon-wishlist-no.png"); }
  };


  const navigate = useNavigate();
  const BuyProduct = () => {
    const path = `/buyProduct`;
    navigate(path);
  };

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  
    

  return (
    <Container
      style={{ background: "#EBEBEB", maxWidth: "100%", minWidth: "300px" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Buy Product"
          title2="Please select from products that you wish to buy for"
          limg="rl"
          rimg="bpr"
        />
        <div style={{ height: "120pt" }}></div>

        <div className="form-dpl">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "6px solid #1D5A90",
              borderRadius: "10pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>

              <div class="row">
                <div class="col-10" style={{ color: "#209F85",fontSize:"1.3rem" }}>
                  Name & Brand of the product
                </div>
                <div class="col-1">
                 
                  <FavoriteBorderIcon />
                  
                </div>
                <div class="col-1">
                  <ShoppingCartIcon />
                </div>
              </div>
              <Typography className="prod-des">One-line value proposition of the brand & model of the product.</Typography>
              <BuyProductCarousel />
              <div style={{ marginTop: "2rem" }}>

                <div class="row">
                  <div class="col-4">
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                  </div>
                  <div class="col-8">
                    <span style={{ color: "#ADAAA7", fontSize: "0.9rem" }}>(345 ratings)</span>
                  </div>
                </div>

                <div class="row">
                  <div class="col-7">
                    <Typography className="product-price">Price / Unit: 500 AUD   <span style={{ paddingLeft: "1rem", textDecoration: "line-through" }}>700 AUD</span></Typography>
                    <Typography className="product-price">Buy Now Pay Later options</Typography>
                  </div>
                  <div class="col-2"><button type="button" class="btn afterpay-btn">afterpay</button>
                  </div>
                  <div class="col-3" style={{ textAlign: "right" }}><button type="button" class="btn klarna-btn">Klarna</button>
                  </div>
                </div>


              </div>
              <div style={{ height: "10pt" }}></div>
              <Typography className="prod-des">Quantity in Units Numbers</Typography>
              <div className="IncDecCounter">
                <IncDecCounter />
              </div>
              <div style={{ height: "20pt" }}></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  marginBottom: "2rem",
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
                  Buy Now
                </Button>
              </div>
              <div style={{ height: "20pt", borderTop: "2px solid gray" }}></div>
              <div class="row">
                <div class="col-10" style={{ color: "#209F85",fontSize:"1.3rem" }}>
                  Product Specifications
                </div>
                <div class="col-1">
                  <FavoriteBorderIcon />
                </div>
                <div class="col-1">
                  <ShoppingCartIcon />
                </div>
              </div>
              <Typography className="prod-des">One-line value proposition of the brand & model of the product.</Typography>
              <div style={{ marginTop: "2rem" }}>

                <div className="bp-tab-border">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Features</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th scope="row">Case Size</th>
                        <td>40mm, 44mm</td>
                      </tr>
                      <tr>
                        <th scope="row">Whats in the box</th>
                        <td>Case, Band, 1m Magnetic Charger to USB-C Cable</td>
                      </tr>
                      <tr>
                        <th scope="row">Connectivity</th>
                        <td>Wi-Fi 802.11b/g/n 2.4GHz, Bluetooth 5.0</td>
                      </tr>
                      <tr>
                        <th scope="row">Power</th>
                        <td>Up to 18 hours of battery life</td>
                      </tr>
                      <tr>
                        <th scope="row">Additional Features</th>
                        <td>Built-in GPS, GLONASS, Galileo, and QZSS, S5 with 64-bit dual-core processor, W3 Apple wireless chip, Barometric altimeter, Optical heart sensor, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Retina LTPO OLED display with Force Touch (1000 nits), Digital Crown with haptic feedback, Louder speaker, Ion-X strengthened glass, Sapphire crystal and ceramic back, Wi-Fi 802.11b/g/n 2.4GHz, Bluetooth 5.0, Built-in rechargeable lithium-ion battery, Up to 18 hours of battery life, Water resistant 50 metres, watchOS 5</td>
                      </tr>
                      <tr>
                        <th scope="row">Compatible Device</th>
                        <td>iPhone 6s or later with iOS 15 or later</td>
                      </tr>
                      <tr>
                        <th scope="row">Width</th>
                        <td>34mm, 38mm</td>
                      </tr>
                      <tr>
                        <th scope="row">Depth</th>
                        <td>10.4mm</td>
                      </tr>
                      <tr>
                        <th scope="row">Case Weight</th>
                        <td>30.5g, 36.7g</td>
                      </tr>
                      <tr>
                        <th scope="row">Warranty</th>
                        <td>Apple-branded hardware product and accessories contained in the original packaging (“Apple Product”) come with a One-Year Limited Warranty. See apple.com/in/legal/warranty for more information.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-7">
                    <Typography className="product-price">Price / Unit: 500 AUD</Typography>
                    <Typography className="product-price">Buy Now Pay Later options</Typography>
                  </div>
                  <div class="col-2"><button type="button" class="btn afterpay-btn">afterpay</button>
                  </div>
                  <div class="col-3" style={{ textAlign: "right" }}><button type="button" class="btn klarna-btn">Klarna</button>
                  </div>
                </div>
                <div style={{ height: "10pt" }}></div>
                <Typography className="prod-des">Quantity in Units Numbers</Typography>
                <div className="IncDecCounter">
                  <IncDecCounter />
                </div>
                <div style={{ height: "20pt" }}></div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    marginBottom: "2rem",
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
                    Buy Now
                  </Button>
                </div>
              </div>
              <div style={{ height: "20pt", borderTop: "2px solid gray" }}></div>
              <div class="row">
                <div class="col-10" style={{ color: "#209F85",fontSize:"1.3rem" }}>
                  Customers Reviews
                </div>
                <div class="col-1">
                  <FavoriteBorderIcon/>                  
                </div>
                <div class="col-1">
                  <ShoppingCartIcon />
                </div>
              </div>
              <Typography className="prod-des">One-line value proposition of the brand & model of the product.</Typography>
              <div style={{ height: "20pt" }}></div>

              <div className="bp-tab-border">
              <div style={{textAlign:"right",padding:"1rem"}}>
              <Rating name="simple-controlled" defaultValue={2.5} precision={1}/>
              </div>
              <Typography className="prod-des" style={{marginLeft:"1rem"}}>My feedback about the product / is that …….</Typography>
              <div style={{textAlign:"right",padding:"1rem"}}>
              <div style={{ height: "100pt" }}></div>
              <Typography className="prod-des">Australia</Typography>
              </div>
              
              </div>
              
              
              
              
              <div style={{ marginTop: "2rem" }}>

                <div class="row">
                  <div class="col-4">
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                  </div>
                  <div class="col-8">
                    <span style={{ color: "#ADAAA7", fontSize: "0.9rem" }}>(345 ratings)</span>
                  </div>
                </div>

                <div class="row">
                  <div class="col-7">
                    <Typography className="product-price">Price / Unit: 500 AUD   <span style={{ paddingLeft: "1rem", textDecoration: "line-through" }}>700 AUD</span></Typography>
                    <Typography className="product-price">Buy Now Pay Later options</Typography>
                  </div>
                  <div class="col-2"><button type="button" class="btn afterpay-btn">afterpay</button>
                  </div>
                  <div class="col-3" style={{ textAlign: "right" }}><button type="button" class="btn klarna-btn">Klarna</button>
                  </div>
                </div>


              </div>
              <div style={{ height: "10pt" }}></div>
              <Typography className="prod-des">Quantity in Units Numbers</Typography>
              <div className="IncDecCounter">
                <IncDecCounter />
              </div>
              <div style={{ height: "20pt" }}></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  marginBottom: "2rem",
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
                  Buy Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>


      </Grid>
    </Container>
  );
};

export default BuyProduct;
