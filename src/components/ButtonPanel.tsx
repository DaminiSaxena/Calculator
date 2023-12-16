import React from "react";
import Button from "./Button";
import Style from "./Button.module.scss";

interface Props {
  inputVal: string;
  setInputVal: (val: string) => void;
}

const ButtonPanel = ({ inputVal, setInputVal }: Props) => {
  const buttons = [
    "AC",
    "Del",
    "/",
    "0",
    "1",
    "2",
    "*",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "+",
    "9",
    ".",
    "=",
  ];
  return (
    <div className={Style.ButtonPanel}>
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            inputVal={inputVal}
            setInputVal={setInputVal}
            label={button}
          />
        );
      })}
    </div>
  );
};

export default ButtonPanel;
