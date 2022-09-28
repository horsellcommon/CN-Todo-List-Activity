import { useState } from "react";

const enterInput = document.getElementById("inputtoList")

const InputText = () => {
const [input, setInput]  = useState("")
const [list, setList] = useState([]);

const addToList = () => {
    const temporary = [...list];
    temporary.push(input);
    setList(temporary);
    setInput("");
  };

const enterSubmit = () => {
    enterInput.addEventListener("keypress", (event) => {
        if (event.which === 13){
            const temporary = [...list];
            temporary.push(input);
            setList(temporary);
            setInput("");
        } else{}
    })
}


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
            <input id="inputtoList" type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => enterSubmit(e)} />
            <button onClick={addToList}>Add Item to List</button>
        </div>
        <div id="mapper">
            <ul>
                {list.map((item, chindex) => {
                    return <li key={item} onClick={crossOutItem}>{item}<button id="listdeleteitem">DEL</button></li>;                
                })}
            </ul>
        </div>
    </div>
)
}

export default InputText