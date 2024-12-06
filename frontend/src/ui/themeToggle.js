import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "../context/themeProvider";

const iconClassname = "w-6 h-6 text-gray-700";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-4 right-4 z-50 p-2 rounded-lg shadow-lg
        transition-colors duration-200 ${isDarkTheme ? "bg-neutral-800" : "bg-white"}
      `}
    >
      {isDarkTheme ? (
        <SunIcon className="w-6 h-6 text-white" />
      ) : (
        <MoonIcon className="w-6 h-6 text-black" />
      )}
    </button>
  );
};