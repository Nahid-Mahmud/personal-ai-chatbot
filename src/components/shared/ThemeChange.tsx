"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

function ThemeChange() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-9 w-9 flex-1 md:flex-none rounded-full transition-colors hover:bg-accent"
    >
      {resolvedTheme === "dark" ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-black" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeChange;
