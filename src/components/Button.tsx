import React from "react";
import Style from "./Button.module.scss";

interface Props {
  inputVal: string;
  setInputVal: (val: string) => void;
  label: string;
}

const Button = ({ inputVal, setInputVal, label }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.id == "=") {
      setInputVal(eval(inputVal).toString());
    } else if (e.currentTarget.id == "AC") {
      setInputVal("");
    } else if (e.currentTarget.id == "Del") {
      setInputVal(inputVal.slice(0, -1));
    } else {
      if (e.currentTarget.id == "0" && inputVal.length == 0) {
        return;
      }
      inputVal += e.currentTarget.id;
      console.log(inputVal);
      setInputVal(inputVal);
    }
  };
  const classes =
    label === "AC"
      ? Style.redButton
      : label === "="
      ? Style.bigButton
      : Style.Button;

  return (
    <div className={classes} onClick={handleClick} id={label}>
      {label}
    </div>
  );
};

export default Button;
