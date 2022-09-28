import { useEffect, useState } from "react";
const enterInput = document.getElementById("inputtoList");

const InputText = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input)
    enterSubmit()
    }, [input])

  const addToList = () => {
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

  const enterSubmit = () => {
    enterInput.addEventListener("keypress", (event) => {
      if (event.which === 13) {
        const temporary = [...list];
        temporary.push(input);
        setList(temporary);
        setInput("");
      } else {
      }
    });
  };

  const inputFixer = (e) => {
    setInput(e.target.value);
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
        <input
          id="inputtoList"
          type="text"
          value={input}
          onChange={inputFixer}
          onKeyPress={(e) => enterSubmit(e)}
        />
        <button onClick={addToList}>Add Item to List</button>
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
