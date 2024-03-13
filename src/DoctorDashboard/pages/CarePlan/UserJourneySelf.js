import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./UserJourneySelf.css";
import Switch from "@mui/material/Switch";
import { Card } from "react-bootstrap";
import "../../pages/PatientReports/PatientReports.css";
import "../../pages/CarePlan/CarePlanGeneration.css";


import IconSelf from "../../../DoctorDashboard/assets/icon-nav-self.svg";
import IconRCM from "../../../DoctorDashboard/assets/icon-nav-care-manager.svg";
import IconRCG from "../../../DoctorDashboard/assets/icon-nav-care-giver.svg";
import IconFamily from "../../../DoctorDashboard/assets/icon-nav-family.svg";
import IconFriends from "../../../DoctorDashboard/assets/icon-nav-friends.svg";
import IconDoc from "../../../DoctorDashboard/assets/icon-nav-doc.svg";
import IconCarePlanGeneration from "../../../DoctorDashboard/assets/icon-care-plan-generation.png";
import IconInfo from "../../../DoctorDashboard/assets/icon-help.png";
import IconConnection from "../../../DoctorDashboard/assets/icon-connect-backend.png";
import IconAdd from "../../../DoctorDashboard/assets/icon-add-new.png";


// import IconCheckIn from "../assets/icon-nav-checkin.svg";
// import IconHVut from "../assets/icon-nav-hvault.svg";
// import IconCRing from "../assets/icon-nav-cring.svg";
// import IconProfessionals from "../assets/icon-nav-professionals.svg";
// import IconHPReports from "../assets/icon-nav-hvprpts.svg";
// import IconAcn from "../assets/icon-nav-acn.svg";



function DnD() {
  const listItems0 = [
    { id: "1", label: "Step 1" },
    { id: "2", label: "Step 2" },
    { id: "3", label: "Step 3" },
    { id: "4", label: "Step 4" },
    { id: "5", label: "Step 5" },
    { id: "6", label: "Step 6" },
    { id: "7", label: "Step 7" },
    { id: "8", label: "Step 8" },
    { id: "9", label: "Step 9" },
  ];
  const listItems1 = [
    { id: "1", label: "View Care Ring Summary", status: "check", connection: "success", add:"no" },
    { id: "2", label: "Invite Care Ring Members", status: "check", connection: "success", add:"no" },
    { id: "3", label: "Invite Existing Providers", status: "check", connection: "success", add:"no" },
    { id: "4", label: "Approve Member Requests", status: "check", connection: "success", add:"no" },
    { id: "5", label: "Customise Data Access", status: "check", connection: "success", add:"no" },
    { id: "6", label: "Yet to connect to Backend", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "7", label: "Yet to connect to Backend", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "8", label: "Unselected (To Delete)", status: "uncheck", connection: "success", add:"no" },
    { id: "9", label: "Add New Set of Screens", status: "uncheck", connection: "success", add:"yes" },
  ];
  const [status, setStatus] = useState("true");

  const listItems2 = [
    { id: "1", label: "Health Vault Dashboard", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "2", label: "Patient Particulars", status: "check", connection: "success", add:"no" },
    { id: "3", label: "Chronic Conditions", status: "check", connection: "success", add:"no" },
    { id: "4", label: "Upload Reports (Unrestricted)", status: "check", connection: "success", add:"no" },
    { id: "5", label: "View/Query Rprts (Unrestricted)", status: "check", connection: "success", add:"no" },
    { id: "6", label: "View Reports (Restricted)", status: "check", connection: "success", add:"no" },
    { id: "7", label: "Upload Health Insurance", status: "check", connection: "success", add:"no" },
    { id: "8", label: "Query Health Insurance", status: "check", connection: "success", add:"no" },
    { id: "9", label: "Add New Set of Screens", status: "check", connection: "success", add:"yes" },
  ];
  const listItems3 = [
    { id: "1", label: "Care Plan Dashboard", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "2", label: "Set/Update Health Goals", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "3", label: "View Health Goals", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "4", label: "Set Care Plan (Medical)", status: "uncheck", connection: "success", add:"no" },
    { id: "5", label: "Set Care Plan (Non-medical)", status: "check", connection: "success", add:"no" },
    { id: "6", label: "View Care Plan", status: "check", connection: "success", add:"no" },
    { id: "7", label: "Manage Providers", status: "check", connection: "success", add:"no" },
    { id: "8", label: "Add New Set of Screens", status: "check", connection: "success", add:"yes" },
  ];
  const listItems4 = [
    { id: "1", label: "Request Prods & Services", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "2", label: "Select Products & Services", status: "check", connection: "success", add:"no" },
    { id: "3", label: "Order Products & Services", status: "check", connection: "BEConnection", add:"no" },
    { id: "4", label: "Approve Prods & Services", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "5", label: "Pay for Products & Services", status: "check", connection: "success", add:"no" },
    { id: "6", label: "Marketplace Dashboard", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "7", label: "Add New Set of Screens", status: "uncheck", connection: "success", add:"yes" },
  ];
  const listItems5 = [
    { id: "1", label: "Set of Patients Today", status: "uncheck", connection: "success", add:"no" },
    { id: "2", label: "Set of Tasks Today", status: "check", connection: "success", add:"no" },
    { id: "3", label: "Check-in Survey", status: "check", connection: "success", add:"no" },
    { id: "4", label: "Before Activity Photo / Video", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "5", label: "After Activity Photo / Video", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "6", label: "Other Medical Surveys", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "7", label: "Check-out Survey", status: "check", connection: "success", add:"no" },
    { id: "8", label: "Care Action Notifications", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "9", label: "Add New Set of Screens", status: "uncheck", connection: "success", add:"yes" },
  ];
  const listItems6 = [
    { id: "1", label: "Record Vitals", status: "check", connection: "success", add:"no" },
    { id: "2", label: "Record Symptoms", status: "check", connection: "success", add:"no" },
    { id: "3", label: "Record Medications", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "4", label: "Record Nutrition", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "5", label: "Call Emergency", status: "check", connection: "success", add:"no" },
    { id: "6", label: "Add New Set of Screens", status: "uncheck", connection: "success", add:"yes" },
  ];
  const listItems7 = [
    { id: "1", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "2", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "3", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "4", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "5", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "6", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "7", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "8", label: "Named Set of Screens", status: "check", connection: "success", add:"no" },
    { id: "9", label: "Add New Set of Screens", status: "uncheck", connection: "success", add:"yes" },
  ];
  const listItems8 = [
    { id: "1", label: "Update Contact Details", status: "check", connection: "success", add:"no" },
    { id: "2", label: "View Karma Klub", status: "check", connection: "success", add:"no" },
    { id: "3", label: "Allocate Karma Koins", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "4", label: "Manage Devices", status: "check", connection: "success", add:"no" },
    { id: "5", label: "Forget Me (Delete All)", status: "uncheck", connection: "BEConnection", add:"no" },
    { id: "6", label: "Add New Set of Screens", status: "uncheck", connection: "success", add:"yes" },
  ];

  const [dragDropList0, setDragDropList0] = useState(listItems0);
  const [dragDropList1, setDragDropList1] = useState(listItems1);
  const [dragDropList2, setDragDropList2] = useState(listItems2);
  const [dragDropList3, setDragDropList3] = useState(listItems3);
  const [dragDropList4, setDragDropList4] = useState(listItems4);
  const [dragDropList5, setDragDropList5] = useState(listItems5);
  const [dragDropList6, setDragDropList6] = useState(listItems6);
  const [dragDropList7, setDragDropList7] = useState(listItems7);
  const [dragDropList8, setDragDropList8] = useState(listItems8);

  const onDragComplete0 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList0];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList0(arr);
  };
  const onDragComplete1 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList1];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList1(arr);
  };
  const onDragComplete2 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList2];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList2(arr);
  };
  const onDragComplete3 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList3];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList3(arr);
  };
  const onDragComplete4 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList3];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList4(arr);
  };
  const onDragComplete5 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList3];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList5(arr);
  };
  const onDragComplete6 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList3];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList6(arr);
  };
  const onDragComplete7 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList3];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList7(arr);
  };
  const onDragComplete8 = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList3];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList8(arr);
  };

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
                    <p className="CardText"><span className="green">User Journey Design for “Self” Role</span></p>
                    <p className="CardText">Select and organise the set of screens to be presented to “Self” role in each of the modules. Hiding non-relevant screens makes it simple and secure for users.</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card className="mainCard2">
              <div className="m-a">
                <div className="row margin-t">
                  <div className="col-3"><span className="green">Target Market</span></div>
                  <div className="col-4">B2C for “Elders in India”</div>
                  <div className="col-5"></div>
                </div>
                <div className="row margin-t">
                  <div className="col-3"><span className="green">Target Program</span></div>
                  <div className="col-4">Launch Program</div>
                  <div className="col-5"></div>
                </div>
                <div className="row margin-t">
                  <div className="col-3"><span className="green">Duration</span></div>
                  <div className="col-4">From Date</div>
                  <div className="col-5">To Date </div>
                </div>
              </div>
              {/* <div className="timeDiv">
                <p style={{ color: "#209F85" }}>
                  {" "}
                  Your Time {moment(props.time).format("HH:mm A")} Today{" "}
                  {moment(props.time).format("MMM")},{" "}
                  {moment(props.time).format("YY")}{" "}
                </p> */}

              {/* <p style={{ marginTop: "-9px" }}>
                {" "}
                Your Time {moment(props.time).format("HH:mm A")} Today{" "}
                {moment(props.time).format("MMM")},{" "}
                {moment(props.time).format("YY")}{" "}
              </p> */}
              {/* </div> */}
            </Card>
          </div>
        </div>
      </div>

      <div className="dnd-container">
        <div className="card">
          <DragDropContext onDragEnd={onDragComplete0}>
            <Droppable droppableId="drag-drop-list" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className="drag-drop-list-container-header"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="dnd-img"></div>
                  <div className="dnd-title"></div>
                  {dragDropList0.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.label}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p className="header-label">{item.label}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <DragDropContext onDragEnd={onDragComplete1}>
            <Droppable droppableId="drag-drop-list" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className="drag-drop-list-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="dnd-img"><img src={IconRCM} /></div>
                  <div className="dnd-title">Care Ring</div>
                  {dragDropList1.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.label}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="dnd-div">
                            <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }


                            </div>
                            <p className="label">{item.label}</p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="mtop-1">
            <DragDropContext onDragEnd={onDragComplete2}>
              <Droppable droppableId="drag-drop-list" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="dnd-img"><img src={IconRCM} /></div>
                    <div className="dnd-title">Health Vault</div>
                    {dragDropList2.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="dnd-div">
                              <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }
                              </div>
                              <p className="label">{item.label}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className="mtop-1">
            <DragDropContext onDragEnd={onDragComplete3}>
              <Droppable droppableId="drag-drop-list" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="dnd-img"><img src={IconRCM} /></div>
                    <div className="dnd-title">Care Plan</div>
                    {dragDropList3.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="dnd-div">
                              <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }
                              </div>
                              <p className="label">{item.label}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className="mtop-1">
            <DragDropContext onDragEnd={onDragComplete4}>
              <Droppable droppableId="drag-drop-list" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="dnd-img"><img src={IconRCM} /></div>
                    <div className="dnd-title">Operate Marketplace</div>
                    {dragDropList4.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="dnd-div">
                              <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }
                              </div>
                              <p className="label">{item.label}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className="mtop-1">
            <DragDropContext onDragEnd={onDragComplete5}>
              <Droppable droppableId="drag-drop-list" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="dnd-img"><img src={IconRCM} /></div>
                    <div className="dnd-title">Deliver Care</div>
                    {dragDropList5.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="dnd-div">
                              <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }
                              </div>
                              <p className="label">{item.label}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className="mtop-1">
            <DragDropContext onDragEnd={onDragComplete6}>
              <Droppable droppableId="drag-drop-list" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="dnd-img"><img src={IconRCM} /></div>
                    <div className="dnd-title">Update Status</div>
                    {dragDropList6.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="dnd-div">
                              <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }
                              </div>
                              <p className="label">{item.label}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className="mtop-1">
            <DragDropContext onDragEnd={onDragComplete7}>
              <Droppable droppableId="drag-drop-list" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="dnd-img"><img src={IconRCM} /></div>
                    <div className="dnd-title">Health Reports</div>
                    {dragDropList7.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="dnd-div">
                              <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }
                              </div>
                              <p className="label">{item.label}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className="mtop-1">
            <DragDropContext onDragEnd={onDragComplete8}>
              <Droppable droppableId="drag-drop-list" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="drag-drop-list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div className="dnd-img"><img src={IconRCM} /></div>
                    <div className="dnd-title">Manage Account</div>
                    {dragDropList8.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.label}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="item-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="dnd-div">
                              <div className="mtop-2">
                              {
                              item.status === "check" ? (
                                <Switch defaultChecked size="small" />
                              ) : item.connection === "BEConnection" ? (
                                <img src={IconConnection} className="img-con" />
                              ) : item.add === "yes" ? (
                                <img src={IconAdd} className="img-con" /> 
                              ) : (
                                <Switch size="small" />
                              )                              
                              }
                              </div>
                              <p className="label">{item.label}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>

        </div>
      </div>
    </>
  );
}

export default DnD;