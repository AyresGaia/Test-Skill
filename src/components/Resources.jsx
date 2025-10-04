import React from "react";
import resourcesData from "../data/resources.json";

export default function Resources({ category }) {
  const resources = resourcesData[category];
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Learning Resources</h2>
      <ul>
        {resources.map((res, i) => (
          <li key={i} className="mb-1">
            <a href={res.link} target="_blank" className="text-blue-500 underline">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
