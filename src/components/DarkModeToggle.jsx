import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", enabled);
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:scale-105 transition"
      title="Toggle Dark Mode"
    >
      {enabled ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
