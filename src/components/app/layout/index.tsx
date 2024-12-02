import { Outlet } from "react-router";
import AppHeader from "./header";

const AppLayout = () => {
  return (
    <section className="h-screen">
      <AppHeader />
      <main className="bg-background h-full">
        <Outlet />;
      </main>
      <footer>footer</footer>
    </section>
  );
};
export default AppLayout;
