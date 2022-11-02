import NavigationBar from "../../component/NavigationBar";
import LogCard from "../../component/LogCard";
import Login from "../login/Login";

export default function Profile() {
    return (
        <>
            <NavigationBar></NavigationBar>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <img
                    className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-gray-100 border-2 border-furious-green"
                    src="https://www.electrolux.co.th/globalassets/catalog/toasters--grills/e4ts1-50ss-angl-1500x1500-new.png"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Firstname Lastname
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Patient
                    </a>
                </p>

                <LogCard></LogCard>

                <div>
                    {/* <img
                            className="rounded-full mx-auto absolute border"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        /> */}
                </div>
            </div>
        </>
    )
}