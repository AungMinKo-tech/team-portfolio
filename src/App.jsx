import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SupportBot from "./components/bot/SupportBot";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
        <SupportBot />
      </main>
      <Footer />
    </>
  );
}

export default App;
