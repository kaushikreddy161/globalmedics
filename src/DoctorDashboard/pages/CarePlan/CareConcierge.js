import React, { useContext, useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./CareConcierge.css";
import Switch from "@mui/material/Switch";
import { Card } from "react-bootstrap";
// import "../../pages/PatientReports/PatientReports.css";
// import "../../pages/CarePlan/CarePlanGeneration.css";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import IconCarePlanGeneration from "../../../DoctorDashboard/assets/icon-care-plan-generation.png";

import IconAccept from "../../../assets/icon-accept.png";
import IconCheckbox from "../../../assets/icon-checkbox.png";

import { UserContext } from "../../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";


// data fetching from mongodb database

import * as Realm from "realm-web";



function CareConcierge() {


  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [pdata, setPData] = useState(true);
  const [fdata, setfData] = useState("");

  const onTest = async (event) => {
    event.preventDefault();
    if (user) {
      let id = new BSON.ObjectID();
      const createx = user.functions.createCareConciergeDetailData(
        id,
        fdata,
      );
      createx.then(async (resp) => {
        alert("Care Ring details added successfully");
        // navigate(`/careConcierge`);
        const allFMembers = await user.functions.getAllCareConciergeDetailData();
        setFamilyData(() => allFMembers);

      });
      setfData('');
    }
  };


  // Data fetching from db variablea

  const [familyData, setFamilyData] = useState([]);

  async function fetchData() {
    try {
      const allFMembers = await user.functions.getAllCareConciergeDetailData();
      setFamilyData(() => allFMembers);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("id -> ", id)
      await user.functions.deleteCareConciergeDetailData(id);
      fetchData()

    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };


  // const handleDel = async (recordId) => {
  //   try {
  //     // Initialize the Realm app
  //     const realmApp = new app.App({ id: 'your-realm-app-id' });

  //     // Log in to the app (you may need to handle authentication)
  //     const user = await realmApp.logIn(credentials);

  //     // Access the MongoDB Realm service
  //     const mongodb = user.mongoClient('mongodb-atlas');

  //     // Specify the MongoDB collection and query
  //     const collection = mongodb.db('your-database').collection('your-collection');

  //     // Delete the record with the specified ID
  //     await collection.deleteOne({ _id: recordId });

  //     // Fetch updated data after deletion
  //     fetchData();
  //   } catch (error) {
  //     console.error('Error deleting record from MongoDB Realm:', error);
  //   }
  // };












  const [statusAccept1, setStatusAccept1] = useState(false);
  const changeAccept1 = () => {
    if (statusAccept1 == false) {
      setStatusAccept1(true);
    } if (statusAccept1 == true) {
      setStatusAccept1(false);
    }
  }
  const [statusAccept2, setStatusAccept2] = useState(false);
  const changeAccept2 = () => {
    if (statusAccept2 == false) {
      setStatusAccept2(true);
    } if (statusAccept2 == true) {
      setStatusAccept2(false);
    }
  }
  const [statusAccept3, setStatusAccept3] = useState(false);
  const changeAccept3 = () => {
    if (statusAccept3 == false) {
      setStatusAccept3(true);
    } if (statusAccept3 == true) {
      setStatusAccept3(false);
    }
  }
  const [statusAccept4, setStatusAccept4] = useState(false);
  const changeAccept4 = () => {
    if (statusAccept4 == false) {
      setStatusAccept4(true);
    } if (statusAccept4 == true) {
      setStatusAccept4(false);
    }
  }
  const [statusAccept5, setStatusAccept5] = useState(false);
  const changeAccept5 = () => {
    if (statusAccept5 == false) {
      setStatusAccept5(true);
    } if (statusAccept5 == true) {
      setStatusAccept5(false);
    }
  }

  const [statusAccept6, setStatusAccept6] = useState(false);
  const changeAccept6 = () => {
    if (statusAccept6 == false) {
      setStatusAccept6(true);
    } if (statusAccept6 == true) {
      setStatusAccept6(false);
    }
  }
  const [statusAccept7, setStatusAccept7] = useState(false);
  const changeAccept7 = () => {
    if (statusAccept7 == false) {
      setStatusAccept7(true);
    } if (statusAccept7 == true) {
      setStatusAccept7(false);
    }
  }
  const [statusAccept8, setStatusAccept8] = useState(false);
  const changeAccept8 = () => {
    if (statusAccept8 == false) {
      setStatusAccept8(true);
    } if (statusAccept8 == true) {
      setStatusAccept8(false);
    }
  }

  const [data, setData] = useState([{ role: "", fname: "", mname: "", fmname: "", mobile: "", email: "", address: "" }])

  const handleClick = () => {
    setData([...data, { role: "", fname: "", mname: "", fmname: "", mobile: "", email: "", address: "" }])
  }

  const handleChange = () => {

  }

  // const handleDelete = (i) => {
  //   const deleteVal = [...data]
  //   deleteVal.splice(i, 1)
  //   setData(deleteVal)
  // }

  return (
    <>
      <div className="container-main">
        <div className="row">
          <div class="col">
            <Card className="mainCard1">
              <Card.Body className="mainCard1Body">
                <div className="row margin-m">
                  <div className="col-2">
                    <img className="CardImg" src={IconCarePlanGeneration} alt="" />
                  </div>
                  <div className="col-10">
                    <div style={{ display: "flex", marginTop: "0.7rem" }}>
                      <input type="text" class="form-control input-right-space" placeholder="First Name" />
                      <input type="text" class="form-control input-right-space" placeholder="Middle Name" />
                      <input type="text" class="form-control input-right-space" placeholder="Family Name" />
                    </div>
                    <div style={{ display: "flex", marginTop: "0.7rem" }}>
                      <select className="form-control input-right-space" placeholder="Sex">
                        <option selected>-Select Gender-</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                      {/* <input type="text" class="form-control" placeholder="Date of Birth" /> */}
                      <Form.Control
                        className="name-input input-right-space"
                        type="date"
                        placeholder="Date of Birth"
                        name="age"
                        style={{
                          marginBottom: "0pt",
                          marginTop: "0pt",
                          color: "#707070",
                        }}
                      ></Form.Control>
                      <input type="text" class="form-control input-right-space" placeholder="Address" />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card className="mainCard2">
              <Card.Body className="mainCard1Body">
                <div className="row margin-m">
                  <div className="col-2">
                    Chronic
                  </div>
                  <div className="col-3">
                    <div className="Checkbox-div">
                      <div>
                        {statusAccept1 ?
                          <img src={IconAccept} onClick={changeAccept1} /> : <img src={IconCheckbox} onClick={changeAccept1} />
                        } Arthritis
                      </div>
                      <div>
                        {statusAccept2 ?
                          <img src={IconAccept} onClick={changeAccept2} /> : <img src={IconCheckbox} onClick={changeAccept2} />
                        } Cancer
                      </div>
                      <div>
                        {statusAccept3 ?
                          <img src={IconAccept} onClick={changeAccept3} /> : <img src={IconCheckbox} onClick={changeAccept3} />
                        } Diabetes
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="Checkbox-div">
                      <div>
                        {statusAccept4 ?
                          <img src={IconAccept} onClick={changeAccept4} /> : <img src={IconCheckbox} onClick={changeAccept4} />
                        } Heart (CVD)
                      </div>
                      <div>
                        {statusAccept5 ?
                          <img src={IconAccept} onClick={changeAccept5} /> : <img src={IconCheckbox} onClick={changeAccept5} />
                        } Kidney (CKD)
                      </div>
                      <div>
                        {statusAccept6 ?
                          <img src={IconAccept} onClick={changeAccept6} /> : <img src={IconCheckbox} onClick={changeAccept6} />
                        } Lungs (COPD)
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Checkbox-div">
                      <div>
                        {statusAccept7 ?
                          <img src={IconAccept} onClick={changeAccept7} /> : <img src={IconCheckbox} onClick={changeAccept7} />
                        } Mental Health
                      </div>
                      <div>
                        {statusAccept8 ?
                          <img src={IconAccept} onClick={changeAccept8} /> : <img src={IconCheckbox} onClick={changeAccept8} />
                        } <input type="text" class="form-control" placeholder="Other" style={{ float: "left" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="main-tab-div">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="PatientInformation" title="Patient Information">
            Patient Information
          </Tab>
          <Tab eventKey="MedicalHistory" title="Medical History">
            Medical History
          </Tab>
          <Tab eventKey="CareRings" title="Care Rings">
            <div className="dnd-container">
              <div className="card-file-div">
                <span className="green">Care Ring Members</span>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Role*</th>
                      <th scope="col">First Name*</th>
                      <th scope="col">Middle Name</th>
                      <th scope="col">Family Name</th>
                      <th scope="col">Mobile*</th>
                      <th scope="col">eMail</th>
                      <th scope="col">Address</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Next of Kin</td>
                      <td>John</td>
                      <td>Prasad</td>
                      <td>Travolta</td>
                      <td>+919876543210</td>
                      <td>RNK@Email.com</td>
                      <td>Chennai</td>
                      <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                      <td>2. Family Member</td>
                      <td>Ram</td>
                      <td>Narain</td>
                      <td>Mallick</td>
                      <td>+919876543210</td>
                      <td>rmnm@mail.com</td>
                      <td>Allahabad</td>
                      <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>
                  </tbody>
                </table>

                <span className="green">Add Care Ring Members</span>
                {
                  data.map((val, i) =>
                    <div className="cardz">
                      <div style={{ display: "flex" }} >
                        <select name="role" value={val.role} className="form-control input-right-space width" placeholder="Sex">
                          <option selected>-Select Role-</option>
                          <option value="1">Next of Kin</option>
                          <option value="2">Family</option>
                          <option value="3">Friend</option>
                          <option value="4">Attendant</option>
                        </select>
                        <input type="text" name="fname" value={val.fname} class="form-control input-right-space width" placeholder="First Name" />
                        <input type="text" name="mname" value={val.mname} class="form-control input-right-space width" placeholder="Middle Name" />
                        <input type="text" name="fmname" value={val.fmname} class="form-control input-right-space width" placeholder="Family Name" />
                        <input type="number" name="mobile" value={val.mobile} class="form-control input-right-space width" placeholder="Mobile" />
                        <input type="email" name="email" value={val.email} class="form-control input-right-space width" placeholder="eMail" />
                        <input type="text" name="address" value={val.address} class="form-control input-right-space width" placeholder="Address" />
                      </div>
                    </div>
                  )
                }
                <div className="btn-div">
                  <Button className="form-btn add" onClick={handleClick}>Add More</Button>
                  {/* <Button className="form-btn delete" onClick={handleDelete}>Delete</Button> */}
                  {/* <Button className="form-btn delete">Delete</Button> */}
                </div>


                <table>
                  <tr>
                    <td>
                      {familyData.map((item) => (
                        <div>{item.fdata}
                          {/* <span style={{ paddingLeft: "2rem" }}><i class="fa fa-trash" aria-hidden="true" style={{ cursor: "pointer" }} onClick={() => handleDelete(item._id)}></i></span> */}
                        </div>
                      ))}
                    </td>
                    <td>
                      {familyData.map((item) => (
                        // <div>{item.fdata}
                        <div>
                          <span style={{ paddingLeft: "2rem" }}><i class="fa fa-trash" aria-hidden="true" style={{ cursor: "pointer" }} onClick={() => handleDelete(item._id)}></i></span>
                        </div>
                        // </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="text" name="fdata" value={fdata} onChange={(e) => setfData(e.target.value)}></input>
                      <button className="btn btn-primary" onClick={onTest}>Upload Details</button></td>
                  </tr>
                </table>


              </div>


              {/* <div className="card-file-div">
                <span className="green">Upload Reports</span>
                <form style={{ display: "flex" }}>
                  <select className="form-control input-right-space width" placeholder="Sex">
                    <option selected>-Report Type-</option>
                    <option value="1">Pathology</option>
                    <option value="2">Radiology</option>
                    <option value="3">Other</option>
                  </select>
                  <input type="file" class="form-control input-right-space width" placeholder="Choose File" />
                  <Button className="form-btn draft">Upload</Button>
                </form>
              </div> */}









            </div>
          </Tab>
          <Tab eventKey="Providers" title="Providers">
            Providers
          </Tab>
          <Tab eventKey="Community" title="Community">
            Community
          </Tab>
        </Tabs>
      </div>

      <div className="div-right">
        <Button className="form-btn continue" onClick={handleClick}>Continue</Button>
      </div>



      {/* <div>
        <div>First Name</div>
        <div clsss="dummy-cls">
          <input type="text" name="fdata" value={fdata} onChange={(e) => setfData(e.target.value)}></input>
          {familyData.map((item) => (
            <div>{item.fdata}
              <i class="fa fa-trash" aria-hidden="true" style={{ cursor: "pointer" }} onClick={() => handleDelete(item._id)}></i>
            </div>
          ))}
        </div>
        <div>
          <Button className="form-btn add" onClick={onTest}>Upload Details</Button>
        </div>
      </div> */}






    </>
  );
}

export default CareConcierge;