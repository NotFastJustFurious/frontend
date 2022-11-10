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
            <div className="flex-col justify-center item-center">
                <h2> React Ratings </h2>
                <div className="flex-row">
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
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
            <textarea placeholder="What's your experience?" className="border-1 border-solid border-grey rounded-r-5 p-10 mx-20 min-h-100 w-300"/>
            <button className="border-1 border-solid border-grey rounded-r-5 w-300 p-10">
                Submit
            </button>
            </div>
        </>
    )
}