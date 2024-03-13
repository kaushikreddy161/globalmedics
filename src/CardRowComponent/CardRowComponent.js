import React from 'react';
// import { CardDeck } from 'react-bootstrap';
// import CardComponent from '../CardComponent/CardComponent.js';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Card } from "react-bootstrap";
// import FixedHeader from "../components/FixedHeader";
import Card from "@mui/material/Card";


const CardRowComponent = (props) => {
  // calculate aggregated data
  let selected = props.selected;
  if (selected.length === 0) {
    selected = [0,1,2,3,4,5,6];
  }
  const data = props.data;

  //  console.log("Fetched data:", data);
  // aggData = {"Heart": __, "Move": ___ ...}
  const aggData = {
    BP: 0,
    Calories: 0,
    Fat: 0,
    Glucose: 0,
    Heart: 0,
    HeartRate: 0,
    Height: 0,
    Menstruation: 0,
    Move: 0,
    Ovulation: 0,
    Oxygen: 0,
    Sleep: 0,
    Steps: 0,
    Temperature: 0,
    Weight:0
  };
  if (data.length > 0) {
    selected.forEach((idx) => {
      aggData.BP += data[idx].BP;
      aggData.Calories += data[idx].Calories;
      aggData.Fat += data[idx].Fat;
      aggData.Glucose += data[idx].Glucose;
      aggData.Heart += data[idx].Heart;
      aggData.HeartRate += data[idx].HeartRate;
      aggData.Height += data[idx].Height;
      aggData.Menstruation += data[idx].Menstruation;
      aggData.Move += data[idx].Move;
      aggData.Ovulation += data[idx].Ovulation;
      aggData.Oxygen += data[idx].Oxygen;
      aggData.Sleep += data[idx].Sleep;
      aggData.Steps += data[idx].Steps;
      aggData.Temperature += data[idx].Temperature;
      aggData.Weight += data[idx].Weight;
    })

  }

  return (
     <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
       <Grid
         container
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
         style={{
           paddingBottom: "0rem",
         }}
       >
             <Card
                style={{
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  marginTop: "0.7rem",
                  marginBottom: "0.7rem",
                  marginLeft: "-0.5rem",
                  marginRight: "-0.5rem",
                  paddingRight: "0rem",
                  border: "2px solid white",
                }}
              >
                 <div >
                    <div
                      className="row align-items-center text-res"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        // height: "50px",
                        verticalAlign: "middle",
                        width: "400px"
                      }}
                    >
                      <div class="row align-items-center" >
                       <div class="col-10" >Blood Pressure</div>
                        <div class="col-2">{aggData.BP}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Calories Burnt</div>
                        <div class="col-2">{aggData.Calories}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Fat</div>
                        <div class="col-2">{aggData.Fat}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Glucose</div>
                        <div class="col-2">{aggData.Glucose}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Heart Points</div>
                        <div class="col-2">{aggData.Heart}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Heart Rate</div>
                        <div class="col-2">{aggData.HeartRate}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Height</div>
                        <div class="col-2">{aggData.Height}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Move Minutes</div>
                        <div class="col-2">{aggData.Move}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Oxygen</div>
                        <div class="col-2">{aggData.Oxygen}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Sleep</div>
                        <div class="col-2">{aggData.Sleep}</div>
                      </div>
                      <div class="row align-items-center" >
                       <div class="col-10" >Steps Travelled</div>
                        <div class="col-2">{aggData.Steps}</div>
                      </div>

                      <div class="row align-items-center" >
                       <div class="col-10" >Temperature</div>
                        <div class="col-2">{aggData.Temperature}</div>
                      </div>

                      <div class="row align-items-center" >
                       <div class="col-10" >Weight</div>
                        <div class="col-2">{aggData.Weight}</div>
                      </div>
                     
                    </div>
                 </div>        
             </Card>   
           </Grid>
        </Container>
  );
}

export default CardRowComponent;