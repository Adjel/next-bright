"use client";
import React from "react";

function SnippetReveal({ children }) {
  const [isSnippetShown, setIsSnippetShown] = React.useState(false);

  return isSnippetShown ? (
    children
  ) : (
    <div className="reveal">
      <button onClick={() => setIsSnippetShown(true)}>Reveal Content</button>
    </div>
  );
}

export default SnippetReveal;
