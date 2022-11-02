import NavigationBar from "../../component/NavigationBar";

export default function Profile() {

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

                <div className="flex flex-col mt-4">
                    {
                        messages.map((message) => {
                            return <div className="flex flex-row m-2 items-center text-center p-5 rounded-2xl outline outline-2 outline-furious-green-3 hover:bg-furious-green-3 transition">
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
                </div>

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