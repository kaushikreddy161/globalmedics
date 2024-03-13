import { useContext, useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  // Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Add, Logout } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import logo from "../assets/logo-blue.png";
import { BSON } from "realm-web";

import IconWel from "../assets/icon-nav-wel.png";
import IconAcn from "../assets/icon-nav-acn.png";
import IconAdLove from "../assets/icon-nav-adlove.png";
import IconCheckIn from "../assets/icon-nav-checkin.png";
import IconCRing from "../assets/icon-nav-cring.png";
import IconBPrs from "../assets/icon-nav-bprs.png";
import IconHVut from "../assets/icon-nav-hvault.png";
import IconPPDel from "../assets/icon-nav-ppdel.png";
import IconPRate from "../assets/icon-nav-prate.png";
import IconRole from "../assets/icon-nav-role.png";
import IconRight from "../assets/icon-nav-right.png";
import IconTemp from "../assets/icon-nav-tem.png";
import IconRRate from "../assets/icon-nav-rrate.png";
import IconBSug from "../assets/icon-nav-bsug.png";
import IconOSat from "../assets/icon-nav-osat.png";
import IconFeedback from "../assets/icon-nav-fback.png";
import IconRNose from "../assets/icon-nav-rnose.png";
import IconCough from "../assets/icon-nav-cough.png";
import IconUrine from "../assets/icon-nav-urine.png";
import IconEmergency from "../assets/icon-nav-emr.png";
import IconSignOut from "../assets/icon-signout.png";
import IconHamburgerClose from "../assets/icon-hamburger-close.png";

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, b2cPolicies } from '../authConfig';

import NavbarRight from "../components/NavbarRight";


const Nav = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  color: #000000;
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding-top:1rem;
  overflow-y:scroll;
  background: linear-gradient(#0AF796, #1E4890);
  // background: (360deg, #1E4890 88.6667%, #0AF796 43.3333%);
  // background: linear-gradient(360deg, #1E4890 84.6667%, #0AF796);
  

`;

const NavBar = () => {


  
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const { instance, inProgress } = useMsal();
  let activeAccount;

  if (instance) {
      activeAccount = instance.getActiveAccount();
  }

  const handleLoginRedirect = () => {
    //loginRequest.extraQueryParameters = {"campaignId": 'germany-promotion'};
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
};

const handleLogoutRedirect = () => {
  instance.logoutRedirect();
};

  const showSidebar = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebar(!sidebar);
  };
  // const { user } = useContext(UserContext);
  // const [lgstatus,setLGstatus] = useState("0");

  const toggleDrawer = (event) => {
    // loadUser();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShow((show) => !show);
  };
  return (
    <>
      <AppBar
        // position="static"
        style={{ backgroundImage: "linear-gradient(#09FF96,#1F448F)" }}
      >
        <Toolbar>
          <IconContext.Provider value={{ color: "red" }}>
            <Nav>
            <AuthenticatedTemplate>
              <NavIcon to="#">
                <img
                  src={require("../assets/icon-hamburger-new.png")}
                  width="20"
                  height="auto"
                  alt="Global Medics"
                  onClick={showSidebar}
                />
              </NavIcon>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
              <NavIcon to="#">
                <img
                  src={require("../assets/icon-hamburger-new.png")}
                  width="20"
                  height="auto"
                  alt="Global Medics"
                  //onClick={}
                />
              </NavIcon>
              </UnauthenticatedTemplate>
            </Nav>

            <SidebarNav sidebar={sidebar}>
              <SidebarWrap>
                <NavIcon to="#">
                  <div style={{ textAlign: "center", margin: "45pt" }}>
                    <img
                      src={logo}
                      alt="Logo"
                      width="60"
                      height="auto"
                      style={{
                        paddingTop: "25px",
                        paddingBottom: "25px",
                      }}
                    />
                  </div>
                  <div className="LeftHamburgerClose">
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                  </div>
                  </NavIcon>
                <div style={{marginTop:"2rem",marginBottom:"0rem"}}>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
                </div>
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>

          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >            
            <img
              src={require("../assets/icon-hamburger.png")}
              width="20"
              height="auto"
              alt="Global Medics"
            />
          </IconButton> */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white", lineHeight:"1.2rem" }}
          >
            GlobalMedics.Ai<br/><span style={{fontSize:"0.9rem",fontWeight:"normal"}}>Care Ring App</span>
          </Typography>
          
          <div>
            <NavbarRight />
          </div>



          
          {/* <AuthenticatedTemplate>
          <Typography
            variant="h6"
            component={Link}
         //   to="/userFeedbackForm"
            onClick={handleLogoutRedirect}
            sx={{
              fontSize: "0.9rem",
            //  flexGrow: 13,
              textDecoration: "none",
              color: "white",
              textAlign: "right",
              marginTop: "0pt",
              width: "45px"
            }}
          >
             <img src={IconSignOut} width="20"/>
            </Typography>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
            <Typography
            variant="h6"
            component={Link}
         //   to="/userFeedbackForm"
            onClick={handleLoginRedirect}
            sx={{
              fontSize: "0.9rem",
            //  flexGrow: 13,
              textDecoration: "none",
              color: "white",
              textAlign: "right",
              marginTop: "6pt",
              width: "70px"
            }}
          >
             Sign In
            </Typography>
            </UnauthenticatedTemplate> */}
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        show={show}
        setShow={setShow}
        toggleDrawer={showSidebar}
      />
    </>
  );
};

const TemporaryDrawer = (props) => {
  const { show, toggleDrawer } = props;
 // const { user, logOutUser } = useContext(UserContext);
  const [lgstatus, setLGstatus] = useState("0");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  // const loadUser2 = async () => {
  //   if (user) {
  //     let cid = BSON.ObjectID(user.id).toString();
  //     setLGstatus("1");
  //   }
  // };

  const logOut = async () => {
  //  await logOutUser();
    window.location.reload(true);
    return;
  };

  const navLinks = [
    {
      text: "Welcome",
      Icon: IconWel,
      link: "/moduleSummary",
      right: IconRight,
    },
    {
      text: "Account",
      Icon: IconAcn,
      link: "/careManagerDetails",
      right: IconRight,
    },
    {
      text: "Role",
      Icon: IconRole,
      link: "/role",
      right: IconRight,
    },
    {
      text: "Add Loved Ones",
      Icon: IconAdLove,
      link: "/addLovedOnes",
      right: IconRight,
    },
    {
      text: "Patient Details",
      Icon: IconPPDel,
      link: "/patientpersonalDetailsForm",
      right: IconRight,
    },
    {
      text: "Setup Care Rings",
      Icon: IconCRing,
      //    link: "/setupCareRing",
      link: "/careRingsConsent",
      right: IconRight,
    },

    {
      text: "Health Vault",
      Icon: IconHVut,
      link: "/healthReports",
      right: IconRight,
    },
    {
      text: "Vitals",
      Icon: IconHVut,
      link: "/vitals",
      right: IconRight,
    },
    {
      text: "Blood Pressure",
      Icon: IconBPrs,
      link: "/bloodPressure",
      right: IconRight,
    },
    {
      text: "Pulse Rate",
      Icon: IconPRate,
      link: "/pulseRate",
      right: IconRight,
    },
    {
      text: "Oxygen Saturation",
      Icon: IconOSat,
      link: "/oxygenSaturation",
      right: IconRight,
    },
    {
      text: "Blood Sugar",
      Icon: IconBSug,
      link: "/bloodSugar",
      right: IconRight,
    },
    {
      text: "Temperature",
      Icon: IconTemp,
      link: "/temperature",
      right: IconRight,
    },
    {
      text: "Breathing Rate",
      Icon: IconRRate,
      link: "/breathingRate",
      right: IconRight,
    },
    {
      text: "Nose",
      Icon: IconRNose,
      link: "/runnyNose",
    },
    {
      text: "Cough",
      Icon: IconCough,
      link: "/cough",
    },
    {
      text: "Urine",
      Icon: IconUrine,
      link: "/urine",
    },
    {
      text: "Check-In",
      Icon: IconCheckIn,
      link: "/dailyCheckIn",
      right: IconRight,
    },
    {
      text: "Vitals Summary",
      // Icon: SummarizeIcon,
      Icon: IconAcn,
      link: "/vitalsSummary",
    },
    {
      text: "Feedback",
      Icon: IconPPDel,
      link: "/userFeedbackForm",
      right: IconRight,
    },
    // {
    //   text: "Care Rings",
    //   Icon: IconCRing,
    //   link: "/careRingsConsent",
    //   right: IconRight,
    // },
    // {
    //   text: "Test",
    //   Icon: IconPPDel,
    //   link: "/dailyCheckInSummary",
    //   right: IconRight,
    // },
    // {
    //   text: "Report Graph",
    // //  Icon: VolunteerActivismIcon,
    //   Icon: IconAcn,
    //   link: "/vitalsGraph",
    // },
    // {
    //   text: "Feedback",
    //   Icon: VolunteerActivismIcon,
    //   link: "/userFeedbackForm",
    // },
    // {
    //   text: "Report Graph",
    //   Icon: VolunteerActivismIcon,
    //   link: "/reportGraph",
    // },
    {
      text: "Add Device",
      Icon: IconAcn,
      link: "/comingSoon",
    },
    // {
    //   text: "Test Menu",
    //   Icon: IconAcn,
    //   link: "/testMenu",
    // },
    {
      text: "Logout",
      // Icon: Logout,
      action: logOut,
      right: IconRight,
    },
  ];

  const navLinksNoLoG = [
    {
      text: "Welcome",
      Icon: IconWel,
      link: "/moduleSummary",
      right: IconRight,
    },
    {
      text: "Account",
      Icon: IconAcn,
      link: "/careManagerDetails",
      right: IconRight,
    },
    {
      text: "Role",
      Icon: IconRole,
      link: "/role",
      right: IconRight,
    },
    {
      text: "Add Loved Ones",
      Icon: IconAdLove,
      link: "/addLovedOnes",
      right: IconRight,
    },
    {
      text: "Patient Details",
      Icon: IconPPDel,
      link: "/patientpersonalDetailsForm",
      right: IconRight,
    },
    {
      text: "Setup Care Rings",
      Icon: IconCRing,
      // link: "/setupCareRing",
      link: "/careRingsConsent",
      right: IconRight,
    },

    {
      text: "Health Vault",
      Icon: IconHVut,
      link: "/healthReports",
      right: IconRight,
    },
    {
      text: "Vitals",
      Icon: IconHVut,
      link: "/vitals",
      right: IconRight,
      // submenu: [
      //   {
      //     title: 'Blood Pressure',
      //     url: '/bloodPressure',
      //   },
      //   {
      //     title: 'Pulse Rate',
      //     url: '/pulseRate',
      //   },
      //   {
      //     title: 'Blood Sugar',
      //     url: '/bloodSugar',
      //   },
      // ],
    },
    {
      text: "Symptoms",
      Icon: IconHVut,
      right: IconRight,
      subNav: [
        {
          text: "Blood Pressure",
          Icon: IconHVut,
          link: "/bloodPressure",
        },
        {
          text: "Pulse Rate",
          Icon: IconHVut,
          link: "/pulseRate",
        },
        {
          text: "Blood Sugar",
          Icon: IconHVut,
          link: "/bloodSugar",
        },
      ],
    },
    {
      text: "Blood Pressure",
      Icon: IconBPrs,
      link: "/bloodPressure",
      right: IconRight,
    },
    {
      text: "Pulse Rate",
      Icon: IconPRate,
      link: "/pulseRate",
      right: IconRight,
    },
    {
      text: "Oxygen Saturation",
      Icon: IconOSat,
      link: "/oxygenSaturation",
      right: IconRight,
    },
    {
      text: "Blood Sugar",
      Icon: IconBSug,
      link: "/bloodSugar",
      right: IconRight,
    },
    {
      text: "Temperature",
      Icon: IconTemp,
      link: "/temperature",
      right: IconRight,
    },
    {
      text: "Breathing Rate",
      Icon: IconRRate,
      link: "/breathingRate",
      right: IconRight,
    },
    {
      text: "Symptoms",
      Icon: IconHVut,
      right: IconRight,
      subNav: [
        {
          text: "Blood Pressure",
          Icon: IconHVut,
          link: "/bloodPressure",
        },
        {
          text: "Pulse Rate",
          Icon: IconHVut,
          link: "/pulseRate",
        },
        {
          text: "Blood Sugar",
          Icon: IconHVut,
          link: "/bloodSugar",
        },
      ],
    },
    {
      text: "Nose",
      Icon: IconRNose,
      link: "/runnyNose",
    },
    {
      text: "Cough",
      Icon: IconCough,
      link: "/cough",
    },
    {
      text: "Urine",
      Icon: IconUrine,
      link: "/urine",
    },
    {
      text: "Check-In",
      Icon: IconCheckIn,
      link: "/dailyCheckIn",
      right: IconRight,
    },
    {
      text: "Vitals Summary",
      // Icon: SummarizeIcon,
      Icon: IconAcn,
      link: "/vitalsSummary",
    },
    // {
    //   text: "Add Care Ring Members",
    //   // Icon: SummarizeIcon,
    //   Icon: IconAcn,
    //   link: "/addCareRingMembers",
    // },
    {
      text: "Feedback",
      Icon: IconPPDel,
      link: "/userFeedbackForm",
      right: IconRight,
    },
    // {
    //   text: "Care Rings",
    //   Icon: IconCRing,
    //   link: "/careRingsConsent",
    //   right: IconRight,
    // },
    // {
    //   text: "Feedback",
    //   Icon: VolunteerActivismIcon,
    //   link: "/userFeedbackForm",
    // },
    // {
    //   text: "Report Graph",
    // //  Icon: VolunteerActivismIcon,
    //   Icon: IconAcn,
    //   link: "/vitalsGraph",
    // },
    // {
    //   text: "Test Menu",
    //   Icon: IconAcn,
    //   link: "/testMenu",
    // },
    {
      text: "Add Device",
      Icon: IconAcn,
      link: "/comingSoon",
    },
    {
      text: "Logout",
      // Icon: Logout,
      action: logOut,
      right: IconRight,
    },
  ];

  const DrawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer,loadUser2}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div style={{ textAlign: "center", marginTop: "15pt" }}>
        <img src={logo} alt="Logo" width="60" height="auto" />
      </div>
      <>
        {lgstatus === "1" ? (
          <List>
            {navLinks.map(({ text, Icon, link, action }) => {
              return link ? (
                <Link
                  to={link}
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={text}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <img src={Icon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      style={{ marginLeft: "-1rem" }}
                    />
                    <ListItemIcon>
                      <img
                        src={IconRight}
                        style={{ textAlign: "right", paddingLeft: "2rem" }}
                      />
                    </ListItemIcon>
                  </ListItem>
                </Link>
              ) : (
                <ListItem button onClick={action} key={text}>
                  <ListItemIcon>
                    <img src={Icon} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    style={{ marginLeft: "-1rem" }}
                  />
                  <ListItemIcon>
                    <img
                      src={IconRight}
                      style={{ textAlign: "right", paddingLeft: "2rem" }}
                    />
                  </ListItemIcon>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <List>
            {navLinksNoLoG.map(({ text, Icon, link, action }) => {
              return link ? (
                <Link
                  to={link}
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={text}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <img src={Icon} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      style={{ marginLeft: "-1rem" }}
                    />
                    <ListItemIcon>
                      <img
                        src={IconRight}
                        style={{ textAlign: "right", paddingLeft: "2rem" }}
                      />
                    </ListItemIcon>
                  </ListItem>
                </Link>
              ) : (
                <ListItem button onClick={action} key={text}>
                  <ListItemIcon>
                    <img src={Icon} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    style={{ marginLeft: "-1rem" }}
                  />
                  <ListItemIcon>
                    <img
                      src={IconRight}
                      style={{ textAlign: "right", paddingLeft: "2rem" }}
                    />
                  </ListItemIcon>
                </ListItem>
              );
            })}
          </List>
        )}
      </>
    </Box>
  );

  return (
    <div style={{ marginTop: "4rem", marginBottom: "0rem" }}>
      <Drawer open={show} onClose={toggleDrawer}>
        {<DrawerList />}
      </Drawer>
    </div>
  );
};

export default NavBar;