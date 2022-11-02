export default function LogCard() {

    let messages = [
        {
            author: "John Doe",
            content: "Why",
            time: "10 minutes ago"
        },
        {
            author: "John Die",
            content: "I'd love to talk to Dr Cow more",
            time: "12 minutes ago"
        },
        {
            author: "John Die",
            content: "Please just kill me already!",
            time: "24 minutes ago"
        }
    ]


    return <div className="flex flex-col mt-4">
        {
            messages.map((message) => {
                return <div
                    className="flex flex-row m-2 items-center text-center p-5 rounded-2xl outline outline-2 outline-furious-green-3 hover:bg-furious-green-3 transition">
                    <div className="min-w-fit pr-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto rounded-full bg-gray-100 border-2 border-furious-green w-10 h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start">
                        <div className="text-xs w-full flex flex-row justify-between">
                            <div>
                                {message.author}
                            </div>
                            <div>
                                {message.time}
                            </div>
                        </div>
                        <div>
                            {message.content}
                        </div>
                    </div>
                </div>
            })
        }
    </div>;
}