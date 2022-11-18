import NavigationBar from "../component/NavigationBar";
import Issue from "../component/Issue";

export default function Progress(){
    return (
        <>
                    <div className="flex flex-row min-h-full items-center justify-center gap-x-2 mt-5">
                        <div  className="bg-furious-green h-20 w-5 text-xs">
                            OCD
                        </div>
                        <div className="bg-furious-comp-2 h-20 w-5 text-xs">
                            AX
                        </div>
                        <div className="bg-furious-comp-1 h-20 w-5 text-xs">
                            Bip
                        </div>
                </div>
            <Issue></Issue>
        </>
    )
}