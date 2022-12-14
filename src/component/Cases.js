import { useEffect, useState } from "react";
import { sendTherapistSessionList } from "../utils/Request";

export default function Cases(props){

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        sendTherapistSessionList().then(res => {
            if (res.ok) {
                res.json().then(resData => {
                    console.log(resData.data)
                    setMessages(resData.data);
                });
            }
        });
    },[]);

    const onClick = () => {

    }

    let count = 0;
    if (props.count) {
        this.count = props.count;
    }


    return <div className="flex flex-col overflow-y-scroll">
        {
            messages.map((message) => {
                count++;
                return <div
                    className={"flex flex-row m-2 items-center text-center p-5 rounded-2xl hover:bg-furious-green-3 transition outline outline-2 outline-furious-green-3"}
                    onClick={() => window.location.href = "/chat?patient=" + message.patient}
                    >
                    
                    <div className="w-full flex flex-col items-start">
                        <div className="text-xs w-full flex flex-row justify-between">
                            <div>
                                {count}
                            </div>
                            <div>
                                {message.id.substring(0, 8)}
                            </div>
                        </div>
                        <div>
                            {message.patient}
                        </div>
                    </div>
                </div>
            })
        }
    </div>;
}