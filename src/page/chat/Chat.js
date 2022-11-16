import { useState, useEffect, useRef } from "react";
import { sendTherapySessionGet } from "../../utils/Request";
import { getCookie, getArgument } from "../../utils/Cookie";

import SocketClient from "../../utils/SocketClient"
import NavigationBar from "../../component/NavigationBar";


export default function Chat() {
    const dataRef = useRef({
        messages: []
    });
    const [renderCounter, setRenderCounter] = useState(0);

    let data = dataRef.current;
    let messages = dataRef.current.messages;

    const [textBoxMessage, setTextBoxMessage] = useState("");
    const socketRef = useRef();

    const forceRender = (() => {
        setRenderCounter(Math.random());
    }).bind(this);

    useEffect(() => {
        sendTherapySessionGet().then(res => {
            if (res.ok) {
                res.json().then(resData => {
                    data.title = resData.data.therapist;
                });
            }
        })

        socketRef.current = new SocketClient();
        socketRef.current.handleChat((message) => {
            data.messages.push({
                type: 0,
                message
            })
            forceRender();
            setTimeout(forceRender, 1000);
        });
        socketRef.current.auth(getCookie("sessionId")).then(result => {
            console.log(`auth: ${result}`);
        });

        let patient = getArgument("patient");
        console.log("patient", patient);
        if (patient != null) {
            socketRef.current.emitSelect(patient);
        }

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textBoxMessage === "") return;
        socketRef.current.emitChat(textBoxMessage);

        data.messages.push({
            type: 1,
            message: textBoxMessage
        })
        forceRender();
        setTextBoxMessage("");
    };

    useEffect(() => {
        setTimeout(() => {
            let box = document.getElementById("chat-box");
            if (!box || !box.lastChild) return;
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
                        {data.title}
                    </div>
                </div>


                <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl  overflow-hidden">
                    <div className="flex flex-col flex-grow p-4 overflow-auto">
                        <div className="p-2">
                            <div className="chat-box" id="chat-box">
                                {messages.map((message, index) => (
                                    <div key={index} className={`${message.type ? 'mr-2 py-3 px-4 bg-furious-green rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white ml-auto right' : 'left'}  my-3 w-fit shadow-lg p-4 rounded-lg`}>
                                        {/* <span className={`${message.id === "2" ? '  text-green-500' : 'text-orange-500'} rounded font-extrabold`}>{message.id}</span> */}
                                        <p className="md:text-base">{message.message}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form class="bg-gray-300 p-4">
                        <input type="text" className="w-2/3 h-full rounded-l-lg" value={textBoxMessage} onChange={e => setTextBoxMessage(e.target.value)}></input>
                        <input type="submit" className="w-1/3 h-full outline outline-1 outline-furious-green-2 rounded-r-lg" onClick={handleSubmit}></input>
                    </form>
                </div>
            </div>
        </>
    )
}