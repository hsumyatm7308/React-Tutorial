import React from "react";

const myarray = ["apple", "orange", "grapes"];

const arrayMap = () => (
  <div>
    {myarray.map((item) => (
      <p key={item}>{item}</p>
    ))}
  </div>
);

export default ArrayMap;
