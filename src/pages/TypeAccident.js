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

import Icon_TA_Slipped from "../assets/icon-ta-slipped.png";
import Icon_TA_Assault from "../assets/icon-ta-assault.png";
import Icon_TA_Fell from "../assets/icon-ta-fell.png";
import Icon_TA_Activity from "../assets/icon-ta-activity.png";
import Icon_TA_Fire from "../assets/icon-ta-fire.png";
import Icon_TA_Electricity from "../assets/icon-ta-electricity.png";
import Icon_TA_Drowning from "../assets/icon-ta-drowning.png";
import Icon_TA_Machine from "../assets/icon-ta-machine.png";
import Icon_TA_Animal from "../assets/icon-ta-animal.png";
import Icon_TA_Bicycle from "../assets/icon-ta-bicycle.png";
import Icon_TA_Motorcycle from "../assets/icon-ta-motorcycle.png";
import Icon_TA_Motor from "../assets/icon-ta-motor.png";
import Icon_TA_Firearms from "../assets/icon-ta-firearms.png";
import Icon_TA_Other from "../assets/icon-lp-other.png";

import Icon_TA_SlippedS from "../assets/icon-ta-slipped-sel.png";
import Icon_TA_AssaultS from "../assets/icon-ta-assault-sel.png";
import Icon_TA_FellS from "../assets/icon-ta-fell-sel.png";
import Icon_TA_ActivityS from "../assets/icon-ta-activity-sel.png";
import Icon_TA_FireS from "../assets/icon-ta-fire-sel.png";
import Icon_TA_ElectricityS from "../assets/icon-ta-electricity-sel.png";
import Icon_TA_DrowningS from "../assets/icon-ta-drowning-sel.png";
import Icon_TA_MachineS from "../assets/icon-ta-machine-sel.png";
import Icon_TA_AnimalS from "../assets/icon-ta-animal-sel.png";
import Icon_TA_BicycleS from "../assets/icon-ta-bicycle-sel.png";
import Icon_TA_MotorcycleS from "../assets/icon-ta-motorcycle-sel.png";
import Icon_TA_MotorS from "../assets/icon-ta-motor-sel.png";
import Icon_TA_FirearmsS from "../assets/icon-ta-firearms-sel.png";
import Icon_TA_OtherS from "../assets/icon-lp-other-sel.png";



import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LocationPain = () => {




  const [slipped, setSlipped] = useState(false);
  const [assault, setAssault] = useState(false);
  const [fell, setFell] = useState(false);
  const [activity, setActivity] = useState(false);
  const [fire, setFire] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [drowning, setDrowning] = useState(false);
  const [machine, setMachine] = useState(false);
  const [animal, setAnimal] = useState(false);
  const [bicycle, setBicycle] = useState(false);
  const [motorcycle, setMotorcycle] = useState(false);
  const [motor, setMotor] = useState(false);
  const [firearms, setFirearms] = useState(false);
  const [other, setOther] = useState(false);

  const [slipped_ta, setSlipped_ta] = useState([
    { name: "Slipped / sports injury", icon: Icon_TA_Slipped },
  ]);
  const [assault_ta, setAssault_ta] = useState([
    { name: "Assault / Hit by object", icon: Icon_TA_Assault },
  ]);
  const [fell_ta, setFell_ta] = useState([
    { name: "Fell down stairs", icon: Icon_TA_Fell },
  ]);
  const [activity_ta, setActivity_ta] = useState([
    { name: "Injury during activity", icon: Icon_TA_Activity },
  ]);
  const [fire_ta, setFire_ta] = useState([
    { name: "Fire", icon: Icon_TA_Fire },
  ]);
  const [electricity_ta, setElectricity_ta] = useState([
    { name: "Electricity", icon: Icon_TA_Electricity },
  ]);
  const [drowning_ta, setDrowning_ta] = useState([
    { name: "Drowning", icon: Icon_TA_Drowning },
  ]);
  const [machine_ta, setMachine_ta] = useState([
    { name: "Machine injury", icon: Icon_TA_Machine },
  ]);
  const [animal_ta, setAnimal_ta] = useState([
    { name: "Animal bite / injury", icon: Icon_TA_Animal },
  ]);
  const [bicycle_ta, setBicycle_ta] = useState([
    { name: "Bicycle", icon: Icon_TA_Bicycle },
  ]);
  const [motorcycle_ta, setMotorcycle_ta] = useState([
    { name: "Motorcycle", icon: Icon_TA_Motorcycle },
  ]);
  const [motor_ta, setMotor_ta] = useState([
    { name: "Motor Vehicle", icon: Icon_TA_Motor },
  ]);
  const [firearms_ta, setFirearms_ta] = useState([
    { name: "Firearms", icon: Icon_TA_Firearms },
  ]);
  const [other_ta, setOther_ta] = useState([
    { name: "Any Other", icon: Icon_TA_Other },
  ]);


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


  const onwebCamera = () => {
    const path = `/webCamera`;
    navigate(path);
  };



  const TypeAccidentChangeImage = (val, vstatus) => {

    if (val == "slipped") {
      setSlipped(!vstatus);
      if (!slipped == true) {
        slipped_ta[0].icon = Icon_TA_SlippedS;
      } else {
        slipped_ta[0].icon = Icon_TA_Slipped;
      }
      setSlipped_ta([...slipped_ta]);
    }
    if (val == "assault") {
      setAssault(!vstatus);
      if (!assault == true) {
        assault_ta[0].icon = Icon_TA_AssaultS;
      } else {
        assault_ta[0].icon = Icon_TA_Assault;
      }
      setAssault_ta([...assault_ta]);
    }
    if (val == "fell") {
      setFell(!vstatus);
      if (!fell == true) {
        fell_ta[0].icon = Icon_TA_FellS;
      } else {
        fell_ta[0].icon = Icon_TA_Fell;
      }
      setFell_ta([...fell_ta]);
    }
    if (val == "activity") {
      setActivity(!vstatus);
      if (!activity == true) {
        activity_ta[0].icon = Icon_TA_ActivityS;
      } else {
        activity_ta[0].icon = Icon_TA_Activity;
      }
      setActivity_ta([...activity_ta]);
    }
    if (val == "fire") {
      setFire(!vstatus);
      if (!fire == true) {
        fire_ta[0].icon = Icon_TA_FireS;
      } else {
        fire_ta[0].icon = Icon_TA_Fire;
      }
      setFire_ta([...fire_ta]);
    }
    if (val == "electricity") {
      setElectricity(!vstatus);
      if (!electricity == true) {
        electricity_ta[0].icon = Icon_TA_ElectricityS;
      } else {
        electricity_ta[0].icon = Icon_TA_Electricity;
      }
      setElectricity_ta([...electricity_ta]);
    }
    if (val == "drowning") {
      setDrowning(!vstatus);
      if (!drowning == true) {
        drowning_ta[0].icon = Icon_TA_DrowningS;
      } else {
        drowning_ta[0].icon = Icon_TA_Drowning;
      }
      setDrowning_ta([...drowning_ta]);
    }
    if (val == "machine") {
      setMachine(!vstatus);
      if (!machine == true) {
        machine_ta[0].icon = Icon_TA_MachineS;
      } else {
        machine_ta[0].icon = Icon_TA_Machine;
      }
      setMachine_ta([...machine_ta]);
    }
    if (val == "animal") {
      setAnimal(!vstatus);
      if (!animal == true) {
        animal_ta[0].icon = Icon_TA_AnimalS;
      } else {
        animal_ta[0].icon = Icon_TA_Animal;
      }
      setAnimal_ta([...animal_ta]);
    }
    if (val == "bicycle") {
      setBicycle(!vstatus);
      if (!bicycle == true) {
        bicycle_ta[0].icon = Icon_TA_BicycleS;
      } else {
        bicycle_ta[0].icon = Icon_TA_Bicycle;
      }
      setBicycle_ta([...bicycle_ta]);
    }
    if (val == "motorcycle") {
      setMotorcycle(!vstatus);
      if (!motorcycle == true) {
        motorcycle_ta[0].icon = Icon_TA_MotorcycleS;
      } else {
        motorcycle_ta[0].icon = Icon_TA_Motorcycle;
      }
      setMotorcycle_ta([...motorcycle_ta]);
    }
    if (val == "motor") {
      setMotor(!vstatus);
      if (!motor == true) {
        motor_ta[0].icon = Icon_TA_MotorS;
      } else {
        motor_ta[0].icon = Icon_TA_Motor;
      }
      setMotor_ta([...motor_ta]);
    }
    if (val == "firearms") {
      setFirearms(!vstatus);
      if (!firearms == true) {
        firearms_ta[0].icon = Icon_TA_FirearmsS;
      } else {
        firearms_ta[0].icon = Icon_TA_Firearms;
      }
      setFirearms_ta([...firearms_ta]);
    }
    if (val == "other") {
      setOther(!vstatus);
      if (!other == true) {
        other_ta[0].icon = Icon_TA_OtherS;
      } else {
        other_ta[0].icon = Icon_TA_Other;
      }
      setOther_ta([...other_ta]);
    }
  };

  const onSubmit = () => {
    const path = `/kindEmergency`;
    navigate(path);
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
          title="Type of Accident"
          title2="What Kind of an emergency do you have?"
          title3=""
          limg="rl"
          rimg="rsp"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-dc">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
            

              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                Identify parts of body experiencing pain
                </p>
                <div className="form-container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0",
                      }}
                    >
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          <ToggleButton
                            id="slipped"
                            type="radio"
                            variant="outline-primary"
                            name="slipped"
                            value="slipped"
                            checked={slipped}
                            onClick={(e) => TypeAccidentChangeImage("slipped", slipped)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={slipped_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {slipped_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="assault"
                            type="radio"
                            variant="outline-primary"
                            name="assault"
                            value="assault"
                            checked={assault}
                            onClick={(e) => TypeAccidentChangeImage("assault", assault)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={assault_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {assault_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="fell"
                            type="radio"
                            variant="outline-primary"
                            name="fell"
                            value="fell"
                            checked={fell}
                            onClick={(e) => TypeAccidentChangeImage("fell", fell)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={fell_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {fell_ta[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup style={{ marginTop: "1rem" }}>
                          <ToggleButton
                            id="activity"
                            type="radio"
                            variant="outline-primary"
                            name="activity"
                            value="activity"
                            checked={activity}
                            onClick={(e) => TypeAccidentChangeImage("activity", activity)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={activity_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {activity_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="fire"
                            type="radio"
                            variant="outline-primary"
                            name="fire"
                            value="fire"
                            checked={fire}
                            onClick={(e) => TypeAccidentChangeImage("fire", fire)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={fire_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {fire_ta[0].name}
                            </div>
                          </ToggleButton>
                          
                          <ToggleButton
                            id="electricity"
                            type="radio"
                            variant="outline-primary"
                            name="electricity"
                            value="electricity"
                            checked={electricity}
                            onClick={(e) => TypeAccidentChangeImage("electricity", electricity)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={electricity_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {electricity_ta[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup style={{ marginTop: "1rem" }}>
                          <ToggleButton
                            id="drowning"
                            type="radio"
                            variant="outline-primary"
                            name="drowning"
                            value="drowning"
                            checked={drowning}
                            onClick={(e) => TypeAccidentChangeImage("drowning", drowning)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={drowning_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {drowning_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="machine"
                            type="radio"
                            variant="outline-primary"
                            name="machine"
                            value="machine"
                            checked={machine}
                            onClick={(e) => TypeAccidentChangeImage("machine", machine)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={machine_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {machine_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="animal"
                            type="radio"
                            variant="outline-primary"
                            name="animal"
                            value="animal"
                            checked={animal}
                            onClick={(e) => TypeAccidentChangeImage("animal", animal)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={animal_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {animal_ta[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup style={{ marginTop: "1rem" }}>
                          <ToggleButton
                            id="bicycle"
                            type="radio"
                            variant="outline-primary"
                            name="bicycle"
                            value="bicycle"
                            checked={bicycle}
                            onClick={(e) => TypeAccidentChangeImage("bicycle", bicycle)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={bicycle_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {bicycle_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="motorcycle"
                            type="radio"
                            variant="outline-primary"
                            name="motorcycle"
                            value="motorcycle"
                            checked={motorcycle}
                            onClick={(e) => TypeAccidentChangeImage("motorcycle", motorcycle)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={motorcycle_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {motorcycle_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="motor"
                            type="radio"
                            variant="outline-primary"
                            name="motor"
                            value="motor"
                            checked={motor}
                            onClick={(e) => TypeAccidentChangeImage("motor", motor)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={motor_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {motor_ta[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup style={{ marginTop: "1rem" }}>
                          <ToggleButton
                            id="firearms"
                            type="radio"
                            variant="outline-primary"
                            name="firearms"
                            value="firearms"
                            checked={firearms}
                            onClick={(e) => TypeAccidentChangeImage("firearms", firearms)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={firearms_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {firearms_ta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="other"
                            type="radio"
                            variant="outline-primary"
                            name="other"
                            value="other"
                            checked={other}
                            onClick={(e) => TypeAccidentChangeImage("other", other)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={other_ta[0].icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {other_ta[0].name}
                            </div>
                          </ToggleButton>
                        
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>


            </Card.Body>
            <div
              style={{
                textAlign: "center",
                marginTop: "10pt",
                marginBottom: "10pt",
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
                Confirm
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default LocationPain;
