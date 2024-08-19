// import "./App.css";
// import WordGuess from "./components/word-guessing-game";
import { memo, useCallback, useMemo, useState } from "react";

function App() {
  // let num1 = useRef();
  // let num2 = useRef();
  // let res = 0;

  // function sum() {
  //   let fn = num1.current.value;
  //   let sn = num2.current.value;
  //   res = Number(fn) + Number(sn);
  //   console.log(res);
  // }

  // const [count1, setCount1] = useState(0);

  // function handleClick() {
  //   setCount1((prevState) => prevState + 1); if we want to previous value and then update a state, we'll use this method
  // }

  // function handleClick2() {
  //   setCount2(count2 + 1);  we just want to update state, we should to use this
  //   counterRef.current = count2 + 1;
  // }

  const [count2, setCount2] = useState(0);
  // const counterRef = useRef(null);

  const handleClick2 = useCallback(() => {
    setCount2((prevState) => prevState + 1);
  }, []);

  // useEffect(() => {
  //   console.log("useEffect");
  //   setInterval(() => {
  //     // setCount2((prevCount) => {
  //     //   return prevCount + 1;
  //     // });
  //     setCount2(counterRef.current + 1);
  //   }, 5000);
  // }, []);

  return (
    <div>
      {/* <button onClick={handleClick}>Count1 {count1} </button> */}

      {/* <Chield /> */}

      <MemoizedComponent handleClick2={handleClick2} />
      <button onClick={handleClick2}>Count {count2}</button>

      {/* <input type="text" ref={num1} />
      <input type="text" ref={num2} />
      <button onClick={sum}>Sum {res} </button> */}
    </div>
  );
}

function Chield({ handleClick2 }) {
  console.log("rendering Chield");

  const x = useMemo(function () {
    console.log("inside use memo");
    const val = [].find(() => true);

    return val;
  }, []);
  return <h1> I'm Child</h1>;
}

const MemoizedComponent = memo(Chield);

export default App;

// memo is used for memoizing the component
// useMemo is used for memoizing the Value
// useCallback is used for memoiazing the function
