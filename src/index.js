import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];
const newNumbers = numbers.map((x) => x * 2);

const newNumbers1 = numbers.filter((num) => num < 10);

var newNumber2 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

const newNumber4 = numbers.findIndex((num) => num > 10);
