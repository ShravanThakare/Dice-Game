import React from "react";

function Rules({ VisibleStateHandler }) {
  return (
    <div>
      <button onClick={VisibleStateHandler}>Show Rules</button>
    </div>
  );
}

export default Rules;
