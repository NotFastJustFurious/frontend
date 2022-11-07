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
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/testanxiety">
                        Anxiety Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/testbipolar">
                        Bipolar Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/testdepression">
                        Depression Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/testocd">
                        OCD Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/testpanic">
                        Panic Test
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/testparanoia">
                        Paranoia Test
                    </a>
                </div>
            </div>
        </>
    )
}