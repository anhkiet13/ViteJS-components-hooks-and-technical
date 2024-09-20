import React, { useState } from "react";

const DemoPage = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
        <h3>Demo state batching</h3>

        <h1>{number}</h1>
        <button
          onClick={() => {
            setNumber((n) => n + 1);
            setNumber((n) => n + 1);
            setNumber((n) => n + 1);
          }}
        >
          +3
        </button>
   
    </div>
  );
};

export default DemoPage;
