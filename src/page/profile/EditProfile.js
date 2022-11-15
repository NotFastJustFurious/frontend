import NavigationBar from "../../component/NavigationBar";
import {useState} from "react";
import {sendProfileGet} from "../../utils/Request";
import {sendProfileEdit} from "../../utils/Request";


function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function Profile() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    //const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userType, setUserType] = useState("");
    const [dob, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");

    let onSubmit = (e) => {

        sendProfileEdit({firstName, lastName, dob, gender}).then(result => {
            if (result.ok) {
                setSuccess(true);
            }
            else{
                result.json().then(data => {
                    setError(data.error);
                })
            }
        });
        console.log("submit");
    };
    onSubmit = onSubmit.bind(this);
    
    console.log("Success: " + success);
    if (success) {
        setTimeout(() => {
            window.location.href = "/profile";
        }, 1000);
    }

    // console.log(password, firstName, lastName, gender, dob);

    const [loadState, setLoadState] = useState(false);

    if (!loadState) {
        setLoadState(true);

        sendProfileGet().then((res) => {
            if (res.ok) {
                res.json().then(body => {
                    return body.data;
                }).then(body => {
                    setFirstName(body.firstName);
                    setLastName(body.lastName);
                    setUserType(body.type);
                    setDateOfBirth(body.dob);
                    setGender(body.gender)
                });
            } else {
                window.location.href = "/login";
            }
        });
    }

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center">
                <div className="w-full">
                    <NavigationBar authenticated></NavigationBar>
                </div>
                <div className="mt-6">
                <img
                    className="mx-auto h-24 w-24 rounded-full bg-gray-100 border-2 border-furious-green"
                    src="https://www.electrolux.co.th/globalassets/catalog/toasters--grills/e4ts1-50ss-angl-1500x1500-new.png"
                    alt="toaster"
                />
                </div>
                <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    {firstName || "..."} {lastName || ""}

                </div>
                <div className="mt-2 text-center text-sm text-gray-600">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        {userType ? capitalize(userType) : "..."}
                    </a>
                </div>
                <div className="flex-grow w-full border-t-2 mt-16 p-8 overflow-y-scroll">
                <form className="mt-6 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true"/>
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                        Gender
                                    </label>
                                    <input
                                        type="text"
                                        name="gender"
                                        id="gender"
                                        autoComplete="gender"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Gender"
                                        value={gender}
                                        onChange={e => setGender(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="date-of-birth" className="block text-sm font-medium text-gray-700">
                                        Date of birth
                                    </label>
                                    <input
                                        type="date"
                                        name="date-of-birth"
                                        id="date-of-birth"
                                        autoComplete="date-of-birth"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Date of birth"
                                        value={dob}
                                        onChange={e => setDateOfBirth(e.target.value)}
                                    />
                                </div>

                                {/* <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div> */}

                            </div>
                            <div>
                                <div className="bg-gray-50 text-center">
                                    <button
                                        type="button"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-furious-green py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={onSubmit}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}
    