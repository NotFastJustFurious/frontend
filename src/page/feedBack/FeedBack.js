import NavigationBar from "../../component/NavigationBar";
import { useState } from "react";
import { FaStar } from 'react-icons/fa' // (https://react-icons.github.io/react-icons)
import { sendAddRecord } from "../../utils/Request";
import ListBox from "../../component/ListBox";

export default function FeedBack() {

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    // let onSubmit = (e) =>
    //     e.preventDefault();

    //     sendAddRecord({}).then(result => {
    //         if (result.ok) {
    //             setSuccess(true);
    //         }
    //         else{
    //             result.json().then(data => {
    //                 setError(data.error);
    //             })
    //         }
    //     });

    return (
        <>
            <div className="justify-center item-top">
                <NavigationBar authenticated></NavigationBar>
            </div>
            <div className="flex flex-col justify-center item-center">
                <div className="flex justify-center item-center">
                    <a className="text-furious-green text-2xl text-bold"> Feedback </a>
                </div>

                <div className="flex flex-row justify-center item-center">
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={48}
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
                        <ListBox></ListBox>
                    </div>
                </div>
                <br></br>
                <div className="flex flex-col justify-center item-center">
                <textarea placeholder="Doctor description" className="border-1 border-solid border-grey rounded-r-4 p-10 mx-20 min-h-100 w-300"/>
                </div>
                <br></br>
                <div className="flex flex-row justify-end w-full">
                    <button className="flex w-1/8 justify-end item-end rounded-md border border-transparent bg-furious-green py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>
            </div>
            <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
        </>
    )
}

