import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FixedHeader from "../components/FixedHeader";
import IconCamera from "../assets/icon-camera.png";
import { Button, Divider } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate, useLocation } from "react-router-dom";
import VitalsBloodPressure from "../assets/vitals-blood-pressure.png";
import VitalsPulseRate from "../assets/vitals-pulse-rate.png";


const FaqInfo = [
  {
    des: "description",
  },
]

// const VitalsExp = [
//   {
//       exp: "While the cause of high blood pressure in most people remains unclear, inactivity, poor diet, obesity, older age, and genetics -- can all contribute to the development of hypertension.",
//       type:"BP",
//       faq: [
//           {
//               Q:"What Causes High Blood Pressure?",
//               A:"While the cause of high blood pressure in most people remains unclear, inactivity, poor diet, obesity, older age, and genetics -- can all contribute to the development of hypertension.",
//           },
//           {
//               Q:"What Are Systolic and Diastolic Blood Pressure?",
//               A: "The blood pressure reading is measured in millimeters of mercury (mmHg) and is written as systolic pressure, the force of the blood against the artery walls as your heart beats, over diastolic pressure, the blood pressure between heartbeats. For example, a blood pressure reading is written as 120/80 mmHg, or 120 over 80. The systolic pressure is 120 and the diastolic pressure is 80.",
//           }
//       ],
//       id: 1,
//   },
//   {
//       exp: "Your pulse rate, also known as your heart rate, is the number of times your heart beats per minute. A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute.",
//       type:"PR",
//       faq: [
//           {
//               Q:"What is a normal pulse rate?",
//               A:"Your pulse rate, also known as your heart rate, is the number of times your heart beats per minute. A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute.",
//           },
//           {
//               Q:"What is a fast pulse rate?",
//               A: "If your heart rate is over 100 beats per minute when you are at rest, this is considered fast. A rapid heart rate, also known as tachycardia, can be related to many different health conditions. It’s normal for your heart rate to increase when you’re exercising or if your body is fighting off an infection.",
//           }
//       ],
//       id: 2,
//   },
//   {
//       exp: "The probe can be positioned on the fingers, toes, hand, foot, or wrist of the neonate. Other sites will depend on the infant’s size. Newer probes allow for forehead placement. The placement of ear lobe probes is particularly useful in hypo perfusion states.",
//       type:"OS",
//       faq: [
//           {
//               Q:"At what site should the probe be placed for pulse oximetry?",
//               A:"The probe can be positioned on the fingers, toes, hand, foot, or wrist of the neonate. Other sites will depend on the infant’s size. Newer probes allow for forehead placement. The placement of ear lobe probes is particularly useful in hypo perfusion states.",
//           },
//           {
//               Q:"Can ambient light interfere with pulse oximetry readings?",
//               A: "Yes, ambient light containing the red spectrum may interfere with accurate readings from the oxygen saturation monitor. Light from heat lamps and phototherapy lights has been reported to skew the readings. The high intensity of light emitted from these sources masks the small changes in light transmission from the probe. The remedy is to shield the probe from the ambient light by black paper (e.g.carbon paper) or black polythene or aluminum foil.",
//           }
//       ],
//       id: 3,
//   },
//   {
//       exp: "Blood sugar, or glucose, is the main sugar found in your blood. It comes from the food you eat and is your body’s main source of energy. Your blood carries glucose to all of your body’s cells to use for energy. Diabetes is a disease in which your blood sugar levels are too high. Over time, having too much glucose in your blood can cause serious problems.",
//       type:"BS",
//       faq: [
//           {
//               Q:"What is blood sugar?",
//               A:"Blood sugar, or glucose, is the main sugar found in your blood. It comes from the food you eat and is your body’s main source of energy. Your blood carries glucose to all of your body’s cells to use for energy. Diabetes is a disease in which your blood sugar levels are too high. Over time, having too much glucose in your blood can cause serious problems.",
//           },
//           {
//               Q:"What is the normal range for blood sugar?",
//               A: "Normal levels for A1C tests are below 5.7 percent, and normal levels for a fasting blood glucose test are 99 mg/dL or below.",
//           }
//       ],
//       id: 4,
//   },
//   {
//       exp: "Food should be cooked thoroughly to kill food poisoning bacteria. The core temperature should reach 75°C instantaneously or equivalent, e.g. 70°C for two minutes. The core is taken as the centre or thickest part of the food",
//       type:"TP",
//       faq: [
//           {
//               Q:"What temperature should food I cook food to?",
//               A:"Food should be cooked thoroughly to kill food poisoning bacteria. The core temperature should reach 75°C instantaneously or equivalent, e.g. 70°C for two minutes. The core is taken as the centre or thickest part of the food",
//           },
//           {
//               Q:"Are there any exceptions to cooking food to 75°C or equivalent?",
//               A: "Yes. Foods that may be cooked to order (customer’s preference) are fish, shellfish, whole joints, birds (game and duck), cuts/portions of lamb, beef or venison. When cooking food to order the food business operator shall comply with the following criteria:",
//           }
//       ],
//       id: 5,
//   },
//   {
//       exp: "Breathing Rate",
//       type:"BR",
//       faq: [
//           {
//               Q:"What is the Normal Respiratory Rate of a healthy adult person?",
//               A:"Normal respiratory rates for a healthy, adult person at rest range from 12 to 16 breaths per minute.",
//           },
//           {
//               Q:"Is 08 breaths per minute Normal?",
//               A: "No. Patient needs to be evaluated medically",
//           }
//       ],
//       id: 6,
//   },

// ];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Information(props) {
  const navigate = useNavigate();

  const location = useLocation();

  const onSubmit = async (event) => {
    event.preventDefault();
    navigate(-1);
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

        {location.state.ds === "role-des" ? (
          <>
            <FixedHeader
              title="Information"
              title2="Choose the role that best describes what you want to do."
              title3="No login history found."
              limg="if-h"
              rimg="adr"
            />
          </>
        ) : (
          ""
        )}
        {location.state.ds === "dashboard-des" ? (
          <>
            <FixedHeader
              title="Information"
              title2="This dashboard is a concise health overview of each person you care for."
              title3="No login history found."
              limg="if-h"
              rimg="adr"
            />
          </>
        ) : (
          ""
        )}

        <div className="info-card">
          <Card
            style={{
              // borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              // zIndex: "1",
              backgroundColor: "#F2F8F1",
            }}
          // className="left"
          >

            {location.state.id === "BP" ? (
              <>
                <p className="info_subhead">Blood Pressure</p>
                <p className="info_para">
                  A blood pressure measurement is a test that measures the force (pressure) in your arteries as your heart pumps. Blood pressure is measured as two numbers: Systolic blood pressure (the first and higher number) measures pressure inside your arteries when the heart beats.
                </p>
              </>
            ) : (
              ""
            )}
            {location.state.id === "PR" ? (
              <>
                <p className="info_subhead">Pulse Rate</p>
                <p className="info_para">
                  The pulse rate is a measurement of the heart rate, or the number of times the heart beats per minute. As the heart pushes blood through the arteries, the arteries expand and contract with the flow of the blood. Taking a pulse not only measures the heart rate, but also can indicate the following: Heart rhythm.
                </p>
              </>
            ) : (
              ""
            )}
            {location.state.id === "OS" ? (
              <>
                <p className="info_subhead">Oxygen Saturation</p>
                <p className="info_para">
                  Blood oxygen saturation is a measurement of the amount of oxygen attached to the haemoglobin (Hb) cells in blood. Pulse oximetry is a simple non-invasive method of monitoring the percentage of Hb in blood, which is saturated with oxygen.

                </p>
              </>
            ) : (
              ""
            )}
            {location.state.id === "BS" ? (
              <>
                <p className="info_subhead">Blood Sugar</p>
                <p className="info_para">
                  Blood sugar, or glucose, is the main sugar found in your blood. It comes from the food you eat, and is your body's main source of energy. Your blood carries glucose to all of your body's cells to use for energy. Diabetes is a disease in which your blood sugar levels are too high.
                </p>
              </>
            ) : (
              ""
            )}
            {location.state.id === "TM" ? (
              <>
                <p className="info_subhead">Temperature</p>
                <p className="info_para">
                  For adults, a fever is when your temperature is higher than 100.4°F. For kids, a fever is when their temperature is higher than 100.4°F (measured rectally); 99.5°F (measured orally); or 99°F (measured under the arm).
                </p>
              </>
            ) : (
              ""
            )}
            {location.state.id === "BR" ? (
              <>
                <p className="info_subhead">Breathing Rate</p>
                <p className="info_para">
                  The respiratory rate, i.e., the number of breaths per minute, is highly regulated to enable cells to produce the optimum amount of energy at any given occasion. A complex nervous system of nerve tissues regulates the rate of oxygen inflow and carbon dioxide outflow.
                </p>
              </>
            ) : (
              ""
            )}
            {location.state.id === "DASHBOARD" ? (
              <>
                <p className="info_subhead">Dashboard</p>
                <p className="info_para">
                  This screen shows a quick snapshot of some key parameters of the health of each person you care for, as per the feedback from the person.
                </p>
              </>
            ) : (
              ""
            )}
            {location.state.id === "ROLE" ? (
              <>
                <p className="info_subhead">Role</p>
                <p className="info_para">
                  Select the role that matches what you need to do. Each role gives you access to the information you need to get those tasks done in the suggested order.
                </p>
              </>
            ) : (
              ""
            )}
          </Card>
        </div>

        <div className="info-card1">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              // zIndex: "1",
              backgroundColor: "#F2F8F1",

            }}
          // className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                // spacing={3}
                style={{
                  maxWidth: "500px",
                }}
              >
                <div class="container">
                  <div class="row">
                    <div class="col-12 text-green_left">Video Explanation</div>
                  </div>
                </div>
                <div className="video_card1">
                  <div className="video_card_b">
                    {location.state.v === "BPV" ? (
                      <>
                        <iframe src='https://www.youtube.com/embed/gUHALsLeeoM'
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'

                        />
                      </>
                    ) : (
                      ""
                    )}
                    {location.state.v === "PRV" ? (
                      <>
                        <iframe src='https://www.youtube.com/embed/em9poqLcJRw'
                          // width="400"
                          // height="220"
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {location.state.v === "OSV" ? (
                      <>
                        <iframe src='https://www.youtube.com/embed/Pyjbd_-kayA'
                          // width="400"
                          // height="220"
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {location.state.v === "BSV" ? (
                      <>
                        <iframe src='https://www.youtube.com/embed/nxIJeHWlhF4'
                          // width="400"
                          // height="220"
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {location.state.v === "TMV" ? (
                      <>
                        <iframe src='https://www.youtube.com/embed/UxE6J9YBxqs'
                          // width="400"
                          // height="220"
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {location.state.v === "BRV" ? (
                      <>
                        <iframe src='https://www.youtube.com/embed/zoO-SJEOc14'
                          // width="400"
                          // height="220"
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {location.state.v === "DASHBOARDV" ? (
                      <>
                        <iframe
                          //  src='https://www.youtube.com/embed/zoO-SJEOc14'
                          // width="400"
                          // height="220"
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </>
                    ) : (
                      ""
                    )}
                    {location.state.v === "ROLEV" ? (
                      <>
                        <iframe
                          //  src='https://www.youtube.com/embed/zoO-SJEOc14'
                          // width="400"
                          // height="220"
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </>
                    ) : (
                      ""
                    )}

                  </div>
                </div>
              </Grid>
            </Box>
          </Card>
        </div>
        <div className="info-card2">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
              backgroundColor: "#F2F8F1",

            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                }}
              >
                <p class="info_subhead_top">Frequently Asked Questions</p>
                <div className="div_faq">
                  {location.state.qa === "BPQA" ? (
                    <>
                      <p className="faq_para_q">Question:  What Causes High Blood Pressure?</p>
                      <p className="faq_para">Answer: While the cause of high blood pressure in most people remains unclear, inactivity, poor diet, obesity, older age, and genetics -- can all contribute to the development of hypertension.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question:  What Are Systolic and Diastolic Blood Pressure?</p>
                      <p className="faq_para">Answer: The blood pressure reading is measured in millimeters of mercury (mmHg) and is written as systolic pressure, the force of the blood against the artery walls as your heart beats, over diastolic pressure, the blood pressure between heartbeats. For example, a blood pressure reading is written as 120/80 mmHg, or 120 over 80. The systolic pressure is 120 and the diastolic pressure is 80.</p>

                    </>
                  ) : (
                    ""
                  )}
                  {location.state.qa === "PRQA" ? (
                    <>
                      <p className="faq_para_q">Question:  What is a normal pulse rate?</p>
                      <p className="faq_para">Answer: Your pulse rate, also known as your heart rate, is the number of times your heart beats per minute. A normal resting heart rate should be between 60 to 100 beats per minute, but it can vary from minute to minute.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question:  What is a fast pulse rate?</p>
                      <p className="faq_para">Answer: If your heart rate is over 100 beats per minute when you are at rest, this is considered fast. A rapid heart rate, also known as tachycardia, can be related to many different health conditions. It’s normal for your heart rate to increase when you’re exercising or if your body is fighting off an infection.</p>
                    </>
                  ) : (
                    ""
                  )}
                  {location.state.qa === "OSQA" ? (
                    <>
                      <p className="faq_para_q">Question:  At what site should the probe be placed for pulse oximetry?</p>
                      <p className="faq_para">Answer: The probe can be positioned on the fingers, toes, hand, foot, or wrist of the neonate. Other sites will depend on the infant’s size. Newer probes allow for forehead placement. The placement of ear lobe probes is particularly useful in hypo perfusion states.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question:  Can ambient light interfere with pulse oximetry readings?</p>
                      <p className="faq_para">Answer: Yes, ambient light containing the red spectrum may interfere with accurate readings from the oxygen saturation monitor. Light from heat lamps and phototherapy lights has been reported to skew the readings. The high intensity of light emitted from these sources masks the small changes in light transmission from the probe. The remedy is to shield the probe from the ambient light by black paper (e.g.carbon paper) or black polythene or aluminum foil.</p>
                    </>
                  ) : (
                    ""
                  )}
                  {location.state.qa === "BSQA" ? (
                    <>
                      <p className="faq_para_q">Question:  What is blood sugar?</p>
                      <p className="faq_para">Answer: Blood sugar, or glucose, is the main sugar found in your blood. It comes from the food you eat and is your body’s main source of energy. Your blood carries glucose to all of your body’s cells to use for energy. Diabetes is a disease in which your blood sugar levels are too high. Over time, having too much glucose in your blood can cause serious problems.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question:  What is the normal range for blood sugar?</p>
                      <p className="faq_para">Answer: Normal levels for A1C tests are below 5.7 percent, and normal levels for a fasting blood glucose test are 99 mg/dL or below.</p>
                    </>
                  ) : (
                    ""
                  )}
                  {location.state.qa === "TMQA" ? (
                    <>
                      <p className="faq_para_q">Question:  What temperature should food I cook food to?</p>
                      <p className="faq_para">Answer: Food should be cooked thoroughly to kill food poisoning bacteria. The core temperature should reach 75°C instantaneously or equivalent, e.g. 70°C for two minutes. The core is taken as the centre or thickest part of the food</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question:  Are there any exceptions to cooking food to 75°C or equivalent?</p>
                      <p className="faq_para">Answer: Yes. Foods that may be cooked to order (customer’s preference) are fish, shellfish, whole joints, birds (game and duck), cuts/portions of lamb, beef or venison. When cooking food to order the food business operator shall comply with the following criteria:</p>
                    </>
                  ) : (
                    ""
                  )}
                  {location.state.qa === "BRQA" ? (
                    <>
                      <p className="faq_para_q">Question:  What is the Normal Respiratory Rate of a healthy adult person?</p>
                      <p className="faq_para">Answer: Normal respiratory rates for a healthy, adult person at rest range from 12 to 16 breaths per minute.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question:  Is 08 breaths per minute Normal?</p>
                      <p className="faq_para">Answer: No. Patient needs to be evaluated medically</p>
                    </>
                  ) : (
                    ""
                  )}
                  {location.state.qa === "DASHBOARDQA" ? (
                    <>
                      <p className="faq_para_q">Question: How can I get a quick update on the health of each person I care about?</p>
                      <p className="faq_para">Answer: Swipe across the “Select your loved ones” options to scroll through all the people/patients you have agreed to monitor. The selected person’s icon will appear in the top green box to confirm the person you wish to check on. Then, scroll down the screen to check on the health status.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question: What do the Red-Amber-Green colours and icons imply?</p>
                      <p className="faq_para">Answer: Red (alarm icon) means worse than before, Amber (dash symbol) means the same as before and Green (Tick mark) means better than before.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question: How is each status measured?</p>
                      <p className="faq_para">Answer: The information displayed on this dashboard is gathered by regularly asking patients or their caregivers questions regarding the patient’s health. These inputs are not automatically recorded through a device.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question: How can we get more detailed insights about the person’s health?</p>
                      <p className="faq_para">Answer: Click on the “Check Details” button at the bottom of the screen to be taken to the next screen with more details regarding multiple vitals.</p>
                    </>
                  ) : (
                    ""
                  )}
                  {location.state.qa === "ROLEQA" ? (
                    <>
                      <p className="faq_para_q">Question: Can you explain how the concept of roles work?</p>
                      <p className="faq_para">Answer: Suppose you want to give your family members access to different things in your house, depending on their age and responsibility. You might give your older kids access to the kitchen, but not to the medicine cabinet. This is similar to how our roles work within the app. Each person only has the key to the areas they need to access. This helps to protect sensitive information and make sure that the task for each user is simplified.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question: Why do you have so many roles in your app?</p>
                      <p className="faq_para">Answer: Just like in real life, a person could be unwell on one day. Another day, the person could be looking after a loved one as a caregiver and so on. The app provides different user journeys, depending on the role you choose.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question: What if I select the wrong role?</p>
                      <p className="faq_para">Answer: If you feel you may have made a mistake in selecting the role, you can always go back and selected another role.</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question: Why do we need several professionals to manage the illness of my loved one / patient?</p>
                      <p className="faq_para">Answer: A person suffering from long-term health problems needs a team of people who can help them with different aspects of chronic care, such as medicine, diet, exercise, and mental health. This way, they can get the best support for managing their ailments and for their overall well-being.</p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Box>
          </Card>
        </div>
        <div className="info-card3">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",

            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                  padding: "1rem",
                }}
              >
                <p class="text-green">Need more clarification? Please type your question here.</p>
                <div class="form-group w-100 top-space">
                  <textarea class="form-control" rows="3" ></textarea>
                </div>
              </Grid>
            </Box>
            <div className="text-center faq_submit">
              <Button
                style={{
                  background: "#1D5A90",
                  borderRadius: 50,
                  color: "#ffffff",
                  textTransform: "none",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
                onClick={onSubmit}
                type="submit"
              >
                Send
              </Button>
            </div>
          </Card>
        </div>



      </Grid>
      <div style={{ height: "150px" }}></div>
    </Container>
  );
}
export default Information;
