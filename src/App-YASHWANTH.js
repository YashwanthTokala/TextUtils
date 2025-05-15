import React, { useState } from "react";

const TextUtils = () => {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  const handleClearText = () => {
    setText("");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  return (
    <div className="container">
      <h1>TextUtils - React App</h1>
      <textarea
        className="text-area"
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div className="button-group">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleRemoveSpaces}>Remove Spaces</button>
        <button onClick={handleCopyText}>Copy Text</button>
        <button onClick={handleClearText} className="clear-btn">Clear</button>
      </div>
    </div>
  );
};

export default TextUtils;
