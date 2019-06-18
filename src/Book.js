import React from "react";
import "./App.css";
import "./bootstrap.min.css";

function Book({ title, onClick }) {
  return (
    <div
      className="answer"
      onClick={() => {
        onClick(title);
      }}>
      <h1>{title}</h1>
    </div>
  );
}

export default Book;
