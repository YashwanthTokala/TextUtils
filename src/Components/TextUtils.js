import React, { useState, useEffect } from "react";

const TextUtils = () => {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode styles to the entire page
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#1e1e1e";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  // Convert to Uppercase
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  // Convert to Lowercase
  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  // Remove Extra Spaces
  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  // Clear Text
  const handleClearText = () => {
    setText("");
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Word & Character Count
  const wordCount = text.trim().split(/\s+/).filter(word => word !== "").length;
  const charCount = text.length;

  // Estimated Reading Time (Assuming 200 words per minute)
  const readingTime = (wordCount / 200).toFixed(2);

  return (
    <div className="container">
      <h1>TextUtils - Text Analyzer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div className="buttons">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={handleRemoveSpaces}>Remove Spaces</button>
        <button onClick={handleClearText}>Clear Text</button>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="stats">
        <p>Words: {wordCount}</p>
        <p>Characters: {charCount}</p>
        <p>Estimated Reading Time: {readingTime} minutes</p>
      </div>
    </div>
  );
}; 

export default TextUtils;
