import NavigationBar from "../../component/NavigationBar";
//Survey Questions is arrange by Anxiety, Depression, PTSD, OCD, Eating Disorder.
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
            anxscore3 = parseInt(getRadioSelectedValue('anx-score-3')),

            depscore1 = parseInt(getRadioSelectedValue('dep-score-1')),
            depscore2 = parseInt(getRadioSelectedValue('dep-score-2')),
            depscore3 = parseInt(getRadioSelectedValue('dep-score-3')),

            ptsdscore1 = parseInt(getRadioSelectedValue('ptsd-score-1')),
            ptsdscore2 = parseInt(getRadioSelectedValue('ptsd-score-2')),
            ptsdscore3 = parseInt(getRadioSelectedValue('ptsd-score-3')),

            ocdscore1 = parseInt(getRadioSelectedValue('ocd-score-1')),
            ocdscore2 = parseInt(getRadioSelectedValue('ocd-score-2')),
            ocdscore3 = parseInt(getRadioSelectedValue('ocd-score-3')),

            edscore1 = parseInt(getRadioSelectedValue('ed-score-1')),
            edscore2 = parseInt(getRadioSelectedValue('ed-score-2')),
            edscore3 = parseInt(getRadioSelectedValue('ed-score-3')),

            anxtotal = 0,
            deptotal = 0,
            ptsdtotal = 0,
            ocdtotal = 0,
            edtotal = 0;

        anxtotal = anxscore1 + anxscore2;
        deptotal = depscore1 + depscore2;
        ptsdtotal = ptsdscore1 + ptsdscore2;
        ocdtotal = ocdscore1 + ocdscore2;
        edtotal = edscore1 + edscore2;
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
                    Anxiety - Are you easily upset even with the slightest failure?    
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

                <div className="text-xs w-full flex flex-row justify-between">
                    Anxiety - Do you feel like you are on edge?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="anx-score-3"
                        />Never
                        <input 
                            type="radio" 
                            value="2" 
                            name="anx-score-3"
                        />Rarely
                        <input 
                            type="radio" 
                            value="3" 
                            name="anx-score-3"
                        />Sometimes
                        <input
                            type="radio" 
                            value="4" 
                            name="anx-score-3"
                        />Often
                        <input 
                            type="radio" 
                            value="5" 
                            name="anx-score-3"
                        />Always
                    </div>    
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    Depression - Do you feel sad, depressed, or hopeless?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="dep-score-1"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="dep-score-1"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="dep-score-1"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="dep-score-1"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="dep-score-1"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    Depression - Do you feel like you have no energy?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="dep-score-2"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="dep-score-2"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="dep-score-2"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="dep-score-2"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="dep-score-2"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    Depression - Do you feel like you have no interest in things?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="dep-score-3"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="dep-score-3"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="dep-score-3"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="dep-score-3"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="dep-score-3"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    PTSD - Do you have nightmares?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ptsd-score-1"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ptsd-score-1"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ptsd-score-1"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ptsd-score-1"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ptsd-score-1"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    PTSD - Do you have flashbacks?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ptsd-score-2"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ptsd-score-2"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ptsd-score-2"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ptsd-score-2"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ptsd-score-2"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    PTSD - Do you have trouble sleeping?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ptsd-score-3"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ptsd-score-3"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ptsd-score-3"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ptsd-score-3"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ptsd-score-3"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    OCD - Do you have repetitive thoughts?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ocd-score-1"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ocd-score-1"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ocd-score-1"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ocd-score-1"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ocd-score-1"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    OCD - Do you worry excessively about dirt, germs, or chemicals?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ocd-score-2"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ocd-score-2"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ocd-score-2"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ocd-score-2"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ocd-score-2"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    OCD - Do you wash yourself or things around you excessively?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ocd-score-3"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ocd-score-3"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ocd-score-3"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ocd-score-3"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ocd-score-3"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    Eating Disorder - Do you feel like you have to eat a certain amount of food?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ed-score-1"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ed-score-1"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ed-score-1"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ed-score-1"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ed-score-1"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    Eating Disorder - Do you make yourself sick (induce vomiting) because you feel uncomfortably full?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ed-score-2"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ed-score-2"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ed-score-2"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ed-score-2"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ed-score-2"
                        />Always
                    </div>
                </div>

                <div className="text-xs w-full flex flex-row justify-between">
                    Eating Disorder - Would you say that food dominates your life?
                </div>
                <div className="text-xs w-full flex flex-row justify-between">
                    <div>
                        <input
                            type="radio"
                            value="1"
                            name="ed-score-3"
                        />Never
                        <input
                            type="radio"
                            value="2"
                            name="ed-score-3"
                        />Rarely
                        <input
                            type="radio"
                            value="3"
                            name="ed-score-3"
                        />Sometimes
                        <input
                            type="radio"
                            value="4"
                            name="ed-score-3"
                        />Often
                        <input
                            type="radio"
                            value="5"
                            name="ed-score-3"
                        />Always
                    </div>
                </div>

                <button id="calculate" value="calculate" onClick={onClick}>Confirm</button>
            </div>
        </>
    )
}