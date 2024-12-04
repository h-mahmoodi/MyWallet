import { Outlet } from "react-router";
import AppHeader from "../header";

import styles from "./styles.module.css";

const AppLayout = () => {
  return (
    <section className={`relative bg-zinc-200 dark:bg-zinc-950 h-screen`}>
      <AppHeader />
      <main className="z-50 h-full">
        <Outlet />;
      </main>
      <footer>footer</footer>
      <div className={styles.backdrop}></div>
    </section>
  );
};
export default AppLayout;
