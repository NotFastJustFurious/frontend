import { useState, useEffect } from "react";
import { sendTherapySessionGet } from "../../utils/Request";
import { sendTherapySendMessagePatient } from "../../utils/Request";


import NavigationBar from "../../component/NavigationBar";

export default function Chat() {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(undefined);
    const [textBoxMessage, setTextBoxMessage] = useState("");

    if (!loaded) {
        setLoaded(true);
        
        sendTherapySessionGet().then(res => {
            if (res.ok) {
                res.json().then(resData => {
                    setData(resData.data);
                });
            }
        })
    }

    let messages = []

    if (data !== undefined) {
        for (let entry of data.messages) {
            console.log(entry)
            entry.our = entry.author === data.patient;
        }

        console.log(data);

        messages = data.messages;
    }

    const handleSubmit = (e) => {
        if (textBoxMessage === "") return;
        sendTherapySendMessagePatient(textBoxMessage);
        setTextBoxMessage("");
        window.location.href = window.location.href; //TODO do a proper refresh without refreshing the page
    };

    useEffect(() => {
        setTimeout(() => {
            let box = document.getElementById("chat-box");
            box.lastChild.scrollIntoView();
        }, 10);
    });

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center bg-furious-green-3">
                <div className="w-full">
                    <NavigationBar authenticated></NavigationBar>
                </div>
                <div className="flex felx-row justify-center item-center h-16 w-full bg-furious-green-2">
                    <div className="flex justify-self-start item-start">
                        <button type="button" className="rounded-full w-25 min-h-3 py-1 px-3 ml-2 bg-furious-green-4"
                            onClick={() => window.location.href = "/Profile"}>
                            End Session
                        </button>
                    </div>
                    <div className="text-2xl font-bold w-full flex flex-row justify-center items-center">
                        Therapist A
                    </div>
                </div>


                <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl  overflow-hidden">
                    <div className="flex flex-col flex-grow p-4 overflow-auto">
                        <div className="p-2">
                            <div className="chat-box" id="chat-box">
                                {messages.map((message) => (
                                    <div key={message.timestamp} className={`${message.our ? 'mr-2 py-3 px-4 bg-furious-green rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white ml-auto right' : 'left'}  my-3 w-fit shadow-lg p-4 rounded-lg`}>
                                        {/* <span className={`${message.id === "2" ? '  text-green-500' : 'text-orange-500'} rounded font-extrabold`}>{message.id}</span> */}
                                        <p className="md:text-base">{message.message}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-300 p-4">
                        <input type="text" className="w-2/3 h-full rounded-l-lg" value={textBoxMessage} onChange={e => setTextBoxMessage(e.target.value)}></input>
                        <button className="w-1/3 h-full outline outline-1 outline-furious-green-2 rounded-r-lg" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}