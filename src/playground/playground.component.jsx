import { useEffect, useState } from "react";
import React from "react";

export default function PlaygroundComponent() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    let header = document.getElementById("header");
    console.log(header);
    header.value = `You clicked ${count} times`;
    console.log(header.value);
  });

  let handleOnClick = () => {
    setCount(count++);
  };

  // console.log(setCount)
  return (
    <div>
      <h1 id="header"></h1>
      <h2>You just hit this button {count}times</h2>
      <div className="button" onClick={handleOnClick}>
        Click Here!
      </div>
    </div>
  );
}
