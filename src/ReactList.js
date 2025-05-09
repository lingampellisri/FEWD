import React from "react";

const items = ["banana", "mango", "apple", ""];

function Display() {
  return (
    <div>
      <h1>Display Fruits</h1>
      <ul>
        {
          items.map((value, index) => {
            return (
              <li key={index}>
                {value}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Display;
