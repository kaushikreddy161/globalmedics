import React, { useState, useEffect, useRef } from "react";
// import { usePrevious } from "react-hanger";
import * as Realm from "realm-web";
import "../VirtualRound/virtualround.css";
// import "./virtualround1.css"
import { GrFormClose } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { Card } from "react-bootstrap";
import Loading from "../../components/Loading";

function TempTable(props) {
//   const [HeartRatePatientData, setHeartRatePatientData] = useState([]);
  const [TempRatePatientData, setTempRatePatientData] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log("HeartRatePatientData", HeartRatePatientData);
  useEffect(async () => {
    // add your Realm App Id to the .env.local file
    if (loading) {
      const REALM_APP_ID = "globalmedics-yxogc";
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const patientTempLog =
          await user.functions.getVitalsTempPatientData(
            "61968eed1a60864db3976b82"
          );
          
        setTempRatePatientData(() => patientTempLog);
        console.log("patientTempLog", patientTempLog);
        // console.log("HeartRatePatientData", HeartRatePatientData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <>
      {TempRatePatientData.map((patientTempLog, key)=>{
          return(
              <>
              <div>
              <table>
                <tr>
                  <td>{patientTempLog.temperature}</td>
                </tr>
              </table>
            </div>
              </>
          )
      })}
    </>
  );  
}

export default TempTable;
