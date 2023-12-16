import { useState } from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
import InputBox from "./components/InputBox";
import Style from "./App.module.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={Style.MainContainer}>
      <div className={Style.Main}>
        <InputBox inputVal={inputValue} setInputVal={setInputValue} />
        <ButtonPanel inputVal={inputValue} setInputVal={setInputValue} />
      </div>
    </div>
  );
}

export default App;
