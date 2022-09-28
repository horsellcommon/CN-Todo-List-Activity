import { useState } from "react";

const FinishedList = () => {
    const [list, setList] = useState([]);

    const addToList = () => {
        const temporary = [...list];
        temporary.push();
        setList(temporary);
    };

    return (
        <div>
            <button class="centered" onClick={addToList}>PUSH TO COMPLETED LIST</button>
            <h1 class="centered"><u>DONE</u></h1>
            <div id="mapper">
                <ul>
                    {list.map((item, chindex) => {
                        return <li key={item}>{item}</li>;                
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FinishedList