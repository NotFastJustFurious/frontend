import { useState } from "react";
import NavigationBar from "../../component/NavigationBar";
import { sendSurveyResponse } from "../../utils/Request";
//Survey Questions is arrange by Anxiety, Depression, PTSD, OCD, Eating Disorder.
//Where it is weigth 1-5 score of each category (Max 15 for each category)

export default function Survey() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


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
    }

    const onClick = function(event) {
        event.preventDefault();
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

        anxtotal = anxscore1 + anxscore2 + anxscore3;
        deptotal = depscore1 + depscore2 + depscore3;
        ptsdtotal = ptsdscore1 + ptsdscore2 + ptsdscore3;
        ocdtotal = ocdscore1 + ocdscore2 + ocdscore3;
        edtotal = edscore1 + edscore2 + edscore3;
        // console.log("anxtotal - ",anxtotal,"deptotal - ",deptotal,"ptsdtotal - ", ptsdtotal,"ocdtotal - ",ocdtotal,"edtotal - ",edtotal);
        window.location.href = "/profile";
    }


    return (
        <>
            <NavigationBar hideLoginButton></NavigationBar>
            <div className="flex flex-col justify-center divide-y divide-gray">
                <div className="items-center text-center text-xl">
                    Survey Questions
                </div>
                <form className="flex flex-col divide-y divide-gray">
                    <div className="flex flex-col w-full justify-between">
                        <div className="text-m font-bold w-full justify-between">
                            Do you feel anxious, worried, or restless?    
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="anx-score-1"
                                required
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

                    <div className="flex flex-col text-m w-full justify-between">
                        <div className="text-m font-bold w-full justify-between">
                            Are you easily upset even with the slightest failure?    
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="anx-score-2"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between">
                            Do you feel like you are on edge?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="anx-score-3"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Depression - Do you feel sad, depressed, or hopeless?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="dep-score-1"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full flex justify-between">
                            Do you feel like you have no energy?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="dep-score-2"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you feel like you have no interest in things?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="dep-score-3"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you have nightmares?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ptsd-score-1"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you have flashbacks?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ptsd-score-2"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you have trouble sleeping?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ptsd-score-3"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between">
                            Do you have repetitive thoughts?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ocd-score-1"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you worry excessively about dirt, germs, or chemicals?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ocd-score-2"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you wash yourself or things around you excessively?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ocd-score-3"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you feel like you have to eat a certain amount of food?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ed-score-1"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Do you make yourself sick (induce vomiting) because you feel uncomfortably full?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ed-score-2"
                                required
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

                    <div className="text-m w-full flex flex-col justify-between">
                        <div className="text-m font-bold w-full justify-between divide-y divide-gray">
                            Would you say that food dominates your life?
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="1"
                                name="ed-score-3"
                                required
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

                    <input type="submit" value="Submit" className="rounded-full w-1/6 min-h-4 py-2 px-6 ml-2 bg-furious-green" onClick={onClick}/>
                </form>
            </div>
        </>
    )
}