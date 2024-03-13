import React from "react";
import Slider from "react-slick";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import papaImage from "../assets/man1.png";
import maImage from "../assets/lady1.png";
import auImage from "../assets/lady2.png";
import User1 from "../assets/img-tuser1.png";
import User2 from "../assets/img-tuser2.png";
import User3 from "../assets/img-tuser3.png";
import User4 from "../assets/img-tuser4.png";
import "./Main.css";

// import "./HealthReports.css";
// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src={papaImage} onDragStart={handleDragStart} role="presentation" />,
//   <img src={maImage} onDragStart={handleDragStart} role="presentation" />,
//   <img src={auImage} onDragStart={handleDragStart} role="presentation" />,
// ];

// const responsive = {
//     400: { items: 3 },
//     300: { items: 2 },
//     200: { items: 1 }
//   }

const CarouselSlider = () => {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 100,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Card
        //  sx={{ maxWidth: 500 }}
        style={{
          borderTop: "6px solid #1D5A90",
          marginTop: "200px",
          marginBottom: "0rem",
          borderRadius: "10px",
          padding: "20pt",
          width: "100%",
          maxWidth: "500px",
          height: "180px",
          position: "absolute",
          zIndex: "1",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Slider {...settings} style={{ fontFace: "Arial" }}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              height: "140px",
            }}
          >
            <Card
              style={{
                borderTop: "6px solid #1D5A90",
                borderRadius: "10pt",
                // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                width: "110px",
              }}
            >
              <div style={{ height: "5px" }}></div>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src={papaImage}
                  role="presentation"
                  style={{ height: "60px", textAlign: "center" }}
                />
              </div>
              <div style={{ height: "10px" }}></div>
              <div style={{ textAlign: "center" }}>Papa</div>
              <div style={{ height: "5px" }}></div>
            </Card>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "30px",
              alignSelf: "center",
              height: "140px",
            }}
          >
            <Card
              style={{
                borderTop: "6px solid #1D5A90",
                borderRadius: "10pt",
                // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                width: "110px",
              }}
            >
              <div style={{ height: "5px" }}></div>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src={maImage}
                  role="presentation"
                  style={{ height: "60px", textAlign: "center" }}
                />
              </div>
              <div style={{ height: "10px" }}></div>
              <div style={{ textAlign: "center" }}>Mumiji</div>
              <div style={{ height: "5px" }}></div>
            </Card>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "30px",
              height: "140px",
            }}
          >
            <Card
              style={{
                borderTop: "6px solid #1D5A90",
                borderRadius: "10pt",
                // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                width: "110px",
              }}
            >
              <div style={{ height: "5px" }}></div>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src={auImage}
                  role="presentation"
                  style={{ height: "60px", textAlign: "center" }}
                />
              </div>
              <div style={{ height: "10px" }}></div>
              <div style={{ textAlign: "center" }}>Aunty</div>
              <div style={{ height: "5px" }}></div>
            </Card>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "30px",
              height: "140px",
            }}
          >
            <Card
              style={{
                borderTop: "6px solid #1D5A90",
                borderRadius: "10pt",
                // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                width: "110px",
              }}
            >
              <div style={{ height: "5px" }}></div>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src={User1}
                  role="presentation"
                  style={{ height: "60px", textAlign: "center" }}
                />
              </div>
              <div style={{ height: "10px" }}></div>
              <div style={{ textAlign: "center" }}>User 1</div>
              <div style={{ height: "5px" }}></div>
            </Card>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "30px",
              height: "140px",
            }}
          >
            <Card
              style={{
                borderTop: "6px solid #1D5A90",
                borderRadius: "10pt",
                // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                width: "110px",
              }}
            >
              <div style={{ height: "5px" }}></div>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src={User2}
                  role="presentation"
                  style={{ height: "60px", textAlign: "center" }}
                />
              </div>
              <div style={{ height: "10px" }}></div>
              <div style={{ textAlign: "center" }}>User 2</div>
              <div style={{ height: "5px" }}></div>
            </Card>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "30px",
              height: "140px",
            }}
          >
            <Card
              style={{
                borderTop: "6px solid #1D5A90",
                borderRadius: "10pt",
                // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                width: "110px",
              }}
            >
              <div style={{ height: "5px" }}></div>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <img
                  src={User3}
                  role="presentation"
                  style={{ height: "60px", textAlign: "center" }}
                />
              </div>
              <div style={{ height: "10px" }}></div>
              <div style={{ textAlign: "center" }}>User 3</div>
              <div style={{ height: "5px" }}></div>
            </Card>
          </div>
        </Slider>
      </Card>
    </>
  );
};

export default CarouselSlider;
