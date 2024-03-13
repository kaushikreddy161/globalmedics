import React, {
    useRef,
    useLayoutEffect,
    useContext,
    useState,
    useEffect,
  } from "react";
  import { useLocation } from "react-router-dom";

  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";
  
 
  am4core.useTheme(am4themes_animated);
  
  function VitalsGraph(props) {

    console.log("props:", props);
    // const { user } = useContext(UserContext);
    // const navigate = useNavigate();
    // const location = useLocation();
  
    // const [patientId, setpatientId] = useState("");
    // const [TempPRPatientData, setTempPRPatientData] = useState([]);
    // const [TempBPPatientData, setTempBPPatientData] = useState([]);
     const chart = useRef(null);
  
   
  
    useLayoutEffect(() => {
      //console.log("location:", location.state.type);
      //  if(location.state.id.length > 0)
      //  {
      let x = am4core.create("chartdiv", am4charts.XYChart);
      x.paddingRight = 20;
      let data = [];
      data = props.xdata;
      let title = "";
      let xtitle = "";

        //     props.xdata.map((patientBPLog, key) => {
        //         data.push({
        //           date: patientBPLog.datebb,
        //           name: "Blood Pressure",
        //           value: patientBPLog.diastolicPressure,
        //         });
        //       });
            
        //     title = "Blood Pressure";
        //     xtitle = "Measure values"; 

    
        //   props.prdata((patientPRLog, key) => {
        //     data.push({
        //       date: patientPRLog.datepr,
        //       name: "Pulse Rate",
        //       value: patientPRLog.beatsPerMinute,
        //     });
        //   });
        
        // title = "Pulse Rate";
        // xtitle = "Measure values";
    
  
      // console.log("xdata:", data);
  
      x.data = data;
  
      let dateAxis = x.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.baseInterval = { timeUnit: "minute", count: 60 };
  
      let valueAxis1 = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis1.title.text = "Vital Signs";

     //    valueAxis1.tooltip.disabled = false;
    //   valueAxis1.title.text = xtitle;
    //   valueAxis.renderer.minWidth = 5;
  
      let valueAxis2 = x.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.title.text = "Measure Values";
  
      valueAxis2.renderer.opposite = false;
      valueAxis2.renderer.grid.template.disabled = false;

    //   let series = x.series.push(new am4charts.LineSeries());
    //   series.dataFields.dateX = "date";
    //   series.dataFields.valueY = "value";
    //   series.name = `${title}`;
    //   // series.tooltipText = "Date :[bold font-size: 15]{date} Reading: {value}";
  
    let series = x.series.push(new am4charts.LineSeries());
     series.dataFields.valueY = "diastolicPressure";
     series.dataFields.dateX = "datebb";
     series.name = "Blood Pressure";
     series.strokeWidth = 2;
     series.tensionX = 0.7;
     series.yAxis = valueAxis2;
     series.tooltipText = "{name}:[bold font-size: 15]{diastolicPressure} [/] Date:{datebb}";

      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.radius = 5;
      bullet.circle.strokeWidth = 4;
      bullet.circle.fill = am4core.color("#FF0000");

      let series2 = x.series.push(new am4charts.LineSeries());
     series2.dataFields.valueY = "beats";
     series2.dataFields.dateX = "datepr";
     series2.name = "Pulse Rate";
     series2.strokeWidth = 2;
     series2.tensionX = 0.7;
     series2.yAxis = valueAxis2;
     series2.tooltipText = "{name}:[bold font-size: 15]{beats} [/] Date:{datepr}";

    // series4.stroke = chart.colors.getIndex(0).lighten(0.5);
    // series4.strokeDasharray = "3,3";

     let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
     bullet2.circle.radius = 3;
     bullet2.circle.strokeWidth = 2;
     bullet2.circle.fill = am4core.color("#5BB9B4");
  
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
            <div>
                    <div
                      id="chartdiv"
                      style={{
                        width: "98%",
                        height: "600px",
                      }}
                    ></div>
           </div>     
         
    );
  }
  export default VitalsGraph;
  