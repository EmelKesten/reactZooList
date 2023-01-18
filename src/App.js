import "./App.css";
import ShowAnimals from "./showAnimals/showAnimals";
import { Provider } from "react-redux";
import { store } from "./userState/store.js";
import {onSubmit, onSubmit2} from "./nodeaxs";
import { useState } from "react";

function App() {
  const [arr, setArr] = useState([1, 2, 3])
  arr.push(4)
  console.log(arr)
  return (
    <div className="App">
      <button onClick={onSubmit}>Add</button>
      <button onClick={onSubmit2}>Get</button>
    </div>
  );
}

export default App;
