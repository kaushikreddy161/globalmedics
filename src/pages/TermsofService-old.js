import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Button, Divider, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";
import IconSelectService from "../assets/icon-select-service.png";
import IconSelectVitals from "../assets/icon-select-vitals.png";
import IconVitalFrequency from "../assets/icon-vitals-frequency.png";
import IconSelectSymptoms from "../assets/icon-select-symptoms.png";

import "./Main.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TermsofService() {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/moduleSummaryOne`;
    navigate(path);
  };
  const onBack = () => {
    const path = `/careManagerDetails`;
    navigate(path);
  };

  const onNext = () => {
    const path = `/moduleSummaryThree`;
    navigate(path);
  };

  const datex = new Date();
  return (
    <Container
      style={{
        background: "#EBEBEB",
        maxWidth: "100%",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Terms of Service"
          title2="Please agree to the Terms of Service to use this App"
          title3="No login history found."
          // limg="rl"
          // rimg="vs"
        />
        <div style={{ height: "19rem" }}></div>
        <div styl={{ height: "100%" }}>
          <div className="form-ts">
            <Card
              //   sx={{ maxWidth: 500 }}
              style={{
                borderTop: "6px solid #1D5A90",
                borderRadius: "10px",
                padding: "20pt",
                maxWidth: "500px",
                position: "absolute",
                zIndex: "1",
              }}
              className="left"
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  item
                  spacing={3}
                  // container
                  // spacing={{ xs: 2, md: 3 }}
                  // columns={{ xs: 4, sm: 8, md: 12 }}
                  style={{
                    maxWidth: "500px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <div style={{ height: "15rem" }}></div> */}
                  <div class="container">
                    <div class="row">
                      <div class="col-1">1.</div>
                      <div class="col-11">About the Application</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(a)</div>
                      <div class="col-10">
                        Welcome to GlobalMedics.AI "V R Care" (the
                        'Application'). The Application Remote Patient
                        Management (the 'Services').
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(b)</div>
                      <div class="col-10">
                        The Application is operated by Global Medics Australia
                        Pty. Ltd. PTY. LTD. (ABN 40 652 464 250) . Access to and
                        use of the Application, or any of its associated
                        Products or Services, is provided by Global Medics
                        Australia Pty. Ltd.. Please read these terms and
                        conditions (the 'Terms') carefully. By using, browsing
                        and/or reading the Application, this signifies that you
                        have read, understood and agree to be bound by the
                        Terms. If you do not agree with the Terms, you must
                        cease usage of the Application, or any of its Services,
                        immediately.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(c)</div>
                      <div class="col-10">
                        Global Medics Australia Pty. Ltd. reserves the right to
                        review and change any of the Terms by updating this page
                        at its sole discretion. When Global Medics Australia
                        Pty. Ltd. updates the Terms, it will use reasonable
                        endeavours to provide you with notice of updates to the
                        Terms. Any changes to the Terms take immediate effect
                        from the date of their publication. Before you continue,
                        we recommend you keep a copy of the Terms for your
                        records.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1">2</div>
                      <div class="col-11">Acceptance of the Terms</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-11">
                        You accept the Terms by using or browsing the
                        Application. You may also accept the Terms by clicking
                        to accept or agree to the Terms where this option is
                        made available to you by Global Medics Australia Pty.
                        Ltd. in the user interface.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1">3.</div>
                      <div class="col-11">Subscription to use the Services</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(a)</div>
                      <div class="col-10">
                        In order to access the Services, you must first purchase
                        a subscription through the Application (the
                        'Subscription') and pay the applicable fee for the
                        selected Subscription (the 'Subscription Fee').
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(b)</div>
                      <div class="col-10">
                        In purchasing the Subscription, you acknowledge and
                        agree that it is your responsibility to ensure that the
                        Subscription you elect to purchase is suitable for your
                        use.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(c)</div>
                      <div class="col-10">
                        Once you have purchased the Subscription, you will then
                        be required to register for an account through the
                        Application before you can access the Services (the
                        'Account').
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(d)</div>
                      <div class="col-10">
                        As part of the registration process, or as part of your
                        continued use of the Services, you may be required to
                        provide personal information about yourself (such as
                        identification or contact details), including:
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(i)</div>
                      <div class="col-9">Email address</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(ii)</div>
                      <div class="col-9">Preferred username</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(iii)</div>
                      <div class="col-9">Mailing address</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(iv)</div>
                      <div class="col-9">Telephone number</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(v)</div>
                      <div class="col-9">Password</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(vi)</div>
                      <div class="col-9">
                        Connections and their health information
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(e)</div>
                      <div class="col-10">
                        You warrant that any information you give to Global
                        Medics Australia Pty. Ltd. in the course of completing
                        the registration process will always be accurate,
                        correct and up to date.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(f)</div>
                      <div class="col-10">
                        Once you have completed the registration process, you
                        will be a registered member of the Application
                        ('Member') and agree to be bound by the Terms. As a
                        Member you will be granted immediate access to the
                        Services from the time you have completed the
                        registration process until the subscription period
                        expires (the 'Subscription Period').
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(g)</div>
                      <div class="col-10">
                        You may not use the Services and may not accept the
                        Terms if:
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(i)</div>
                      <div class="col-9">
                        you are not of legal age to form a binding contract with
                        Global Medics Australia Pty. Ltd.; or
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(ii)</div>
                      <div class="col-9">
                        you are a person barred from receiving the Services
                        under the laws of Australia or other countries including
                        the country in which you are resident or from which you
                        use the Services.
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1">4</div>
                      <div class="col-11">Your obligations as a Member</div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1">(a)</div>
                      <div class="col-10">
                        As a Member, you agree to comply with the following:
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-1"></div>
                      <div class="col-1"></div>
                      <div class="col-1">(a)</div>
                      <div class="col-9">
                        you will use the Services only for purposes that are
                        permitted by:
                      </div>
                    </div>
                  </div>
                </Grid>
              </Box>
            </Card>
          </div>
        </div>
      </Grid>
      <div style={{ height: "100px" }}></div>
    </Container>
  );
}
export default TermsofService;
