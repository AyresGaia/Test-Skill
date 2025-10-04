import React from "react";

export default function Question({ question, onAnswer }) {
  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="mb-2">{question.question}</h2>
      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => onAnswer(opt)}
          className="block mb-2 px-4 py-2 bg-purple-200 rounded hover:bg-purple-300"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
