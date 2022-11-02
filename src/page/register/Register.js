import NavigationBar from "../../component/NavigationBar";
import {useState} from "react";

export default function Register() {

    const [success, setSuccess] = useState(false);

    let onSubmit = (e) => {
        setSuccess(true);
        console.log("submit");
    };
    onSubmit = onSubmit.bind(this);

    console.log("Success: " + success);
    if (success) {
        setTimeout(() => {
            window.location.href = "/profile";
        }, 1000);
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
                        <form className="mt-8 space-y-6" action="#" method="POST">
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
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email address"
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
                                    />
                                </div>

                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg--600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-00 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={onSubmit}
                                >

                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <div className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                         aria-hidden="true"/>
                                </span>
                                    Sign up
                                </button>
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