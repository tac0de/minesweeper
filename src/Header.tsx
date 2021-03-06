import React from "react";
import { Status } from "./types";
import { statuses } from "./constants";
import "./Header.css";

const toHuman = (num: string): string => {
  const nums: { [key: string]: string } = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
  };
  return nums[num];
};

const Screen = (props: { count: number | string }): JSX.Element => {
  const nums: string[] = String(props.count)
    .split("")
    .map(toHuman);

  return (
    <div className="screen">
      {nums.map((num, i) => (
        <div key={i} className={`number ${num}`}>
          <div className="top-left" />
          <div className="top" />
          <div className="top-right" />
          <div className="mid" />
          <div className="bottom-left" />
          <div className="bottom" />
          <div className="bottom-right" />
        </div>
      ))}
    </div>
  );
};

const Header = (props: {
  bombs: number;
  flags: number;
  handleReset: () => void;
  status: Status;
  time: number;
}) => {
  const { flags, status, time } = props;
  const count: string = String(time).padStart(3, "0");
  return (
    <header>
      <div className="flags">
        <Screen count={flags} />
      </div>
      <button className="status" onClick={props.handleReset}>
        {status === statuses.READY
          ? "😃"
          : status === statuses.WIN
          ? "😎"
          : "😭"}
      </button>
      <div className="timer">
        <Screen count={count} />
      </div>
    </header>
  );
};

export default Header;
