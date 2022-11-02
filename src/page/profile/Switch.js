//TODO spilt to components and add css
import LogCard from "../../component/LogCard";
import { useState } from "react";

const Tabs = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <>
            <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            >
                <li className="">
                    <a
                        className={(openTab === 1)}
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                    >
                        <i className="">Profile</i> 
                    </a>
                </li>
                <li className="">
                    <a
                        className={(openTab === 2)}
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                    >
                        <i className="">Settings</i>  
                    </a>
                </li>
            </ul>
            <div className="">
                <div className={openTab === 1 ? "block" : "hidden"}>
                    <p>
                        table
                    </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                    <LogCard></LogCard>
                </div>
            </div>
        </>
    )
};

export default function Toggle() {
    return (
        <>
            <Tabs />
        </>
    );
}