import axios from 'axios';

const dataValues = [
    {
      "title": "BP",
      "type": "com.google.blood_pressure"
    },
    {
      "title": "Calories",
      "type": "com.google.calories.expended"
    } 
  ];
  
  // Provide request headers to be attached with each function call
  export const getRequestHeaders = (accessToken) => {
    const requestHeaderBody = {
       params: {
       'key': 'API_KEY',
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
  
  export const getCode = async (client_id, redirect_uri) => {
   //const req = await axios.post('http://account.withings.com/oauth2_user/authorize2', body, headers);
   const req = await axios.post('http://account.withings.com/oauth2_user/authorize2?response_type=code&client_id='+client_id+'&state=Global&scope=user.info,user.metrics,user.activity&redirect_uri='+redirect_uri+'&mode=production');
    return req;
  }
  