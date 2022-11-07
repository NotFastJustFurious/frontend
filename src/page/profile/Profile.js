import NavigationBar from "../../component/NavigationBar";
import LogCard from "../../component/LogCard";
import {useEffect, useState} from "react";
import {sendProfileGet} from "../../utils/Request";

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function Profile() {
    const onPro = (e) => {
        window.location.href = "/progress";
    }
    const onSur = (e) => {
        window.location.href = "/survey";
    }

    const [loadState, setLoadState] = useState(false);
    const [userData, setUserData] = useState({});

    if (!loadState) {
        setLoadState(true);

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
    }

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center">
                <div className="w-full">
                    <NavigationBar authenticated></NavigationBar>
                </div>
                <img
                    className="mx-auto h-24 w-24 rounded-full bg-gray-100 border-2 border-furious-green"
                    src="https://www.electrolux.co.th/globalassets/catalog/toasters--grills/e4ts1-50ss-angl-1500x1500-new.png"
                    alt="toaster"
                />
                <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    {userData.firstName || "..."} {userData.lastName}

                </div>
                <div className="mt-2 text-center text-sm text-gray-600">
                    <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                        {userData.type ? capitalize(userData.type) : "..."}
                    </a>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <div>
                        <button
                            type="button"
                            className="rounded-full w-24 bg-furious-green"
                            onClick={onSur}>
                            Take Survey
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="rounded-full w-24 bg-furious-green"
                            onClick={onPro}>
                            Progress
                        </button>
                    </div>
                </div>
                <LogCard className="flex-grow w-full border-t-2 mt-16 p-8 overflow-y-scroll"></LogCard>
            </div>
        </>
    )
}