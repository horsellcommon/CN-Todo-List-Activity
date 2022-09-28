import { useState } from "react";

const InputText = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [input, setInput] = useState("");

  const addToList = (e) => {
    e.preventDefault()
    const temporary = [...list];
    temporary.push(input);
    setList(temporary);
    setInput("");
  };

  const addToNewList = () => {
    const newList = [...list];
    setList2(newList);
  };

  const deleteItem = (index) => {
    const temp = [...list];
    temp.splice(index, 1);
    setList(temp);
  };

  //   const crossOutItem = (event) => { //More of an aesthetic addition at this point???? onClick={() => crossOutItem(chindex)}
  //     if(event.target.style.textDecoration) {
  //         event.target.style.removeProperty('text-decoration')
  //     } else{
  //         event.target.style.setProperty('text-decoration', 'line-through')
  //     }
  // }

  return (
    <div>
      <div id="inputbutton">
        <form onSubmit={addToList}>
        <input type="text" id="inputBox" value={input} onChange={(event) => setInput(event.target.value)} />
        <button>Add Item to List</button>
      </form>
      </div>
      <div id="mapper">
        <ul>
          {list.map((item, chindex) => {
            return (
              <li key={item}>
                {item}
                <button onClick={() => deleteItem(chindex)}>DEL</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button className="centered" onClick={addToNewList}>
          PUSH TO COMPLETED LIST
        </button>
        <h1 className="centered">
          <u>DONE</u>
        </h1>
        <div id="mapper">
          <ul>
            {list2.map((item, chindex) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InputText;
