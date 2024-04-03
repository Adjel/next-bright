"use client";
import React from "react";

function SecondSnippetShown({ children }) {
  const { isSecondSnippetShown, setIsSecondSnippetShown } =
    React.useState(false);

  return isSecondSnippetShown ? (
    { children }
  ) : (
    <div className="reveal">
      <button onClick={() => setIsSecondSnippetShown(true)}>
        Reveal Content
      </button>
    </div>
  );
}

export default SecondSnippetShown;
