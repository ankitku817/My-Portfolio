import React from "react";

const SkillBadge = ({ name, icon, color, emoji }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`text-5xl mb-2 ${color}`}
      >
        {icon}
      </div>
      <div className="text-2xl mb-1">{emoji}</div>
      <span className="inline-block bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
        {name}
      </span>
    </div>
  );
};

export default SkillBadge;
