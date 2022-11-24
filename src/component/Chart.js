import 'charts.css';
import './Custom.css';

export default function Chart() {

  let messages = [
    {
      issueName: "OCD",
      progress: 100
    },
    {
      issueName: "Anxiety",
      progress: 20
    },
    {
      issueName: "Bipolar",
      progress: 40
    },
    {
      issueName: "Test",
      progress: 40
    }
  ]

  return <div className="flex flex-col mt-4">
    <table id="motion-effect" class="charts-css column show-labels show-primary-axis show-5-secondary-axes data-spacing-20 hide-data">
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
  </div>;
}
