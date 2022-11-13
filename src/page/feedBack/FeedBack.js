import NavigationBar from "../../component/NavigationBar";
import { useState } from "react";
import { FaStar } from 'react-icons/fa' // (https://react-icons.github.io/react-icons)

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
    return (
        <>
            <div className="justify-center item-top">
                <NavigationBar authenticated></NavigationBar>
            </div>
            <div className="flex flex-col justify-center item-center">
                <div className="flex justify-center item-center">
                    <a className="text-furious-green text-2xl text-bold"> Feedback </a>
                </div>
                <div className="max-w-lg mx-auto">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
                                </li>
                                <li>
                                    <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
                                </li>
                                <li>
                                    <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
                                </li>
                                <li>
                                    <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                                </li>
                            </ul>
                        </div>
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