import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";

// const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://ac-mongodbcosmos:4aTb03qAb72r65TeIYEwvEKgq2h4lm367ELSZ66qJfq8lhQKpZREjsdIdyw68IK5A64Yr6pvvl9QtfE0jT4RDw==@ac-mongodbcosmos.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@ac-mongodbcosmos@';
// const client = new MongoClient(url);

// Database Name
const dbName = 'GlobalMedics';

const MongodbAzure = () => {

    // async function connect() {
    //     // Use connect method to connect to the server
    //     await client.connect();
    //     console.log('Connected successfully to server');
    //     const db = client.db(dbName);
    //     const collection = db.collection('GMVirtual2023');
      
    //     // the following code examples can be pasted here...
      
    //     return 'done.';
    //   }
      useEffect(() => {
   // connect();  
      },[]);

    return(
        <Container
        style={{
            background: "#EBEBEB",
            maxWidth: "100%",
            // minHeight: "100vh",
            margin: "0",
        }}
        >
            <div>Mongodb Connectivity</div>
        </Container>
    );
}

export default MongodbAzure;