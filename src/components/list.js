import { useState } from "react";
import CompletedList from "./CompletedList";

const FirstList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToList = (e) => {
    e.preventDefault();
    const temporary = [...list];
    temporary.push(input);
    setList(temporary);
    setInput("");
  };

  const deleteItem = (index) => {
    const temp = [...list];
    temp.splice(index, 1);
    setList(temp);
  };

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
      <CompletedList />
    </div>
  );
};

export default FirstList;
