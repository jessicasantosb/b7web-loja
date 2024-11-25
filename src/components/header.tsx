import { Sidebar } from "@/components/cart/sidebar";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-3">
        <Logo />
        <ModeToggle />
      </div>
      <div>
        <Sidebar />
      </div>
    </header>
  );
}
