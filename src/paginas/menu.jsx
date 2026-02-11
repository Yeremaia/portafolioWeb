import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Menu({ toggleTheme, theme }) {
  const { i18n, t } = useTranslation();
  const [abrirIdioma, setAbrirIdioma] = useState(false);

  const cambiarIdioma = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); // guarda idioma
    setAbrirIdioma(false);
  };

  // SCROLL SUAVE
  const irASeccion = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  const idiomaActual = {
    es: "Español",
    en: "English",
    pt: "Português",
    fr: "Français",
  }[i18n.language];

  return (
    <div className="contenedor-todo">
      <header>
        <ul className="menu-contenido">
          <li>
            <button onClick={() => irASeccion("ir-sobre-mi")}>
              {t("menu.about")}
            </button>
          </li>
          <li>
            <button onClick={() => irASeccion("ir-mis-proyectos")}>
              {t("menu.projects")}
            </button>
          </li>
          <li>
            <button onClick={() => irASeccion("ir-contacto")}>
              {t("menu.contact")}
            </button>
          </li>

          {/* BOTÓN IDIOMA */}
          <li
            id="boton-idioma"
            onClick={() => setAbrirIdioma(!abrirIdioma)}
          >
            <button>
              <BiWorld />
              {idiomaActual}
            </button>

            {/* MINI VENTANA */}
            {abrirIdioma && (
              <ul className="menu-idioma-dropdown">
                <li onClick={() => cambiarIdioma("es")}>
                  Español {i18n.language === "es" && <FaCheck />}
                </li>
                <li onClick={() => cambiarIdioma("en")}>
                  English {i18n.language === "en" && <FaCheck />}
                </li>
                <li onClick={() => cambiarIdioma("pt")}>
                  Portugués {i18n.language === "pt" && <FaCheck />}
                </li>
                <li onClick={() => cambiarIdioma("fr")}>
                  Français {i18n.language === "fr" && <FaCheck />}
                </li>
              </ul>
            )}
          </li>

          {/* DARK MODE */}
          <li onClick={toggleTheme} className="icono-luna">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Menu;
