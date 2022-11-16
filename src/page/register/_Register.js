import NavigationBar from "../../component/NavigationBar";
import {useState} from "react";
import {sendAuthRegister} from "../../utils/Request"

export default function Register() {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");

    let onSubmit = (e) => {
        e.preventDefault();


        sendAuthRegister({username, firstName, lastName, password, dob, gender}).then(result => {
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
            window.location.href = "/mainsurvey";
        }, 3000);
    }

    if (!success) {
        return (
            <>
                <NavigationBar></NavigationBar>

                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                     hidden={success}>
                    <div className="w-full max-w-md space-y-8">
                        <div>
                            {/* <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        /> */}
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign Up
                            </h2>
                        </div>
                        <form id="register-form" className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true"/>
                            <div className="-space-y-px rounded-md shadow-sm">

                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Username"
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </div>

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
                                        onChange={e => setDateOfBirth(e.target.value)}
                                    />
                                </div>

                                <div>
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
                                </div>

                            </div>
                            <div>

                                <div className="bg-gray-50 text-center">
                                    <input
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-furious-green py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={onSubmit}
                                        value="Next"
                                    >
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </>
        )
    } else {
        return (
            <>
                <NavigationBar></NavigationBar>
                <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-32">
                    <div className="text-3xl font-bold text-furious-green">
                        Success!
                    </div>
                    <div>
                        Redirecting you to the home page...
                    </div>
                </div>
            </>
        )
    }
}