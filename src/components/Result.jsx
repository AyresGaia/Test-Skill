import React from "react";

export default function Result({ score, total }) {
  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold">Your Score: {score}/{total}</h2>
      <p className="mt-2">
        {score / total >= 0.7 ? "Great job!" : "Keep learning and try again!"}
      </p>
    </div>
  );
}
