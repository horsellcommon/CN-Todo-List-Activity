import { useState } from "react";

const FirstList = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState("");
  const [newInput, setNewInput] = useState("");

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

  const addToNewList = (index) => {
    const temp = [...list];
    const removedItem = temp.splice(index, 1);
    setList(temp);
    const temp2 = [...list2];
    temp2.push(...removedItem);
    setList2(temp2);
  };

  const editItem = (index) => {
    if (!edit) {
      setEdit(true);
      setSelected(list[index]);
    } else {
      if (newInput !== "") {
        setEdit(false);
        const temp = [...list];
        temp[index] = newInput;
        setList(temp);
      }
    }
    setNewInput("");
  };

  const clearList = () => {
    const emptylist = [...list2];
    emptylist.splice(0);
    setList2(emptylist);
  };

  const crossOutItem = (event) => {
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
              <div>
                {edit && selected === item ? (
                  <input
                    type="text"
                    defaultValue={item}
                    onChange={(e) => setNewInput(e.target.value)}
                  />
                ) : (
                  <div>
                    <li
                      className="items"
                      onClick={crossOutItem}
                      key={item}
                    >
                      {item}
                    </li>
                  </div>
                )}
                <button onClick={() => addToNewList(chindex)}>
                  Push to completed list
                </button>
                <button onClick={() => deleteItem(chindex)}>
                  Remove item?
                </button>
                <button id="edit" onClick={() => editItem(chindex)}>
                  {edit ? "Save" : "Edit"}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <button className="centered" onClick={addToNewList}>
          PUSH FIRST ITEM TO COMPLETED LIST
        </button>
        <br />
        <div className="bigunderline"></div>
        <br />
        <h1 className="centered">
          <u>DONE</u>
        </h1>
        <div id="mapper">
          <ul>
            {list2.map((item, chindex) => {
              return (
                <li id="strikethrough" className="items" key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="centered">
          <button onClick={clearList}>CLEAR LIST</button>
        </div>
      </div>
      <br />
      <div className="bigunderline"></div>
    </div>
  );
};

export default FirstList;
