// import "./App.css";
// import WordGuess from "./components/word-guessing-game";
import { useAPI_JSON } from "./components/API_JSON";

function App() {
  const api_json = "https://dummyjson.com/users";
  // let num1 = useRef();
  // let num2 = useRef();

  const { data, error, isLoading } = useAPI_JSON(api_json);
  // let res = 0;

  if (error) {
    return <div>{error}</div>;
  }
  if (!data) {
    return <div>No any data</div>;
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {/* <button onClick={handleClick}>Count1 {count1} </button> */}

      {/* <Chield /> */}
      {/* 
      <MemoizedComponent handleClick2={handleClick2} />
      <button onClick={handleClick2}>Count {count2}</button> */}

      {/* <input type="text" ref={num1} />
      <input type="text" ref={num2} />
      <button onClick={sum}>Sum {res} </button> */}

      <div>
        {data.map((d) => (
          <p key={d.id}>{d.firstName}</p>
        ))}
      </div>
    </div>
  );
}

// function Chield({ handleClick2 }) {
//   console.log("rendering Chield");

//   const x = useMemo(function () {
//     console.log("inside use memo");
//     const val = [].find(() => true);

//     return val;
//   }, []);

//   console.log(x);
//   return true;
// }

// const MemoizedComponent = memo(Chield);

export default App;

// memo is used for memoizing the component
// useMemo is used for memoizing the Value
// useCallback is used for memoiazing the function
