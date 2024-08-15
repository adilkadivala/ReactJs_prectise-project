import { useState } from "react";
import Button from "./button";
import Input from "./input";

const Add = "+";
const Sub = "-";
const Mul = "*";
const Div = "/";
const Mod = "%";
const Equal = "=";

const Operations = [Add, Sub, Mul, Div, Mod, Equal];
const num = new Array(10);

function Calculator() {
  const [operandA, setOperandA] = useState("");
  const [operandB, setOperandB] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");
  const [curruntNum, setCurruntNum] = useState("");

  function handleInput(value) {
    console.log(value);
    if (operandA) {
      if (!operandB) {
        const lastChar = value.split("").at(-1);
        setOperandB(Number(lastChar));
        setCurruntNum(lastChar);
      } else {
        setCurruntNum(value);
        setOperandB(Number(value));
      }
    } else {
      setCurruntNum(value);
    }
  }

  function handleOperands(type) {
    // const oneWay = e.target.dataset.operation;
    // const secondWay = e.target.getAttribute("data-operation");

    // thirdway

    // this is curring, it is a machenisiom of returning fun from fun..
    return () => {
      setOperation(type);
      if (type === Equal) {
        let res = 0;
        setOperation("");
        if (operation === Add) {
          res = operandA + operandB;
        }
        if (operation === Sub) {
          res = operandA - operandB;
        }
        if (operation === Mul) {
          res = operandA * operandB;
        }
        if (operation === Div) {
          res = operandA / operandB;
        }
        if (operation === Mod) {
          res = operandA % operandB;
        }
        setResult(res);
      } else {
        setOperandA(Number(curruntNum));
      }
    };
  }

  function handleNumberClick(number) {
    return () => {
      const newValue = `${curruntNum}${number}`;

      if (operandA) {
        if (!operandB) {
          setOperandB(Number(number));
          setCurruntNum(number);
        } else {
          setCurruntNum(newValue);
          setOperandB(Number(newValue));
        }
      } else {
        setCurruntNum(newValue);
      }
    };
  }

  return (
    <div>
      <Input
        placeholder="Enter number"
        value={curruntNum}
        onInput={handleInput}
      />
      <div>
        {[...num].map((_, index) => {
          return (
            <button key={index} onClick={handleNumberClick(index)}>
              {index}
            </button>
          );
        })}
      </div>
      selected operation : {operation}
      <div>
        {Operations.map((operation) => (
          <Button
            key={operation}
            lable={operation}
            onClick={handleOperands(operation)}
            // dataOperation={operation}    use this for one&twoWay
          />
        ))}
      </div>
      Result {result}
    </div>
  );
}

export default Calculator;
