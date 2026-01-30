import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Team from "@/pages/Team";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "team", element: <Team /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
