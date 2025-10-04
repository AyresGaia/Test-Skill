import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Resources from "./components/Resources";
import "./index.css";

export default function App() {
  const [category, setCategory] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {!category ? (
          <>
            <h2 className="text-xl mb-4">Select Assessment Category:</h2>
            <button onClick={() => setCategory("aptitude")} className="m-2 p-2 bg-purple-300 rounded">Aptitude</button>
            <button onClick={() => setCategory("softSkills")} className="m-2 p-2 bg-purple-300 rounded">Soft Skills</button>
          </>
        ) : (
          <>
            <Quiz category={category} />
            <Resources category={category} />
            <button onClick={() => setCategory(null)} className="mt-4 p-2 bg-red-400 text-white rounded">Back</button>
          </>
        )}
      </div>
    </div>
  );
}
