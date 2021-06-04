import React, { useState } from "react";
import ToDo from "./ToDo";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const changeEvent = (event) => {
    setInput(event.target.value);
  };
  const click = () => {
    setItems((array) => {
      return [...array, input];
    });
    setInput("");
  };
  const deletei = (id) => {
    setItems((array) => {
      return array.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>TO DO List App </h1>
          <input
            type="text"
            placeholder="Add The text"
            onChange={changeEvent}
            value={input}
          />
          <button onClick={click}>+</button>
          <ol>
            {items.map((name, index) => {
              return (
                <ToDo text={name} id={index} key={index} onSelect={deletei} />
              );
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default App;
