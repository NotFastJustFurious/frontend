export default function TestMap() {
    let messages = [
        {
            id: "1",
            question: "You feel anxious, worried, or restless?"
        },
        {
            id: "2",
            question: "You cannot stop or control your worries?"
        },
    ]
    return <div className="flex flex-col mt-4 divide-y divide-furious-green">
        {
            messages.map((message) => {
                return <div>
                    <div className="text-xs w-full flex flex-row justify-between">
                        <div>
                            {message.question}
                        </div>    
                    </div>
                    <div className="text-xs w-full flex flex-row justify-between">
                        <div>
                        <input 
                            type="radio" 
                            value="1" 
                            name={(message.id)}
                        />Rarely
                        <input 
                            type="radio" 
                            value="2" 
                            name={(message.id)}
                        />Sometimes
                        <input
                            type="radio" 
                            value="3" 
                            name={(message.id)}
                        />Often
                        <input 
                            type="radio" 
                            value="4" 
                            name={(message.id)}
                        />Always
                        </div>    
                    </div>
                </div>

            })
        }
    </div>;
}