import React, { useEffect, useContext, useState } from "react";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";

import Next from "../assets/icon-next.png";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import Watch from "../assets/ecommerce/Model_3.png";

import IconOximeter from "../assets/ecommerce/icon-oximeter.png";
import IconThermometer from "../assets/ecommerce/icon-thermometer.png";
import IconBeds from "../assets/ecommerce/icon-beds.png";
import IconBPMonitor from "../assets/ecommerce/icon-bpmonitor.png";
import IconNebulizer from "../assets/ecommerce/icon-nebulizer.png";
import IconAsthma from "../assets/ecommerce/icon-asthma.png";
import IconWeight from "../assets/ecommerce/icon-weight.png";



import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import Checkbox from "@mui/material/Checkbox";
import "./Main.css";

const ProductList = () => {

  
  const navigate = useNavigate();
  
  const onSubmit = () => {
    const path = `/buyProduct`;
    navigate(path);
  };

  const selectDetails = () => {
    const path = `/buyProduct`;
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
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="For Illustration Only"
          title2="Select all the symptoms and their frequency of recording, depending on conditions."
          limg="rl"
          rimg="bpr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-dc">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "0pt",
              borderTop: "6px solid #1D5A90",
              borderRadius: "10pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <div className="div-input-search">
              <div class="container">
                <div class="row">
                  <div class="col-5">
                    

                    <select id="color" name="color" class="btn btn-secondary test-b">
                      <option value="">Select</option>
                      <option value="withings">Smartwatch</option>
                      <option value="oximeter">Oximeter</option>
                      <option value="thermometer">Thermometer</option>
                      <option value="dozeeBeds">Smart Beds</option>
                      <option value="bpressure">Blood Pressure</option>
                      <option value="nebulizer">Nebulizer Machines</option>
                      <option value="asthma">Asthma Devices</option>
                      <option value="weight">Weight Machine</option>
                    </select>
                  </div>
                  <div class="col-6">
                    <div class="form-group has-search">
                      <SearchIcon className="form-control-feedback" />
                      <input type="text" class="form-control" placeholder="Search for products..." />
                    </div>
                  </div>
                  <div class="col-1">
                    <ShoppingCartIcon className="ecom-cart"  />
                  </div>
                </div>
              </div>
            </div>



          </Card>
        </div>
        <div className="form-dpl">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "6px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
              <div class="container">
                <div
                  className="row align-items-top text-res"
                  style={{
                    paddingTop: "0rem",
                    paddingBottom: "0rem",
                    height: "70px",
                    verticalAlign: "top",
                    marginLeft: "-1rem",
                    marginRight: "-2rem",
                  }}
                >
                  <div class="col-6" style={{ color: "#209F85" }}>
                    Select Products
                  </div>
                  <div
                    class="col-2"
                    style={{ color: "#209F85", textAlign: "center" }}
                  >
                    Price in AUD per unit
                  </div>
                  <div
                    class="col-2"
                    style={{ textAlign: "center", color: "#209F85" }}
                  >
                    No of Units
                  </div>
                  <div
                    class="col-2"
                    style={{ textAlign: "left", color: "#209F85" }}
                  >
                    Details
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={Watch} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Smartwatch
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      200.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" onClick={selectDetails} className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconOximeter} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Oximeter
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      75.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconThermometer} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Thermometer
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      18.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconBeds} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Spleep Beds
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      300.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconBPMonitor} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Blood Pressure Monitor
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      200.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconNebulizer} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Nebulizer Machines
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      100.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              {/* <Divider style={{ margin: "4pt" }} />
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconAsthma} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Asthma Devices
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      10.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card> */}
              <Divider style={{ margin: "4pt" }} />
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconWeight} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                    Smart scales
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      125.00
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <input type="number" class="form-control" min="0"/>
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" className="ecom-cart"/>
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              
            </Card.Body>
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
                onClick={onSubmit}
                type="submit"
              >
                Select
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default ProductList;
