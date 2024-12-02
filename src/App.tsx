import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@src/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Mail } from "lucide-react";
import { ToggleDarkMode } from "./components/ToggleDarkMode";
import AppRouter from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppRouter />
    // <>
    //   <div className="">
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <div>
    //       <ToggleDarkMode />
    //       <Button>Button</Button>
    //       <Button variant="secondary" size="icon">
    //         <ChevronRight />
    //       </Button>
    //       <Button size="default">
    //         <Mail /> Login with Email
    //       </Button>
    //       <Button size="default" variant="secondary">
    //         <Mail /> Login with Email
    //       </Button>
    //       <Button size="default" variant="outline">
    //         <Mail /> Login with Email
    //       </Button>
    //       <Button size="default" variant="ghost">
    //         <Mail /> Login with Email
    //       </Button>
    //     </div>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
