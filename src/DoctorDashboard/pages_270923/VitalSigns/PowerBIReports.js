import React, { useState, useEffect } from "react";
import "./Vitalsigns.css";
// import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import moment from "moment";
// import priceData from "../../assets/btcdata.json";

import * as Realm from "realm-web";
import "twix";
import {
  AiTwotoneFlag,
} from "react-icons/ai";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import LineChart2 from "./LineChart2";

import decryptData from "../../components/decryptData";
import VitalsGraph from "./VitalsGraph";

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function PowerBIReports(props) {

  return(
    <>
    
    <PowerBIEmbed
              embedConfig={{
                type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                id: "740aedee-961b-47a3-9647-d91519a30d51",
                embedUrl: "https://app.powerbi.com/reportEmbed?reportId=740aedee-961b-47a3-9647-d91519a30d51&groupId=0774b6db-cbd0-40bd-b56c-a9bde02b7f46&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUFVU1RSQUxJQS1FQVNULUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmRsRW1iZWQiOnRydWV9fQ%3d%3d",
                accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWMwZDI2ODgtYWEzMS00YWMzLWJkMWMtZjMxYzk2YmNhNTA4LyIsImlhdCI6MTY5NTA5NDAyMiwibmJmIjoxNjk1MDk0MDIyLCJleHAiOjE2OTUwOTkxOTMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VUFBQUE2QStGMDVJZm51VUFUcGdkNWtPL294ckdmSW81ZDlMc2tJZUVoWkNqSzRCZU1SS01YTnJ2U3hQOE9BQkYrdld5OEtCeFZvclFLMUhHU0h6a3NmeDIrZlJacWFoc1Q3TWlXZWF4aVkzbnljUT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJQYWdvdGkiLCJnaXZlbl9uYW1lIjoiUmFtYWtyaXNobmEiLCJpcGFkZHIiOiIxNTIuNTguMTk3LjEyOCIsIm5hbWUiOiJSYW1ha3Jpc2huYSBQYWdvdGkiLCJvaWQiOiJiYzU0NWZiMy04NzBkLTRhZDMtYWZiMS1hNjQ3NmRiYTk0YmIiLCJwdWlkIjoiMTAwMzIwMDIwOTU2RTE3NyIsInJoIjoiMC5BVUVBaUNZTlhER3F3MHE5SFBNY2xyeWxDQWtBQUFBQUFBQUF3QUFBQUFBQUFBQkJBRFEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiOGpzYkNWUlVJckJudnhoZUlDNEdfZVZPMXJGeVc2OXBDR0c1RGNyVmVQWSIsInRpZCI6IjVjMGQyNjg4LWFhMzEtNGFjMy1iZDFjLWYzMWM5NmJjYTUwOCIsInVuaXF1ZV9uYW1lIjoiUmFtYWtyaXNobmFAcm9ib25vbWljcy5haSIsInVwbiI6IlJhbWFrcmlzaG5hQHJvYm9ub21pY3MuYWkiLCJ1dGkiOiJUcmtwd2FzY3dVZVR4bEx6b2s4cUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJjZjFjMzhlNS0zNjIxLTQwMDQtYTdjYi04Nzk2MjRkY2VkN2MiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.DxzvK3vx9pLOj8KohF-b_YcSmfY3re9KVLqEKB1Cxz1setBYn-mEcUr47mu8YRQlYKJFkfKxXgeMJMsyitHN9tEdnr4LVg7G1M9iiStKHSlQefwrCDmQStGgVmFncjCOn-7h8q5PQe3o0aVvVo8WcK_5fEiAZett8I1poqy5AvBv2XYNPLlNBOIcVsBw3OPmwc0ip2FtPvIpUlfi8Y_uHwbc7-n3Lj5tV7yaNTSPa-mNl1g_qxsx8nAQVl8wyCHSBFPtyfFl85hhgf4X3jJzEic6jU8u33hd886OwjKnsJ0Gx2esfpT4hvoWra8LU6rNtLcYBLNgIIX3l8Lc_e022w",
                tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                settings: {
                  panes: {
                    filters: {
                      expanded: true,
                      visible: true
                    }
                  },
                  // background: models.BackgroundType.Transparent,
                }
              }}

              eventHandlers={
                new Map([
                  ['loaded', function () { console.log('Report loaded'); }],
                  ['rendered', function () { console.log('Report rendered'); }],
                  ['error', function (event) { console.log(event.detail); }],
                  ['visualClicked', () => console.log('visual clicked')],
                  ['pageChanged', (event) => console.log(event)],
                ])
              }

              style={{ height: "500px", width: "500px" }}

              getEmbeddedComponent={(embeddedReport) => {
                window.report = embeddedReport;
              }}
            />
            </>
  )

}

export default PowerBIReports;
