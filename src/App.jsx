import { useState } from "react";
import Content from "./Content/Content";

function App() {
  // const [count, setCount] = useState(0);
  const [ShowContent, SetShowContent] = useState(false);

  const OpenContent = () => {
    SetShowContent(true);
  };

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => {
          if (count === 0) {
            useState(0);
          } else {
            setCount(count - 1);
          }
        }}
      >
        decrease
      </button>
      <button onClick={() => {
        setCount(0)
      }}>Reset</button> */}

      <div>
        <button onClick={OpenContent}>Show Content</button>
        {ShowContent && (
          <Content
            openinfo={ShowContent}
            SetShowContent={SetShowContent}
            title="Content has been activted"
            info="Accoridng to the terms and conditions Content has been activtaed "
          />
        )}
      </div>
    </>
  );
}

export default App;
