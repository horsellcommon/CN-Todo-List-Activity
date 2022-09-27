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

const deleteItem = (index) => {
    const temporary = [...list];
    temporary.splice(index, 1);
    setList(temporary);
  };

return (
    <div>
        <div id="inputbutton">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addToList}>Add Item to List</button>
        </div>
        <div id="mapper">
            <ul>
                {list.map((item, chindex) => {
                    return <li key={item} onClick={() => deleteItem(chindex)}>{item}</li>;
                })}
            </ul>
        </div>
    </div>
)
}

export default InputText