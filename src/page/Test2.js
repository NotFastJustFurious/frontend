import { useState } from "react";

export default function Test2() {
    const [page, setPage] = useState(0);

    const changePage = () => {
        setPage(page ? 0 : 1);
    }

    let content;
    switch (page) {
        case 0:
            content = <>
                Hello
            </>;
            break;

        case 1:
            content = <>
                Haiiiiii
            </>;
            break;
    };

    return (
        <>
            <div>
                <button onClick={changePage} className="p-5 bg-furious-green">
                    Toggle
                </button>
            </div>
            <div>
                {content}
            </div>


        </>
    );
}