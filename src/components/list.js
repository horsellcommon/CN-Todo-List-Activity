import { useState } from "react";

const InputText = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [input, setInput] = useState("");

  const addToList = (e) => {
    e.preventDefault();
    const temporary = [...list];
    temporary.push(input);
    setList(temporary);
    setInput("");
  };

  const addToNewList = (index) => {
    const temp = [...list];
    const removedItem = temp.splice(index, 1);
    setList(temp);
    const temp2 = [...list2];
    temp2.push(...removedItem);
    setList2(temp2);
  };

  const deleteItem = (index) => {
    const temp = [...list];
    temp.splice(index, 1);
    setList(temp);
  };
  const clearList = () => {
    const emptylist = [...list2]
    emptylist.splice(0)
    setList2(emptylist)
  }

  const crossOutItem = (event) => {
    //More of an aesthetic addition at this point???? onClick={() => crossOutItem(chindex)}
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };

  return (
    <div>
      <div id="inputbutton">
        <form onSubmit={addToList}>
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            required
          />
          <button>Add Item to List</button>
        </form>
      </div>
      <div id="mapper">
        <ul>
          {list.map((item, chindex) => {
            return (
              <li onClick={crossOutItem} key={item}>
                {item}
                <button onClick={() => deleteItem(chindex)}>
                  Remove item?
                </button>
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
        <div className="centered">
            <button onClick={clearList}>CLEAR LIST</button>
        </div>
      </div>
    </div>
  );
};

export default InputText;
