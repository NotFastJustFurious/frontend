import { sendRecordGet } from "../utils/Request";
import { useState, useEffect } from "react";

export default function History(props) {
    const [records, setRecord] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        sendRecordGet().then((res) => {
            if (res.ok) {
                res.json().then(body => {
                    console.log("body", body)
                    return body.data;
                }).then(body => {
                    setRecord(body)
                });
            } else {
                res.json().then(data => {
                    setError(data.error);
                })
            }
        });
    }, [])

    let border = true;
    let additionalClasses = ""
    let limit = 100;

    if (props.className) {
        additionalClasses = " " + props.className;
    }

    if (props.limit) {
        this.limit = props.limit;
    }

    return <div className={"flex flex-col overflow-y-scroll" + additionalClasses}>
        {
            records.map((record) => {
                if (limit <= 0) return ("");
                limit--;
                return <div
                    className={"flex flex-row m-2 items-center text-center p-5 rounded-2xl hover:bg-furious-green-3 transition" + (border ? " outline outline-2 outline-furious-green-3" : "")}>
                    <div className="w-full flex flex-col items-start">
                        <div className="text-xs w-full flex flex-row justify-between">
                            {/* <div>
                                Patient : {record.date}
                            </div> */}
                            <div>
                                Patient : {record.patient}
                            </div>
                            <div>
                                Condition : {record.condition}
                            </div>
                        </div>
                        {/* <div>
                            {record.rate}
                        </div> */}
                        <div className="text-left">
                           Note : {record.note}
                        </div>
                    </div>
                </div>
            })
        }
    </div>;
}