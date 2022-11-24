import { useState, useEffect } from 'react';
import { sendRecordGetSelf } from '../utils/Request';

import 'charts.css';
import './Custom.css'

export default function Chart() {

  const [record, setRecord] = useState({});

  useEffect(() => {
    sendRecordGetSelf().then((res) => {
      if (res.ok) {
        res.json().then(body => {
          let rawList = body.data;
          let data = {};

          for (let entry of rawList) {
            if (data[entry.condition] === undefined) {
              data[entry.condition] = entry.rate;
            }
            else {
              data[entry.condition] = Math.max(data[entry.condition], entry.rate);
            }
          }

          setRecord(data);
        });
      }
    });
  }, [])



  let messages = [
    // {
    //   issueName: "OCD",
    //   progress: 100
    // },
    // {
    //   issueName: "Anxiety",
    //   progress: 20
    // },
    // {
    //   issueName: "Bipolar",
    //   progress: 40
    // },
    // {
    //   issueName: "Test",
    //   progress: 40
    // }
  ]

  for (let entry of Object.entries(record)) {
    messages.push({
      issueName: entry[0],
      progress: entry[1] + "rem"
    })
  }

  return <div className="flex flex-col mt-4">
    <table id="motion-effect" className="charts-css column show-labels show-primary-axis show-5-secondary-axes data-spacing-20 hide-data">
      <tbody>
        {
          messages.map((message) => (
            <tr>
              <th scope="row"> {message.issueName} </th>
              <td style={{ height: message.progress }}></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className="flex flex-col mt-4">
      <ul id = "box"
        className="charts-css legend legend-circle border-0px">
        {
          messages.map((message) => (
            <li>
              {message.issueName}
            </li>
          ))
        }
      </ul>
    </div>
  </div>;
}
