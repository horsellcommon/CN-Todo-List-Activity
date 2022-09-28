import { useState } from "react"
import FirstList from "./List";

const CompletedList = () => {
    const [list, setList] = useState([])
    const [list2, setList2] = useState([]);

    const addToNewList = (index) => {
        const temp = [...list];
        const removedItem = temp.splice(index, 1);
        setList(temp);
        const temp2 = [...list2];
        temp2.push(...removedItem);
        setList2(temp2);
    };

    const clearList = () => {
        const emptylist = [...list2];
        emptylist.splice(0);
        setList2(emptylist);
    };  


    return (
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
    )
}

export default CompletedList