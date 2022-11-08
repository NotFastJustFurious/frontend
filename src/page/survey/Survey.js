import NavigationBar from "../../component/NavigationBar";

export default function Survey() {
    return (
        <>
            <NavigationBar hideLoginButton></NavigationBar>
            <div className="flex flex-col justify-center">
                <div className="items-center text-center">
                    Surveys
                </div>
                <div className="flex flex-col item-left divide-y divide-furious-green">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/test/anxiety">
                        Anxiety Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/test/bipolar">
                        Bipolar Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/test/depression">
                        Depression Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/test/ocd">
                        OCD Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/test/panic">
                        Panic Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/test/paranoia">
                        Paranoia Test
                    </a>
                </div>
            </div>
        </>
    )
}