import NavigationBar from "../../component/NavigationBar";

export default function findDoctor() {
    return (
        <>
        <div className="item-top justify-center w-full">
                <NavigationBar authenticated></NavigationBar>
        </div>
        <div className="flex flex-col h-screen items-center justify-center">
            <div>
                <button
                    type="button"
                    className="rounded-full w-30 min-h-4 py-2 px-6 ml-2 bg-furious-green"
                    onClick={() => window.location.href = "/findDoc"}>
                    Find!
                </button>
            </div>
        </div>
        </> 
    )
}