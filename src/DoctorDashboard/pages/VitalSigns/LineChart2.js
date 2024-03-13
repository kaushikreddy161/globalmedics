import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class Linechart2 extends Component {
    constructor(props){
        super(props);
          //  console.log('yy',this.props);
    }

  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("SalesChart", am4charts.XYChart);
  
    let data=[];
    data = this.props.xdata;
   // console.log("xdata:",this.props.xdata);
    // console.log("RR:",this.props.pcdR);
    // console.log("TT:",this.props.pcdT);
    // console.log("HH:",this.props.pcdH);
     console.log("BP:",this.props.pcdB);    
    // console.log("SS:",this.props.pcdS);

  
      // Add data
      //  chart.data = PatientVitalSignsData;
      chart.data=data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
     dateAxis.renderer.grid.template.location = -50;
     dateAxis.baseInterval={"timeUnit":"minute",count: 60};
     //dateAxis.renderer.minGridDistance = 35;

    let valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "Vital Signs";

    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.title.text = "Measure Values";

    valueAxis2.renderer.opposite = true;
    valueAxis2.renderer.grid.template.disabled = true;

    //  Create series
   
    // let series2 = chart.series.push(new am4charts.LineSeries());
    // series2.dataFields.valueY = "breaths";
    // series2.dataFields.dateX = "dater";
    // series2.name = "Respiratory Rate";
    // series2.strokeWidth = 2;
    // series2.tensionX = 0.7;
    // series2.yAxis = valueAxis2;
    // series2.tooltipText = "{name}: [bold font-size: 15]{breaths} [/] Date : {dater}";

    // let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    // bullet2.circle.radius = 3;
    // bullet2.circle.strokeWidth = 2;
    // bullet2.circle.fill = am4core.color("#FF0000");

    // let series3 = chart.series.push(new am4charts.LineSeries());
    // series3.dataFields.valueY = "value";
    // series3.dataFields.dateX = "date";
    // series3.name = "Temp";
    // series3.strokeWidth = 2;
    // series3.tensionX = 0.7;
    // series3.yAxis = valueAxis2;
    // series3.tooltipText = "{name}: [bold font-size: 15]{value} [/] Date : {date}";

    // let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    // bullet3.circle.radius = 3;
    // bullet3.circle.strokeWidth = 2;
    // bullet3.circle.fill = am4core.color("#FFFF00");

    //  let series4 = chart.series.push(new am4charts.LineSeries());
    //  series4.dataFields.valueY = "beats";
    //  series4.dataFields.dateX = "dateb";
    //  series4.name = "Heart Rate";
    //  series4.strokeWidth = 2;
    //  series4.tensionX = 0.7;
    //  series4.yAxis = valueAxis2;
    //  series4.tooltipText = "{name}:[bold font-size: 15]{beats} [/] Date:{dateb}";

    //  let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
    //  bullet4.circle.radius = 3;
    //  bullet4.circle.strokeWidth = 2;
    //  bullet4.circle.fill = am4core.color("#fff");

     
     let series5 = chart.series.push(new am4charts.LineSeries());
     series5.dataFields.valueY = "diastolicPressure";
     series5.dataFields.dateX = "datebb";
     series5.name = "Blood Pressure";
     series5.strokeWidth = 2;
     series5.tensionX = 0.7;
     series5.yAxis = valueAxis2;
     series5.tooltipText = "{name}:[bold font-size: 15]{diastolicPressure} [/] Date:{datebb}";

    // series4.stroke = chart.colors.getIndex(0).lighten(0.5);
    // series4.strokeDasharray = "3,3";

     let bullet5 = series5.bullets.push(new am4charts.CircleBullet());
     bullet5.circle.radius = 3;
     bullet5.circle.strokeWidth = 2;
     bullet5.circle.fill = am4core.color("#B960AF");

     
    //  let series6 = chart.series.push(new am4charts.LineSeries());
    //  series6.dataFields.valueY = "spo2Percentage";
    //  series6.dataFields.dateX = "datebs";
    //  series6.name = "SPo2 Percentage";
    //  series6.strokeWidth = 2;
    //  series6.tensionX = 0.7;
    //  series6.yAxis = valueAxis2;
    //  series6.tooltipText = "{name}:[bold font-size: 15]{spo2Percentage} [/] Date:{datebs}";

    // // series4.stroke = chart.colors.getIndex(0).lighten(0.5);
    // // series4.strokeDasharray = "3,3";

    //  let bullet6 = series6.bullets.push(new am4charts.CircleBullet());
    //  bullet6.circle.radius = 3;
    //  bullet6.circle.strokeWidth = 2;
    //  bullet6.circle.fill = am4core.color("#5BB9B4");

    // Add cursor
    chart.cursor = new am4charts.XYCursor();  

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

    // Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series6);
    chart.scrollbarX.series.push(series5);
    // chart.scrollbarX.series.push(series4);
    // chart.scrollbarX.series.push(series3);
    // chart.scrollbarX.series.push(series2);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    this.chart = chart;

  }


  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <div>
        <div id="SalesChart" style={{ width: "100%", height: "500px" }} />
      </div>
    );
  }
}
