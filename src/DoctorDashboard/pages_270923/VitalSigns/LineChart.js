import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import logo from './logo.svg';
// import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import moment from "moment";
import * as Realm from "realm-web";

am4core.useTheme(am4themes_animated);


function LineChart(props) {

  //console.log("patientIdLine:",props.pid);
  console.log("PChart:",props.pcd);

  const [TempRatePatientData, setTempRatePatientData] = useState([]);
  const [loading, setLoading] = useState(true);

  const chart = useRef(null);

  setTempRatePatientData(props.pcd);

  console.log("hello:",TempRatePatientData);

  // useEffect(async () => {
  //   // add your Realm App Id to the .env.local file
  //   if (loading) {
  //     const REALM_APP_ID = "globalmedics-yxogc";
  //     const app = new Realm.App({ id: REALM_APP_ID });
  //     const credentials = Realm.Credentials.anonymous();
  //     try {
  //       const user = await app.logIn(credentials);
  //       const patientTempLog =
  //         await user.functions.getVitalsTempPatientData(
  //           props.pid
  //         );
          
  //       setTempRatePatientData(() => patientTempLog);
  //       console.log("patientTempLog", patientTempLog);
  //       // console.log("HeartRatePatientData", HeartRatePatientData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  // }, []);
 
  // useEffect(()=>{
  //  am4core.disposeAllCharts();
  //     }, []);

  console.log("length:",props.pcd.length);

   
  useLayoutEffect(() => {
    let data=[];
    console.log("first:",props.pcd.length);

    if(props.pcd.length > 0)
    {
      console.log("second:",props.pcd.length);

        let x = am4core.create("chartdiv", am4charts.XYChart);

        x.paddingRight = 20;

        let data = [];

        let visits = 10;

        {props.pcd.map((patientTempLog, key)=>{
          console.log("temperature:",patientTempLog.temperature + '  ' + patientTempLog.dateOnset);
        // console.log(new Date((patientTempLog.dateOnset), Y, M, D));
          data.push({
            date: moment(patientTempLog.dateOnset).format("DD-MM-YY HH:mm"),
            name: "temp",
            value:patientTempLog.temperature,
          });
        })}
        
        console.log("graphData:",data);

        x.data = data;

        let dateAxis = x.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let series = x.series.push(new am4charts.LineSeries());
        series.name="Temperature";
        series.stroke = am4core.color("#104547");
        series.strokeWidth=1;
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.tooltipText = "Temp: {valueY.value}";

        // let series1 = x.series.push(new am4charts.LineSeries());
        // series1.dataFields.dateX = "date";
        // series1.dataFields.valueY = "value1";
        // series1.tooltipText = "{valueY.value}";

        x.cursor = new am4charts.XYCursor();

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        x.scrollbarX = scrollbarX;

        chart.current = x;
        //am4core.options.autoDispose = true;

        //   return () => {
        //    //  x.dispose();
        //    am4core.disposeAllCharts();     
        //   };
        // 
    }

}, []);

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>;
}
export default LineChart;
