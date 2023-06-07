import "./App.css";
import { useState, useEffect } from "react";
import WebMain from "./web/webMain";
import MobileMain from "./mobile/mobileMain";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width < 768 ? <MobileMain/> : <WebMain />;
}
