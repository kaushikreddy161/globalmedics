import React, { useState, useEffect , useContext} from "react";
import * as Realm from "realm-web";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import "./virtualround.css";
import { GrFormClose } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { Card } from "react-bootstrap";
import Loading from "../../components/Loading";
import noimage from "../../assets/noimage.png";
import decryptData from "../../components/decryptData";
import { UserContext } from "../../../contexts/user.context";
import { useNavigate } from "react-router-dom";

function VirtualRound(props) {
  const navigate = useNavigate();  
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { user,adbuser,custFunctionLogin } = useContext(UserContext);

  //const [patientSymptoms, setPatientSymptoms] = useState([]);
  const [patientsData, setPatientsData] = useState([]);
  const [duplicatePatientsData, setDuplicatePatientsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [theArray, setTheArray] = useState([]);
  const [showTextInput, setShowTextInput] = useState(true);
  const [noData, setNoData] = useState(true);
  const [loading, setLoading] = useState(true);
  //const prevPatientData = useRef([]);
  const excludeColumns = ["id", "timeLine", "remainder", "alerts", "img"];

  useEffect(() => {
    async function fetchData(){
        // add your Realm App Id to the .env.local file
        // if (loading) {
        //   const REALM_APP_ID = "globalmedics-yxogc";
        //   const app = new Realm.App({ id: REALM_APP_ID });
        //   const credentials = Realm.Credentials.anonymous();
           try {
        //    const user = await app.logIn(credentials);
            const allPatients = await user.functions.getALLPatientsDetailData();

            setPatientsData(() => allPatients);
            setDuplicatePatientsData(() => allPatients);
            setLoading(false);
            // console.log('patientsData',patientsData[0]._id)
          } catch (error) {
            console.error(error);
          }
        // }
    }
    fetchData();  
  }, []);

 // console.log("patientSymptoms", patientSymptoms);
  const sendPatientDetails = (patientDet, clr) => {
    props.getPatientOverviewDetails(patientDet, clr);
   // props.history.push("/patients");
   navigate("/patients");
  };

  const filterData = (value) => {
    // const array = value;
    setSearchText("");
    setTheArray((oldArray) => [...oldArray, value]);
    const lowercasedValue = value.toLowerCase().trim();
    const filteredData = patientsData.filter((item) => {
      return Object.keys(item).some((key) =>
        excludeColumns.includes(key)
          ? false
          : item[key].toString().toLowerCase().includes(lowercasedValue)
      );
    });
    if (lowercasedValue === "male") {
      const filteredData = patientsData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase() === lowercasedValue
        );
      });
      setPatientsData(filteredData);
    } else if (filteredData.length === 0) {
      setNoData(false);
    } else {
      setPatientsData(filteredData);
    }
  };
  const showTextHandle = () => {
    setShowTextInput(false);
  };

  const handleChange = (value) => {
    setSearchText(value);
  };

  const showAddNew = () => {
    filterData(searchText);
    setShowTextInput(true);
  };
  // console.log("...theArray", theArray);
  const handleRemoveClick = (index) => {
    // console.log("patientsData", patientsData);
    const list = [...theArray];
    list.splice(index, 1);
    setTheArray(list);
    // setPatientsData(prevPatientsData)
    //   const filteredArray  = duplicatePatientsData.filter(function(array_el){
    //     return theArray.filter(function(anotherOne_el){
    //        return Object.keys(array_el).some((key) =>
    //        excludeColumns.includes(key)
    //          ? false
    //          : array_el[key].toString().toLowerCase().includes(anotherOne_el)
    //      )
    //     }).length === 0
    //  });
    if (index === 0) {
      setPatientsData(duplicatePatientsData);
      setNoData(true);
     // console.log("afterDel", patientsData);
    }
    // else{
    //   setPatientsData(filteredArray)
    // }
    // console.log("index", index);
  };
 // console.log("theArray.length", theArray.length);
  return (
    <>
      <div
        className="main-screen"
      >
        <div className="filter-bar-box" style={{ display: "flex" }}>
          <Card className="filter-bar-box1">
            <Card.Body style={{ paddingTop: "0.5%" }}>
              <FaFilter
                style={{
                  alignItems: "center",
                  color: "blue",
                  fontSize: "12px",
                }}
              />
              <span className="filter-name">Filter By </span>
              {theArray.map((input, i) => (
                <div className="filter-button" style={{ marginTop: "0.2%" }}>
                  <text>
                    <GrFormClose
                      style={{ marginTop: "0.5%", marginRight: "10px" }}
                      onClick={(e) => handleRemoveClick(i)}
                    />
                    {input}
                  </text>
                </div>
              ))}
              {showTextInput ? (
                <button
                  onClick={showTextHandle}
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    borderStyle: "dashed",
                  }}
                >
                  Add New +
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchText}
                    onChange={(e) => handleChange(e.target.value)}
                    style={{
                      width: "100px",
                      fontSize: "12px",
                      borderStyle: "dashed",
                      marginLeft: "5px",
                    }}
                  />
                  <button
                    onClick={showAddNew}
                    style={{
                      width: "100px",
                      fontSize: "12px",
                      borderStyle: "dashed",
                    }}
                  >
                    Search
                  </button>
                </>
              )}
            </Card.Body>
          </Card>
        </div>
        {/* <div class="container"> */}
        <div className="patient-details-box" style={{ marginBottom: "7vh" }}>
          <Card className="patients-details-box-1">
            <div className="headings" style={{ paddingTop: "2%" }}>
              <p>
                <span style={{ paddingLeft: "80px" }}>Patients</span>
              </p>
              <p>
              <span style={{ paddingLeft: "90px" }}>Chronic Conditions</span>                
                </p>
              <p><span style={{ paddingLeft: "70px" }}>Vitals</span></p>
              <p><span style={{ paddingLeft: "40px" }}>Symptoms</span></p>
              <p><span style={{ paddingLeft: "30px" }}>Adherence</span></p>
            </div>
            <hr className="patients-symptoms-divide-line" />
            {loading && (
              <div className="text-center">
                <Loading />
              </div>
            )}
            {noData ? (
              <div className="displayPatients">
                {patientsData.map((patient, i) => {
                  const color = () => {
                    if (patient.memberType === "Prime") {
                      return "4px solid red";
                    } else if (patient.memberType === "Medium") {
                      return "4px solid yellow";
                    } else if (patient.memberType === "Normal") {
                      return "4px solid green";
                    }
                  };
                  var clr = color();

               //   let xpatient=decryptData(patient.email)
                let xpatient = patient.email;
               
                if( patient.patientName === "")
                {
                   //console.log("Name:",patient.patientName);
                   xpatient= decryptData(xpatient);
                }
                  //   console.log("color", clr);
                  return (
                    <div
                      className="filterCard"
                      onClick={(e) => sendPatientDetails(patient, clr)}
                    >
                      <div className="patients-records">
                        <div className="divide-by-line">
                          <div>
                            {                      
                              (patient.img !== "" && patient.img !== "-") ?
                            <img
                              className="patients-image"
                              style={{
                                border: clr,
                              }}
                              src={patient.img}
                              alt={`image-${i}`}
                              key={i}
                            />
                            :
                            <img
                            className="patients-image"
                            style={{
                              border: clr,
                            }}                            
                            alt="Global Medics" src={noimage}                            
                            key={i}
                          />
                           }
                          </div>

                          <div
                            style={{ alignItems: "center", marginTop: "20px" }}
                          >
                            <div className="name-card">

                              {
                                patient.patientName !== "" ?
                                <>
                                {patient.patientName}
                                </>
                                :
                                <>
                                {xpatient}
                                </>
                              }
                            </div>


                            <div className="patient-details">
                            { patient.age > 0 ? 
                              <>
                              <span>{patient.age}&#8239;&#8239;Years</span>
                              <span class="vertical-line-small" />
                              </>
                              :
                               " "
                            
                            }
                             
                             {
                               patient.location !== "" ?
                               <>
                               <span>{patient.location}</span>
                                <span class="vertical-line-small" />
                               </>
                               :
                               " "
                             }
                              
                              <span>{patient.gender}</span>
                            </div>
                          </div>
                        </div>
                        {/* <div className="vertical-line0"></div> */}
                        {/* <div
                          style={{
                            width: "18%",
                            paddingLeft: "0px",
                            fontSize: "12px",
                          }}
                        > */}
                        <div className="vertical-linek">
                          {/* {patient.patientSymptoms.map((item, i) => {
                            return (
                              <p className="vertical-line1">
                                {item.patientGroup}
                              </p>
                            );
                          })} */}
                           <p className="vertical-line1">{patient.patientGroup}</p>
                        </div>
                        {/* </div> */}
                        <div className="vertical-linek">
                        <p className="vertical-line1">{patient.alertsId}</p>
                        </div>
                        {/* <div
                          className="care-plan"
                          style={{ width: "20%" }}
                        ></div> */}
                        <div className="vertical-linek">
                          <p className="vertical-line1">{patient.history}</p>
                        </div>

                        {/* <div
                          className="patients-2"
                          style={{ width: "20%" }}
                        ></div> */}
                        <div className="vertical-line3"></div>
                        {/* <div className="adherence" style={{ width: "5%" }}> */}
                        {
                          patient.adherence > 0 ?
                          <>
                            <p className="centerk">{patient.adherence}%</p>
                          </>
                          :
                          " "
                        }
                      
                      </div>
                    </div>
                    // </div>
                  );
                })}
              </div>
            ) : (
              <>
                {" "}
                <div style={{ marginLeft: "500px" }}>
                  <p style={{ color: "red" }}>No match found </p>
                </div>{" "}
              </>
            )}
          </Card>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default VirtualRound;
