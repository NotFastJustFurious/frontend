import NavigationBar from "../../component/NavigationBar";
import { TfiHandOpen } from "react-icons/tfi";


export default function findDoctor() {
    return (
        <>
            <div className="item-top justify-center w-full">
                <NavigationBar authenticated></NavigationBar>
            </div>
            <div className="flex justify-center items-center p-2">
                <div className="bg-white border-8 rounded-lg">
                    <div className="w-full flex">
                        <div className="w-1/3 pt-6 flex justify-center">
                            <TfiHandOpen className="w-16 h-16 bg-furious-green text-white p-3 rounded-full" />
                        </div>
                        <div className="w-full pt-9 pr-4">
                            <h3 className="font-bold text-furious-green">We're here to listen</h3>
                            <p className="py-4 text-sm text-gray-400">
                                Are you sure you want to delete all feelings? If you delete your feelings, you will permantly loose everything.
                                </p>
                        </div>
                    </div>

                    <div className="p-4 flex space-x-4 justify-center items-center">
                        <button className="w-1/2 px-4 py-3 text-center text-white bg-furious-green rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"
                            onClick={() => window.location.href = "/findDoc"}>
                            Find!
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div>
<button
    type="button"
    className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"
    onClick={() => window.location.href = "/findDoc"}>
    Find!
</button>
</div> */}