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
                    <br></br>
                    is your head as hot and toasty as this toaster?
                    <br></br>
                    stop being a toasty toaster and join us!
                    <br></br>
                    moew moew
                </div> 
            </div>
            <div>
                <img className={"w-full"} src={"https://www.electrolux.co.th/globalassets/catalog/toasters--grills/e4ts1-50ss-angl-1500x1500-new.png"} alt="Toaster"/>
            </div>
        </div>
    );
}

export default App;
