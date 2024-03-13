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
import { Button, Divider, TextField } from "@mui/material";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import FixedHeader from "../components/FixedHeader";
import "./Main.css";

am4core.useTheme(am4themes_animated);

function VitalsGraph() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [patientId, setpatientId] = useState("");
  const [TempPRPatientData, setTempPRPatientData] = useState([]);
  const [TempBPPatientData, setTempBPPatientData] = useState([]);
  const chart = useRef(null);

  const onBack = () => {
    const path = `/vitalsSummary`;
    navigate(path);
  };

  const onSeekHelp = () => {
    const path = `/seekHelp`;
    navigate(path);
  };

  const onSubmit = () => {
    const path = `/vitalsSummary`;
    navigate(path);
  };

  useLayoutEffect(() => {
    //console.log("location:", location.state.type);
    //  if(location.state.id.length > 0)
    //  {
    let x = am4core.create("chartdiv", am4charts.XYChart);
    x.paddingRight = 20;
    let data = [];
    let visits = 10;
    let title = "";
    let xtitle = "";
    if (location.state.type === "PR") {
      {
        location.state.id.map((patientPRLog, key) => {
          data.push({
            date: moment(patientPRLog.dateOnset).format("YYYY-MM-DD HH:mm"),
            name: "Pulse Rate",
            value: decryptData(patientPRLog.beatsPerMinute),
          });
        });
      }
      title = "Pulse Rate";
      xtitle = "Measuring values";
    } else if (location.state.type === "SS") {
      {
        location.state.id.map((patientPRLog, key) => {
          data.push({
            date: moment(patientPRLog.dateOnset).format("YYYY-MM-DD HH:mm"),
            name: "Systolic",
            value: decryptData(patientPRLog.systolicPressure),
          });
        });
      }
      title = "Systolic";
      xtitle = "Measuring values";
    } else if (location.state.type === "DS") {
      {
        location.state.id.map((patientPRLog, key) => {
          data.push({
            date: moment(patientPRLog.dateOnset).format("YYYY-MM-DD HH:mm"),
            name: "Diastolic",
            value: decryptData(patientPRLog.diastolicPressure),
          });
        });
      }
      title = "Diastolic";
      xtitle = "Measuring values";
    } else if (location.state.type === "RR") {
      {
        location.state.id.map((patientPRLog, key) => {
          data.push({
            date: moment(patientPRLog.dateOnset).format("YYYY-MM-DD HH:mm"),
            name: "Resp Rate",
            value: decryptData(patientPRLog.breathsPerMinute),
          });
        });
      }
      title = "Resp Rate";
      xtitle = "Measuring values";
    } else if (location.state.type === "SP") {
      {
        location.state.id.map((patientPRLog, key) => {
          data.push({
            date: moment(patientPRLog.dateOnset).format("YYYY-MM-DD HH:mm"),
            name: "SPO2",
            value: decryptData(patientPRLog.spo2Percentage),
          });
        });
      }
      title = "SPO2";
      xtitle = "Measuring values";
    } else if (location.state.type === "BS") {
      {
        location.state.id.map((patientPRLog, key) => {
          data.push({
            date: moment(patientPRLog.dateOnset).format("YYYY-MM-DD HH:mm"),
            name: "Blood Sugar",
            value: decryptData(patientPRLog.bloodSugarValue),
          });
        });
      }
      title = "Blood Sugar";
      xtitle = "Measuring values";
    } else if (location.state.type === "TD") {
      {
        location.state.id.map((patientPRLog, key) => {
          data.push({
            date: moment(patientPRLog.dateOnset).format("YYYY-MM-DD HH:mm"),
            name: "Temperature",
            value: decryptData(patientPRLog.temperature),
          });
        });
      }
      title = "Temperature";
      xtitle = "Measuring values";
    }

    // console.log("xdata:", data);

    x.data = data;

    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.baseInterval = { timeUnit: "minute", count: 1 };

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = false;
    valueAxis.title.text = xtitle;
    valueAxis.renderer.minWidth = 5;

    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.name = `${title}`;
    // series.tooltipText = "Date :[bold font-size: 15]{date} Reading: {value}";

    let bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 5;
    bullet2.circle.strokeWidth = 4;
    bullet2.circle.fill = am4core.color("#FF0000");

    // Add cursor
    x.cursor = new am4charts.XYCursor();

    // Add legend
    x.legend = new am4charts.Legend();
    x.legend.position = "top";

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
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
        <FixedHeader
          title="Vitals Graph"
          title2="Graphical Vitals Report"
          title3="Last Updated: 08-11-2022"
          limg="rl"
          rimg="vsr"
        />
        <div className="form-vg">
          <Card
            itemType=""
            style={{
              marginTop: "0pt",
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
                  <div
                    id="chartdiv"
                    style={{
                      width: "98%",
                      maxWidth: "450px",
                      height: "500px",
                    }}
                  ></div>
                </div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "4rem",
                  marginBottom: "1rem",
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
                  Noted
                </Button>
              </div>
              <div
              style={{
                textAlign: "center",
                marginTop: "0rem",
                marginBottom: "1rem",
              }}
            >
              <Button
                style={{
                  background: "#707070",
                  borderRadius: 50,
                  width: "50%",
                  color: "#ffffff",
                  // fontSize: "0.9rem",
                  textTransform: "none",
                }}
                onClick={onSeekHelp}
              >
                Seek Help
              </Button>
            </div>


            </Card.Body>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
}
export default VitalsGraph;
