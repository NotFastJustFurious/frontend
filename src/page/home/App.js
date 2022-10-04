import './App.css';
import NavigationBar from "../../component/NavigationBar";

function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <div className={"w-full p-16"}>
                <div className={" text-5xl md:text-9xl"}>
                    Toaster
                </div>
                <div className={"text-2xl md:text-4xl pt-10"}>
                    toaster toaster toasting things
                </div>
            </div>
            <div>
                <img className={"w-full"} src={"https://www.electrolux.co.th/globalassets/catalog/toasters--grills/e4ts1-50ss-angl-1500x1500-new.png"}/>
            </div>
        </div>
    );
}

export default App;
