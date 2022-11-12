import NavigationBar from "../../component/NavigationBar";
//TODO add layout
export default function Chat() {

    let messages = [
        {
            id: "1",
            content: "Hello Opal",
            time: "10 minutes ago"
        },
        {
            id: "2",
            content: "Hi Pakgard",
            time: "12 minutes ago"
        },
        {
            id: "1",
            content: "Please just kill me already!",
            time: "24 minutes ago"
        },
        {
            id: "2",
            content: "Okay",
            time: "24 minutes ago"
        },
        {
            id: "2",
            content: "Hi Pakgard",
            time: "12 minutes ago"
        },
        {
            id: "1",
            content: "Please just kill me already!",
            time: "24 minutes ago"
        },
        {
            id: "2",
            content: "Okay",
            time: "24 minutes ago"
        },
        {
            id: "2",
            content: "Hi Pakgard",
            time: "12 minutes ago"
        },
        {
            id: "1",
            content: "Please just kill me already!",
            time: "24 minutes ago"
        },
        {
            id: "2",
            content: "Okay",
            time: "24 minutes ago"
        },

    ]

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center ">
                <div className="w-full">
                    <NavigationBar authenticated></NavigationBar>
                </div>
                <div className="text-2xl font-bold w-full flex flex-row justify-center items-center h-16 bg-furious-green-3">

                <div>
                        Therapist A
                    </div>
                    </div>


                <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl  overflow-hidden">
                    <div className="flex flex-col flex-grow p-4 overflow-auto">
                        <div className="p-5">
                            <div className="chat-box">
                                {messages.map((message, time) => (
                                    <div key={time} className={`${message.id === "2" ? 'mr-2 py-3 px-4 bg-furious-green rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white ml-auto right' : 'left'}  my-3 w-fit shadow-lg p-4 rounded-lg`}>
                                        {/* <span className={`${message.id === "2" ? '  text-green-500' : 'text-orange-500'} rounded font-extrabold`}>{message.id}</span> */}
                                        <p className="md:text-base">{message.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-300 p-4">
                        <input type="text" className="w-2/3 h-full rounded-l-lg"></input>
                        <button className="w-1/3 h-full outline outline-1 outline-furious-green-2 rounded-r-lg">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
                                }