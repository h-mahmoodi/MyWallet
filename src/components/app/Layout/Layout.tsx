import { Outlet } from "react-router";
import Header from "../Header/Header";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <section className={`relative bg-zinc-200 dark:bg-zinc-950 h-screen`}>
      <Header />
      <main className="z-50 h-full">
        <Outlet />;
      </main>
      <footer>footer</footer>
      <div className={styles.backdrop}></div>
    </section>
  );
};
export default Layout;
