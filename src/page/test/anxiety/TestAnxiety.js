import NavigationBar from "../../../component/NavigationBar";
import Test from "../../../component/TestSurvey";
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
                <Test className="flex-grow w-full border-t-2 mt-4 p-8 overflow-y-scroll"></Test>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You feel anxious, worried, or restless?
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You cannot stop or control your worries?
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You were overly worried about many things?
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You have trouble relaxing your mood?
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You feel so restless that you can't stay still.
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You become irritable or easily irritated.
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You feel afraid that something bad will happen.
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You feel unable to start doing what you need to do.
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You feel that you have nothing to look forward to in life.
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        You are easily upset even with the slightest failure?
                        <br></br>
                        <input type="radio"/>Never
                        <input type="radio"/>Rarely
                        <input type="radio"/>Sometime
                        <input type="radio"/>Often
                        <input type="radio"/>Alway
                    </div>
                </div>
            </div>
        </>
    )
}