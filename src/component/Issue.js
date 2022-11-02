export default function Issue() {

    let messages = [
        {
            issueName: "OCD",
            progress: "100%"
        },
        {
            issueName: "Anxiety",
            progress: "100%"
        },
        {
            issueName: "Bipolar",
            progress: "100%"
        }
    ]


    return <div className="flex flex-col mt-4">
        {
            messages.map((message) => {
                return <div
                    className="flex flex-row m-2 items-center text-center p-5 rounded-2xl outline outline-2 outline-furious-green-3 hover:bg-furious-green-3 transition">
                    <div className="w-full flex flex-col items-start">
                        <div className="text-xs w-full flex flex-row justify-between">
                            <div>
                                {message.issueName}
                            </div>
                            <div>
                                {message.progress}
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>;
}