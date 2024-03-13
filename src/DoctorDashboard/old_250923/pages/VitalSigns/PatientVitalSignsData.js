import { cache } from "@amcharts/amcharts4/core";
import * as Realm from "realm-web";

// Place Your RealmApp ID Here
const app = new Realm.App({ id: "globalmedics-yxogc", timeout: 10000 });

// can implement inBuilt JWT, Google, Facebook, Apple Authentication Flow.
const credentials = Realm.Credentials.anonymous(); // LoggingIn as Anonymous User. 

const getVitalsData = async (x,nvalue) => {

  console.log("x:",x);
  // loggedIn as anonymous user
  const user = await app.logIn(credentials);
   const xData = [];

 
  console.log("value:",nvalue);
 
   xData[0] = await user.functions.getVitalsTempPatientData(x);
   xData[1] = await user.functions.getVitalsBPPatientData(x);
   xData[2] = await user.functions.getVitalsHeartRatePatientData(x)
   xData[3] = await user.functions.getVitalsSpO2PatientData(x)
   xData[4] = await user.functions.getVitalsRespRatePatientData(x)

  return xData;
   
}

export default getVitalsData;