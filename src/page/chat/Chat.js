import NavigationBar from "../../component/NavigationBar";
import LogCard from "../../component/LogCard";

export default function Chat() {

    return <div className="flex flex-col h-screen">
        <NavigationBar></NavigationBar>
        <dev className="text-2xl font-bold w-full flex flex-row justify-center items-center h-16 bg-furious-green-3">
            <div>
                Therapist A
            </div>
        </dev>
        <LogCard border={false} className="flex-grow"></LogCard>

        <div className="w-full flex flex-row h-16 p-3.5">
            <input type="text" className="w-2/3 h-full rounded-l-lg"></input>
            <button className="w-1/3 h-full outline outline-1 outline-furious-green-2 rounded-r-lg">Submit</button>
        </div>
    </div>;
}