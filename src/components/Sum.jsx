// import { useRef, useState } from "react";
import { useState } from "react";
import Style from "../assets/css/Sum.module.css";

const Sum = () => {
  console.log("re-render");
  // const num1 = useRef();
  // const num2 = useRef();

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(0);

  function handleSum() {
    // let res = Number(n1.current.value) + Number(n1.current.value);
    // const total = Number(n1) + Number(n2);
    const total1 = n1 + n2;
    setResult(total1);
  }

  function handleSub() {
    const total1 = n1 - n2;
    setResult(total1);
  }
  function handleDiv() {
    const total1 = n1 / n2;
    setResult(total1);
  }
  function handleMul() {
    const total1 = n1 * n2;
    setResult(total1);
  }
  function handleMod() {
    const total1 = n1 % n2;
    setResult(total1);
  }

  function handleChange1(e) {
    setN1(Number(e.target.value));
  }
  function handleChange2(e) {
    setN2(Number(e.target.value));
  }
  return (
    <div className={Style.component}>
      {/* <input type="text" className={Style.input} ref={num1} />
      <input type="text" className={Style.input} ref={num2} /> */}
      <input
        type="text"
        className={Style.input}
        value={n1}
        onChange={handleChange1}
      />
      <input
        type="text"
        className={Style.input}
        value={n2}
        onChange={handleChange2}
      />

      <div className={Style.result_component}>
        <ActionButton onClick={handleSum} lable="+" />
        <ActionButton onClick={handleSub} lable="-" />
        <ActionButton onClick={handleDiv} lable="/" />
        <ActionButton onClick={handleMul} lable="*" />
        <ActionButton onClick={handleMod} lable="%" />
      </div>
      <p>
        The sum of two number is <span className={Style.result}>{result}</span>
      </p>
    </div>
  );
};

function ActionButton({ onClick = () => {}, lable = "" }) {
  return <button onClick={onClick}>{lable}</button>;
}

export default Sum;
