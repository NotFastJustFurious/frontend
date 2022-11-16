import NavigationBar from "../../component/NavigationBar";
import LogCard from "../../component/LogCard";
// import SlideTab from "../../component/Tab";
import { useState, useEffect } from "react";
import { sendProfileGet } from "../../utils/Request";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function Profile() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        sendProfileGet().then((res) => {
            if (res.ok) {
                res.json().then(body => {
                    return body.data;
                }).then(body => {
                    setUserData(body)
                });
            } else {
                window.location.href = "/login";
            }
        });
    }, [])

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center">
                <div className="w-full">
                    <NavigationBar authenticated></NavigationBar>
                </div>
                <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    {userData.firstName || "..."} {userData.lastName}

                </div>
                <div className="mt-1 text-center text-m text-gray-600">
                    {userData.type ? capitalize(userData.type) : "..."}
                </div>

                <div className="flex flex-row items-center justify-center mt-4">
                    <div>
                        <button
                            type="button"
                            className="rounded-full w-30 min-h-4 py-2 px-6 ml-2 bg-furious-green"
                            onClick={() => window.location.href = "/progress"}>
                            Progress
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="rounded-full w-30 min-h-4 py-2 px-6 ml-2 bg-furious-green"
                            onClick={() => window.location.href = "/findDoctor"}>
                            Find Therapist
                        </button>
                    </div>
                </div>
                {/* <SlideTab></SlideTab> */}
                <LogCard className="flex-grow w-full border-t-2 mt-4 p-8 overflow-y-scroll"></LogCard>
            </div>
        </>
    )
}