import NavigationBar from "../../component/NavigationBar";

export default function Survey() {
    return (
        <>
            <NavigationBar hideLoginButton></NavigationBar>
            <div className="flex min-h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">

                <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Surveys
                </div>
                <div className="flex flex-col item-left divide-y divide-gray">
                    <a className="mt-6 indent-6 text-m text-black-600" href="/test/anxiety">
                        Anxiety Test
                    </a>
                    <a className="mt-1 indent-6 text-m text-black-600" href="/test/bipolar">
                        Bipolar Test
                    </a>
                    <a className="mt-1 indent-6 text-m text-black-600" href="/test/depression">
                        Depression Test
                    </a>
                    <a className="mt-1 indent-6 text-m text-black-600" href="/test/ocd">
                        OCD Test
                    </a>
                    <a className="mt-1 indent-6 text-m text-black-600" href="/test/panic">
                        Panic Test
                    </a>
                    <a className="mt-1 indent-6 text-m text-black-600" href="/test/paranoia">
                        Paranoia Test
                    </a>
                    <a className="mt-1 indent-6 text-m text-black-600" href="/test/paranoia">
                    </a>
                </div>
            </div>
            </div>
        </>
    )
}