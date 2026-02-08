import { Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./paginas/inicio";
import Bloggox from "./paginas/bloggox";
import SkinGarden from "./paginas/skinGarden"
import ColegioVermillion from "./paginas/colegioVermillion"
import Menu from "./paginas/menu";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const location = useLocation();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // 👇 SOLO mostrar menu en inicio
  const mostrarMenu = location.pathname === "/";

  return (
    <div className="font-body">
      {mostrarMenu && (
        <Menu toggleTheme={toggleTheme} theme={theme} />
      )}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/skinGarden" element={<SkinGarden />} />
        <Route path="/bloggox" element={<Bloggox />} />
        <Route path="/colegioVermillion" element={<ColegioVermillion />}/>
      </Routes>
    </div>
  );
}

export default App;
