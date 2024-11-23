import { Logo } from "@/components/logo";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Logo />
        <ModeToggle />
      </div>
      <div>...</div>
    </header>
  );
}
