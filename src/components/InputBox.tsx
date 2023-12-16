import React from "react";
import Style from "./InputBox.module.scss";
interface Props {
  inputVal: string;
  setInputVal: (val: string) => void;
}

const InputBox = ({ inputVal, setInputVal }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputVal(e.target.value);
  };
  return (
    // <div className={Style.InputBoxContainer}>
    <input
      className={Style.InputBox}
      value={inputVal}
      onChange={handleChange}
    />
    // </div>
  );
};

export default InputBox;
