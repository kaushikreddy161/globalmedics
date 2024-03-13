import React, {
  useRef,
  useLayoutEffect,
  useContext,
  useState,
  useEffect,
} from "react";
import { UserContext } from "../contexts/user.context";
import { Card } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import cypherData from "../crypt/cypherData";
import decryptData from "../crypt/decryptData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import moment from "moment";
import IconVitalsSummary from "../assets/icon-vitals-summary.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import { BSON } from "realm-web";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function VitalsGuage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  //const chart = useRef(null);

  const onBack = () => {
    const path = `/vitalsSummary`;
    navigate(path);
  };

  useLayoutEffect(() => {
    console.log("location:", location.state.type);
    //  if(location.state.id.length > 0)
    //  {
    let chart = am4core.create("chartdiv", am4charts.GaugeChart);

    // Create axis
    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 180;
    axis.strictMinMax = true;
    axis.name = "Hello";
    // Set inner radius
    chart.innerRadius = -20;

    if (location.state.type === "PR") {
      // Add ranges
      let range = axis.axisRanges.create();
      range.value = 0;
      range.endValue = 60;
      range.axisFill.fillOpacity = 1;
      range.axisFill.fill = am4core.color("yellow");
      range.axisFill.zIndex = -1;

      let range2 = axis.axisRanges.create();
      range2.value = 60;
      range2.endValue = 90;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = am4core.color("green");
      range2.axisFill.zIndex = -1;

      let range3 = axis.axisRanges.create();
      range3.value = 90;
      range3.endValue = 180;
      range3.axisFill.fillOpacity = 1;
      range3.axisFill.fill = am4core.color("red");
      range3.axisFill.zIndex = -1;

      // Add hand
      let hand = chart.hands.push(new am4charts.ClockHand());
      hand.value = location.state.id;
      hand.pin.disabled = true;
      hand.fill = am4core.color("#2D93AD");
      hand.stroke = am4core.color("#2D93AD");
      hand.innerRadius = am4core.percent(20);
      hand.radius = am4core.percent(80);
      hand.startWidth = 25;

      var legend = new am4charts.Legend();
      legend.isMeasured = false;
      legend.y = am4core.percent(100);
      legend.verticalCenter = "bottom";
      legend.parent = chart.chartContainer;
      legend.data = [
        {
          name: "Pulse Rate",
          fill: chart.colors.getIndex(0),
        },
      ];
    } else if (location.state.type === "SS") {
      // Add ranges
      let range = axis.axisRanges.create();
      range.value = 0;
      range.endValue = 90;
      range.axisFill.fillOpacity = 1;
      range.axisFill.fill = am4core.color("yellow");
      range.axisFill.zIndex = -1;

      let range2 = axis.axisRanges.create();
      range2.value = 90;
      range2.endValue = 139;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = am4core.color("green");
      range2.axisFill.zIndex = -1;

      let range3 = axis.axisRanges.create();
      range3.value = 139;
      range3.endValue = 180;
      range3.axisFill.fillOpacity = 1;
      range3.axisFill.fill = am4core.color("red");
      range3.axisFill.zIndex = -1;

      // Add hand
      let hand = chart.hands.push(new am4charts.ClockHand());
      hand.value = location.state.id;
      hand.pin.disabled = true;
      hand.fill = am4core.color("#2D93AD");
      hand.stroke = am4core.color("#2D93AD");
      hand.innerRadius = am4core.percent(20);
      hand.radius = am4core.percent(80);
      hand.startWidth = 25;

      var legend = new am4charts.Legend();
      legend.isMeasured = false;
      legend.y = am4core.percent(100);
      legend.verticalCenter = "bottom";
      legend.parent = chart.chartContainer;
      legend.data = [
        {
          name: "Systolic Reading",
          fill: chart.colors.getIndex(0),
        },
      ];
    } else if (location.state.type === "DS") {
      // Add ranges
      let range = axis.axisRanges.create();
      range.value = 0;
      range.endValue = 60;
      range.axisFill.fillOpacity = 1;
      range.axisFill.fill = am4core.color("yellow");
      range.axisFill.zIndex = -1;

      let range2 = axis.axisRanges.create();
      range2.value = 60;
      range2.endValue = 89;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = am4core.color("green");
      range2.axisFill.zIndex = -1;

      let range3 = axis.axisRanges.create();
      range3.value = 89;
      range3.endValue = 180;
      range3.axisFill.fillOpacity = 1;
      range3.axisFill.fill = am4core.color("red");
      range3.axisFill.zIndex = -1;

      // Add hand
      let hand = chart.hands.push(new am4charts.ClockHand());
      hand.value = location.state.id;
      hand.pin.disabled = true;
      hand.fill = am4core.color("#2D93AD");
      hand.stroke = am4core.color("#2D93AD");
      hand.innerRadius = am4core.percent(20);
      hand.radius = am4core.percent(80);
      hand.startWidth = 25;

      var legend = new am4charts.Legend();
      legend.isMeasured = false;
      legend.y = am4core.percent(100);
      legend.verticalCenter = "bottom";
      legend.parent = chart.chartContainer;
      legend.data = [
        {
          name: "Diastolic Reading",
          fill: chart.colors.getIndex(0),
        },
      ];
    }

    // setInterval(function() {
    //     hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
    //     hand2.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
    //   }, 2000);

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // x.scrollbarX = scrollbarX;

    // chart.current = x;

    // return () => {
    //   x.dispose();
    // };
    //}
  }, []);

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
        <div
          style={{
            backgroundColor: "#EBEBEB",
            paddingTop: "2rem",
          }}
        >
          <Card
            style={{
              backgroundColor: "#F2F8F1",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
          >
            <Card.Body style={{ margin: "0pt" }}>
              <div
                class="container"
                style={{ marginTop: "-1.5rem", marginBottom: "0rem" }}
              >
                <ArrowBackIosIcon
                  onClick={onBack}
                  style={{
                    marginTop: "0rem",
                    cursor: "pointer",
                    marginBottom: "-3.6rem",
                  }}
                />
                <div class="row">
                  <div className="col-sm-2" style={{ marginTop: "2.5rem" }}>
                    <img src={IconPatientImage} style={{ width: "150%" }} />
                  </div>
                  <div className="col-sm-8">
                    <p
                      style={{
                        fontSize: 25,
                        fontFamily: "Helvetica",
                        color: "#209F85",
                        marginBottom: "0pt",
                        marginTop: "0pt",
                        textAlign: "center",
                      }}
                    >
                      Vitals Guage Graph
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontFamily: "Helvetica",
                        color: "#adaaa7",
                        marginBottom: "12pt",
                        marginTop: "0pt",
                        textAlign: "center",
                      }}
                    >
                      Graphical Vitals Report
                      {/* <>
                      {location.state.id === "P" ? "Pulse Rate" : ""}
                      {location.state.id === "B" ? "Blood Pressure" : ""}
                      </> */}
                    </p>
                    {/* <p
                      style={{
                        fontSize: 16,
                        fontFamily: "Helvetica",
                        color: "#adaaa7",
                        marginBottom: "0pt",
                        marginTop: "0pt",
                        textAlign: "center",
                      }}
                    >
                      Last Updated: {datex.toDateString()}
                    </p> */}
                  </div>
                  <div
                    className="col-sm-2"
                    style={{
                      marginTop: "1rem",
                      marginLeft: "-1.5rem",
                      textAlign: "left",
                    }}
                  >
                    <img src={IconVitalsSummary} style={{ width: "auto" }} />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            itemType=""
            style={{
              marginTop: "10pt",
              marginBottom: "50pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
          >
            <Card.Body>
              <div className="container">
                <div className="form-container">
                  <div
                    id="chartdiv"
                    style={{ width: "450px", height: "400px" }}
                  ></div>
                </div>
              </div>
            </Card.Body>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
}
export default VitalsGuage;
