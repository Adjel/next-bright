"use client";
import React from "react";

function ThirdSnippetShown({ children }) {
  const { isThirdSnippetShown, setIsThirdSnippetShown } = React.useState(false);

  return isThirdSnippetShown ? (
    { children }
  ) : (
    <div className="reveal">
      <button onClick={() => setIsThirdSnippetShown(true)}>
        Reveal Content
      </button>
    </div>
  );
}

export default ThirdSnippetShown;
