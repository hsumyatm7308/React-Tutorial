import React from "react";

function FruitList() {
  const myarray = ["apple", "orange", "grapes"];

  return (
    <div>
      {myarray.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default FruitList;
