import 'charts.css';
import './Custom.css';
export default function Issue() {

    let messages = [
        {
            issueName: "OCD",
            progress: "100%"
        },
        {
            issueName: "Anxiety",
            progress: "100%"
        },
        {
            issueName: "Bipolar",
            progress: "100%"
        },
        {
            issueName: "Test",
            progress: 40
        }
    ]


    return <div className="flex flex-col mt-4">
        {
            <ul
                className="charts-css legend legend-circle outline outline-2 outline-furious-green-3 rounded-2xl">
                {
                    messages.map((message) => (
                        <li>
                            {message.issueName}
                        </li>
                    ))
                }
            </ul>
        }
    </div>;
}

