import NavigationBar from "../../component/NavigationBar";
import { useState , useRef} from "react";
import { FaStar } from 'react-icons/fa' // (https://react-icons.github.io/react-icons)
import { sendAddRecord } from "../../utils/Request";
import { getArgument } from "../../utils/Cookie";
import ListBox from "../../component/ListBox";

export default function FeedBack() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [note, setNote] = useState("")
    const [selectedType, setSelectedType] = useState("")
    // console.log(selectedType)

    let patient = getArgument("patient");
    console.log("patient", patient);

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const handleClick = value => {
        setCurrentValue(value)
        // console.log(currentValue)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    let onSubmit = (e) => {
        sendAddRecord(patient, note, currentValue, selectedType).then(result => {
            if (result.ok) {
                setSuccess(true);
                window.location.href = "/Profile";
            }
            else {
                result.json().then(data => {
                    setError(data.error);
                })
            }
        });
    };
    
    onSubmit = onSubmit.bind(this);

    return (
        <>
            <div className="justify-center item-top">
                <NavigationBar authenticated></NavigationBar>
            </div>
            <div className="flex flex-col justify-center item-center">
                <div className="flex justify-center item-center">
                    <a className="text-furious-green text-2xl text-bold"> Feedback </a>
                </div>
                <ListBox setSelectedType={setSelectedType}></ListBox>
                <div className="flex flex-row justify-center item-center mt-5">
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={36}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? "#FFBA5A" : "#a9a9a9"}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                            />
                        )
                    })}
                    <div className="">
                    </div>
                </div>
                <div class="sm:col-span-2 mt-3">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                        <textarea 
                            id="description" 
                            rows="4" 
                            class="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            onChange={e => setNote(e.target.value)}
                            placeholder="Doctor description"
                        />                   
                    </div>
                <div className="flex flex-row justify-center w-full mt-5">
                    <button
                        onClick={onSubmit}
                        className="flex w-1/8 justify-end item-end rounded-md border border-transparent bg-furious-green py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>
            </div>
            <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
        </>
    )
}

