import './App.css';
import NavigationBar from "../../component/NavigationBar";

function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <div className={"w-full p-16"}>
                <div className={" text-5xl md:text-9xl"}>
                    Karmental Rider
                </div>
                <div className={"text-2xl md:text-4xl pt-10"}>
                    Kick your Mental Issues away with Kamental-Rider
                </div> 
            </div>
            <div>
                <img className={"w-full"} src={"./homePageKarmental.png"} alt="karmental"/>
            </div>
        </div>
    );
}

export default App;
