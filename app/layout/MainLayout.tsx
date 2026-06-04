import { Outlet } from "react-router";
import { Footer } from "~/components/sections/Footer";
import { Header } from "~/components/sections/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>  
  )
}

export default MainLayout;