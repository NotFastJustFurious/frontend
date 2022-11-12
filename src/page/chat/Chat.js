import NavigationBar from "../../component/NavigationBar";

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
            content: "Please just kill me already!",
            time: "24 minutes ago"
        },
    ]

    return <div className="flex flex-col h-screen">
        <NavigationBar></NavigationBar>
        <dev className="text-2xl font-bold w-full flex flex-row justify-center items-center h-16 bg-furious-green-3">
            <div>
                Therapist A
            </div>
        </dev>
        <div class="flex flex-col">
            <div className="p-5 md:mx-20 lg:mx-40">
              <div className="chat-box">
                {messages.map((message, time) => (
                  <div key={time} className={`${message.id === "2" ? 'mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white ml-auto right' : 'left'}  my-3 w-fit shadow-lg p-4 rounded-lg`}>
                    {/* <span className={`${message.id === "2" ? '  text-green-500' : 'text-orange-500'} rounded font-extrabold`}>{message.id}</span> */}
                    <p className="md:text-base">{message.content}</p>
                  </div>
                ))}
              </div>
            </div>
            </div>
        <div className="w-full flex flex-row h-16 p-3.5">
            <input type="text" className="w-2/3 h-full rounded-l-lg"></input>
            <button className="w-1/3 h-full outline outline-1 outline-furious-green-2 rounded-r-lg">Submit</button>
        </div>
    </div>;
}