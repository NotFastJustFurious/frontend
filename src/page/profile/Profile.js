import NavigationBar from "../../component/NavigationBar";
import PatientProfileTabs from "../../component/PatientProfileTabs";
import TherapistProfileTabs from "../../component/TherapistProfileTabs";
import { useState, useEffect } from "react";
import { sendProfileGet, sendCreateTherapySession} from "../../utils/Request";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function Profile() {
    const [userData, setUserData] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    let onSubmit = (e) => {
        sendCreateTherapySession().then(result => {
            if (result.ok) {
                setSuccess(true);
                window.location.href = "/chat";
            }
            else {
                result.json().then(data => {
                    setError(data.error);
                })
            }
        });
    };

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

    const tabs = userData.type === "therapist" ? <TherapistProfileTabs /> : <PatientProfileTabs />;

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full">
                    <NavigationBar authenticated></NavigationBar>
                </div>
                <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    {userData.firstName || "..."} {userData.lastName}
                </div>
                <div className="mt-1 text-center text-m text-gray-600">
                    {userData.type ? capitalize(userData.type) : "..."}
                </div>
                <div className="flex-grow w-full">
                    {tabs}
                </div>
            </div>
        </>
    )
}