import NavigationBar from "../../../component/NavigationBar";

export default function Survey() {
    return (
        <>
            <NavigationBar hideLoginButton></NavigationBar>
            <div className="flex flex-col justify-center">
                <div className="items-center text-center">
                    Anxiety Test
                </div>
                <div className="flex flex-col item-left divide-y divide-furious-green">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 1
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 2
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 3
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 4
                    </a>
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 5
                    </a>
                </div>
            </div>
        </>
    )
}