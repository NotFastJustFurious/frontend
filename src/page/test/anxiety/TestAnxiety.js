import NavigationBar from "../../../component/NavigationBar";
//TODO a tag error(no href) and change to maps
export default function Survey() {
    return (
        <>
            <NavigationBar hideLoginButton></NavigationBar>
            <div className="flex flex-col justify-center">
                <div className="items-center text-center">
                    Anxiety Test
                </div>
                <div className="flex flex-col item-left divide-y divide-furious-green">
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 1
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 2
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 3
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 4
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        Question 5
                    </div>
                </div>
            </div>
        </>
    )
}