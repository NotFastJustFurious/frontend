import NavigationBar from "../../component/NavigationBar";
//Survey Questions is arrange by Anxiety, Depression, PTSD, COD, Eating Disorder.
//Where it is weigth 1-5 score of each category (Max 15 for each category)

export default function Survey() {
    const getRadioSelectedValue = function(radioGroup) {
        var radios = document.getElementsByName(radioGroup),
            val;
        //loop through group and return the value attribute of the checked radio.        
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                val = radios[i].value;
            }
        }
        return val;
    };

    const onClick = function() {
        //parse the string value to a int for proper addition
        var anxscore1 = parseInt(getRadioSelectedValue('anx-score-1')),
            anxscore2 = parseInt(getRadioSelectedValue('anx-score-2')),
            anxtotal = 0;

        anxtotal = anxscore1 + anxscore2;
    };

    return (
        <>
            <NavigationBar hideLoginButton></NavigationBar>
            <div className="flex flex-col justify-center">
                <div className="items-center text-center">
                    Survey Questions
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    Anxiety - Do you feel anxious, worried, or restless?    
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="anx-score-1"
                        />Never
                        <input 
                            type="radio" 
                            value="2" 
                            name="anx-score-1"
                        />Rarely
                        <input 
                            type="radio" 
                            value="3" 
                            name="anx-score-1"
                        />Sometimes
                        <input
                            type="radio" 
                            value="4" 
                            name="anx-score-1"
                        />Often
                        <input 
                            type="radio" 
                            value="5" 
                            name="anx-score-1"
                        />Always
                    </div>    
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    Anxiety - Do you feel anxious, worried, or restless?    
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="anx-score-2"
                        />Never
                        <input 
                            type="radio" 
                            value="2" 
                            name="anx-score-2"
                        />Rarely
                        <input 
                            type="radio" 
                            value="3" 
                            name="anx-score-2"
                        />Sometimes
                        <input
                            type="radio" 
                            value="4" 
                            name="anx-score-2"
                        />Often
                        <input 
                            type="radio" 
                            value="5" 
                            name="anx-score-2"
                        />Always
                    </div>    
                </div>
                <button id="calculate" value="calculate" onClick={onClick}>Confirm</button>
            </div>
        </>
    )
}