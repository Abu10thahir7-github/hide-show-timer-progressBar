import React, { useState } from "react";
function SHtext() {
  const [show, setShow] = useState(true);
  return (
    <div className="SHtext">
      <h2>Show/Hide</h2>
      <div className="btn">
        <button onClick={() => setShow(true)}>Show</button>
        <button onClick={() => setShow(false)}>Hide</button>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
      <div className="content">{show ? <h1>hello World</h1> : null}</div>
    </div>
  );
}

export default SHtext;
