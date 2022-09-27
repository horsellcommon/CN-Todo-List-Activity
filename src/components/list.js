import { useState } from "react";

const InputText = () => {
const [input, setInput]  = useState("")
const [list, setList] = useState([]);

const addToList = () => {
    const temporary = [...list];
    temporary.push(input);
    setList(temporary);
    setInput("");
  };

  const crossOutItem = (event) => {
    if(event.target.style.textDecoration) {
        event.target.style.removeProperty('text-decoration')
    } else {
        event.target.style.setProperty('text-decoration', 'line-through')
    }
}


return (
    <div>
        <div id="inputbutton">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addToList}>Add Item to List</button>
        </div>
        <div id="mapper">
            <ul>
                {list.map((item, chindex) => {
                    return <li id="strike" key={item} onClick={crossOutItem}>{item}</li>;
                })}
            </ul>
        </div>
    </div>
)
}

export default InputText