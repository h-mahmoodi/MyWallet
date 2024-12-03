import { ToggleDarkMode } from "@src/components/ToggleDarkMode";
import { Button } from "@src/components/ui/button";
import { Link } from "react-router";

const AppHeader = () => {
  return (
    <header className="py-3 fixed top-0 w-full">
      <div className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold leading-none">My Wallet App</h1>
        <nav className="flex gap-3">
          <Button asChild variant="outline">
            <Link to="/login">Login</Link>
          </Button>
          <ToggleDarkMode />
        </nav>
      </div>
    </header>
  );
};
export default AppHeader;