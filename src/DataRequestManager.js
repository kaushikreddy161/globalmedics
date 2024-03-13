import axios from 'axios';
 const { setReloadCookie, hasReloadCookie } = require('./CookieManager.js');

const API_KEY = "AIzaSyDi3oJ5y1N46NiAlgFkG_3sw6gVhJQoYDg";
const dataValues = [
  {
    "title": "BP",
    "type": "com.google.blood_pressure"
  },
  {
    "title": "Calories",
    "type": "com.google.calories.expended"
  },
  {
    "title": "Fat",
    "type": "com.google.body.fat.percentage"
  },
  {
    "title": "Glucose",
    "type": "com.google.blood_glucose"
  },
  {
    "title": "Heart",
    "type": "com.google.heart_minutes"
  },
  {
    "title": "HeartRate",
    "type": "com.google.heart_rate.bpm"
  }, 
  {
    "title": "Height",
    "type": "com.google.height"
  },
  {
    "title": "Menstruation",
    "type": "com.google.menstruation"
  },
  {
    "title": "Move",
    "type": "com.google.active_minutes"
  },
  {
    "title": "Ovulation",
    "type": "com.google.ovulation_test"
  },
  {
    "title": "Oxygen",
    "type": "com.google.oxygen_saturation"
  },
  {
    "title": "Sleep",
    "type": "com.google.sleep.segment"
  },
  {
    "title": "Steps",
    "type": "com.google.step_count.delta"
  },
  {
    "title": "Temperature",
    "type": "com.google.body.temperature"
  },  
  {
    "title": "Weight",
    "type": "com.google.weight"
  }
];

// https://developers.google.com/fit/datatypes/health
// com.google.blood_glucose
// https://www.googleapis.com/auth/fitness.blood_glucose.read
// com.google.blood_pressure
// https://www.googleapis.com/auth/fitness.blood_pressure.read
// com.google.body.fat.percentage
// https://www.googleapis.com/auth/fitness.body.read 
// https://www.googleapis.com/auth/fitness.body_temperature.read
// com.google.body.temperature
// https://www.googleapis.com/auth/fitness.reproductive_health.read
// com.google.cervical_mucus
// https://www.googleapis.com/auth/fitness.heart_rate.read
// com.google.heart_rate.bpm
// com.google.height
// https://www.googleapis.com/auth/fitness.body.read
// com.google.menstruation
// https://www.googleapis.com/auth/fitness.reproductive_health.read
// com.google.ovulation_test
// https://www.googleapis.com/auth/fitness.reproductive_health.read
// com.google.oxygen_saturation
// https://www.googleapis.com/auth/fitness.oxygen_saturation.read
// com.google.sleep.segment
// https://www.googleapis.com/auth/fitness.sleep.read
// com.google.weight
// https://www.googleapis.com/auth/fitness.body.read

// We need to get aggregated data *on that particular day for now*

// Provide request headers to be attached with each function call
export const getRequestHeaders = (accessToken) => {
  const requestHeaderBody = {
     params: {
     'key': API_KEY,
     'access_token': accessToken
     },
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    }
  }
  return requestHeaderBody;
}

export const getAggregatedDataBody = (dataType, endTime) => {
  const requestBody = {
    "aggregateBy": [{
      "dataTypeName": dataType
    }],
    "bucketByTime": {
      "durationMillis": 86400000
    },
    "endTimeMillis": endTime,
    "startTimeMillis": endTime - (7*86400000)
  }
  return requestBody;
}

export const getAggregateData = async (body, headers) => {
 const req = await axios.get('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', body, headers);
 //const req = await axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:health', body, headers);
  return req;
}

// we need to return [{Today}, {Yesterday} .... {7 days back}]
// Each object has : {"Calories" : value, "Heart": value ... , "Date": }
const baseObj = {
  BP: 0,
  Calories: 0,
  Fat: 0,
  Glucose: 0,
  Heart: 0,
  HeartRate: 0,
  Height: 0,
  Menstruation: 0,
  Move: 0,
  Ovulation: 0,
  Oxygen: 0,
  Sleep: 0,
  Steps: 0,
  Temperature: 0,
  Weight:0
};

export const getWeeklyData = async(endTime, requestParameters, callBack, initialState) => {
  let state = [];
  let promises = [];
  const hasCookie = hasReloadCookie();
  if (!hasCookie.present || initialState.length === 0) {
    for(var i=6; i>=0; i--) {
      var currTime = new Date(endTime - i*86400000);
      state.push({
        ...baseObj,
        "Date": currTime
      })
      console.log("curTime: ", currTime);
    }
    dataValues.forEach((element) => {
      let body = getAggregatedDataBody(element.type, endTime);
     // console.log("body:", body);
      // console.log("requestparameters:", requestParameters);
      //https://fitness.googleapis.com/fitness/v1/users/me/dataset:aggregate
      promises.push(
      //  axios.post('https://www.googleapis.com/fitness/v1/users/me/dataSources', body, requestParameters)
      axios.post('https://fitness.googleapis.com/fitness/v1/users/me/dataset:aggregate', body, requestParameters)
          .then((resp) => {
          //  console.log("resp:", resp);
            // now, each data bucket represents exactly one day
            for(let idx=0; idx<7; idx++) {
              resp.data.bucket[idx].dataset[0].point.forEach((point) => {
                point.value.forEach((val) => {
                  let extract = val['intVal'] || Math.ceil(val['fpVal']) || 0;
                  state[idx][element.title] += extract;
                })
              })
            }
          }
        )
      )
    })
    Promise.all(promises).then(() => {
      callBack(state);
    })
    setReloadCookie();
  }
}