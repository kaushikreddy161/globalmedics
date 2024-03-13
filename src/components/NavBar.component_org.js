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
import logo from "../assets/logo.png";
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

import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

// import LogoApp from "../assets/logo.jpg";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const NavBar = () => {
  const [show, setShow] = useState(false);

  // const { user } = useContext(UserContext);
  // const [lgstatus,setLGstatus] = useState("0");

  // useEffect(() => {
  //   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const loadUser = async () => {
  //    if (user) {
  //     let cid = BSON.ObjectID(user.id).toString();
  //     setLGstatus("1");
  //    }
  // };

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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            {/* <MenuIcon /> */}

            <img
              src={require("../assets/icon-hamburger.png")}
              width="20"
              height="auto"
              alt="Global Medics"
            />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          >
            Global Medics
          </Typography>

          <Typography
            variant="h6"
            component={Link}
            to="/userFeedbackForm"
            sx={{
              fontSize: "0.9rem",
              flexGrow: 13,
              textDecoration: "none",
              color: "white",
              textAlign: "right",
              marginTop: "6pt",
            }}
          >
            <img
              src={require("../assets/icon-nav-fback.png")}
              width="30"
              height="auto"
              alt="Global Medics"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Feedback
          </Typography>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        show={show}
        setShow={setShow}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};

const TemporaryDrawer = (props) => {
  const { show, toggleDrawer } = props;
  const { user, logOutUser } = useContext(UserContext);
  const [lgstatus, setLGstatus] = useState("0");
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const loadUser2 = async () => {
    if (user) {
      let cid = BSON.ObjectID(user.id).toString();
      setLGstatus("1");
    }
  };

  const logOut = async () => {
    await logOutUser();
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
      {/* <>
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
      </> */}
    </Box>
  );

  return (
    <div style={{ marginTop: "4rem", marginBottom: "0rem" }}>
      {/* <Drawer open={show} onClose={toggleDrawer}>
        {<DrawerList />}
      </Drawer> */}
      <Drawer open={show} onClose={toggleDrawer}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </Drawer>
    </div>
  );
};

export default NavBar;
