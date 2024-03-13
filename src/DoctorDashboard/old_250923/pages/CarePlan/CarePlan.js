import React from "react";
import "./careplan.css";
import { FaBell } from "react-icons/fa";
import { AiOutlineLeft,AiTwotoneFlag,AiFillClockCircle} from "react-icons/ai";
import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import { BiPhone } from "react-icons/bi";
import patientimg from "../../assets/patient.png";

function CarePlan() {
 
  return (    
         <div style={{width:'88%',position:'fixed',backgroundColor:'#f2f8f1',borderTopLeftRadius:'40px',borderBottomLeftRadius:'40px',boxShadow:'0 0 10px #000000'}}>
           <div style={{display: "flex"}} class="row" >
              <Card style={{width:'40%',height:'12vh',borderRadius:15,padding:'2px',marginTop:'2%',marginLeft:'3%'}}> 
                  <Card.Body>
                    <div style={{ display: "flex",fontSize:12}}>
                         <div  style={{width:'23%',marginTop:'-0.7vh'}}>
                            <AiOutlineLeft size="35" color="#209f85"/>
                            <span><img alt="Global Medics" src={patientimg}  style={{borderRadius:'100%',width:'40px',height:'40px'}} /></span>
                          </div>
                          <div style={{width:'2%'}}/>
                        <div style={{width:'35%',marginTop:'-2vh'}} >
                          <p>Adam Hilbert <AiTwotoneFlag color="red"/></p>
                          <p>Recovery Time : <span style={{color:'#209f85'}}>15 days</span></p>
                        </div>
                        <div style={{width:'40%',marginTop:'-2vh'}}>
                          <p>Recovery Status :<span style={{backgroundColor:'#ff0984',paddingLeft:'15px',paddingRight:'15px',paddingTop:'3px',paddingBottom:'3px',borderRadius:'10px',fontSize:10,color:'#FFFFFF'}}>Bad</span></p>
                          <p>watchly closely</p>
                        </div>
                    </div>
                 </Card.Body>
              </Card> 
              <Card style={{width:'10%',height:'5vh',borderRadius:10,padding:'5px',marginTop:'2%',marginLeft:'3%',fontSize:11,backgroundColor:'#209f85',color:'#FFFFFF'}} >
                <div style={{paddingTop:'0.5vh',textAlign:'center'}}><BiPhone size="18" color="#FFFFFF"/> <span>Audio Call</span></div>
              </Card>
              <Card.Body style={{width:'20%',height:'12vh',marginTop:'0.1%'}} >
                <Card style={{width:'95%',height:'5vh',borderRadius:10,padding:'5px',marginTop:'1%',marginLeft:'3%',fontSize:10}} >
                 <div style={{paddingTop:'0.5vh',textAlign:'center'}}> <AiFillClockCircle size="18" color="#89c1b5"/><span> Your Time 15:00 AM Today Nov, 21</span></div>
                </Card>
                <Card style={{width:'95%',height:'5vh',borderRadius:10,padding:'5px',marginTop:'2%',marginLeft:'3%',fontSize:10,backgroundColor:'#89c1b5',color:'#FFFFFF'}} >
                   <div style={{paddingTop:'0.5vh',textAlign:'center'}}> <AiFillClockCircle size="18" color="#FFFFFF"/><span>Patients Time 15:00 AM Today Nov, 21</span></div>
                </Card>
              </Card.Body>
              <Card.Body style={{height:'12vh',marginTop:'2%'}} >
                <div ><FaBell size="30" color="grey"/></div>
               <div style={{marginTop:'-40px',marginLeft:'30px'}}><span style={{backgroundColor:'#fe5935',paddingLeft:'6px',paddingRight:'6px',borderRadius:'100%',fontSize:18,fontWeight:'bold' ,color:'#FFFFFF',marginLeft:'-1px',marginTop:'5px'}}>4</span></div>
              </Card.Body>
            </div>
           
            <div  class="row" style={{marginBottom:'7vh'}}>
              <Card style={{width:'90%',height:'75vh',borderRadius:15,padding:'10px',marginTop:'2%',marginLeft:'3%'}}> 
                   {/* <div >
                    <Line data={data} />
                    </div> */}

                    Care Plan
               </Card> 
            </div>
        </div>
    
  );
}

export default CarePlan;
