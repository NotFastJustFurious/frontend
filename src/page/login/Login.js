import './Login.css';
import NavigationBar from "../../component/NavigationBar";

function Login() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <div className={"h-30 w-30 bg-blue-300"}>Login here</div>
        </div>
    );
}

export default Login;
