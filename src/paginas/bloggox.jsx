import React from 'react'
import { Link } from "react-router-dom";
import Imagen1 from '../imagen/bloggox/bloggox1.png'
import Imagen2 from '../imagen/bloggox/bloggox2.png'
import Imagen3 from '../imagen/bloggox/bloggox3.png'
import Imagen4 from '../imagen/bloggox/bloggox4.png'
import Imagen5 from '../imagen/bloggox/inicio.png'
import Imagen6 from '../imagen/bloggox/login.png'
import { FaGithub } from "react-icons/fa";

// Importar traductor
import { useTranslation } from "react-i18next";

function Bloggox() {
    const { t } = useTranslation();
  return (
    <div className='contenido-extra'>
        <div className="contenido-de-arriba">
            <h1>{t("bloggox.titulo-inicio")}</h1>
            <p>{t("bloggox.demostracion")}</p>
        </div>
        <div className="contenido-del-medio">
            <div className="descripcion-pagina">
                <h2>{t("bloggox.titulo-descripcion")}</h2>
                <p>{t("bloggox.descripcion")}</p>
            </div>
            <div className="galeria-pagina">
                <h2>{t("bloggox.galeria")}</h2>
                <div className="contenedor-imagenes">
                    <img src={Imagen1} className='imagenes-paginas'/>
                    <img src={Imagen2} className='imagenes-paginas'/>
                    <img src={Imagen3} className='imagenes-paginas'/>
                    <img src={Imagen4} className='imagenes-paginas'/>
                    <img src={Imagen5} className='imagenes-paginas'/>
                    <img src={Imagen6} className='imagenes-paginas'/>
                </div>
            </div>
            <div className="tecnologia-pagina">
                <h2>{t("bloggox.stack-tecnologico")}</h2>
                <ul>
                    <li className="listado-tecnologia">Frontend: 
                        <ul>
                            <li>HTML y CSS</li>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Vite</li>
                        </ul>
                    </li>
                    <li className="listado-tecnologia">Backend: 
                        <ul>
                            <li>Node.js</li>
                        </ul>
                    </li>
                    <li className="listado-tecnologia">{t("bloggox.lista-db")}: 
                        <ul>
                            <li>MySQL</li>
                        </ul>
                    </li>
                    <li className="listado-tecnologia">{t("bloggox.herramientas")}:
                        <ul>
                            <li>Visual Studios Code</li>
                            <li>XAMPP</li>
                            <li>Axios</li>
                            <li>Figma</li>
                            <li>Google Translate</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="responsabilidades-pagina">
                <h2>{t("bloggox.responsabilidades")}</h2>
                <ul>
                    <li>{t("bloggox.lista-responsabilidad-1")}</li>
                    <li>{t("bloggox.lista-responsabilidad-2")}.</li>
                    <li>{t("bloggox.lista-responsabilidad-3")}</li>
                    <li>{t("bloggox.lista-responsabilidad-4")}</li>
                    <li>{t("bloggox.lista-responsabilidad-5")}</li>
                </ul>
            </div>
            <div className="enlaces-pagina">
                <h2>{t("bloggox.titulo-ver")}</h2>
                <Link to="https://github.com/Yeremaia/Bloggox.git" target="_blank"><FaGithub /> GitHub</Link>
            </div>
        </div>
        <div className="contenido-de-abajo">
            <p>&copy; {t("bloggox.footer")} Yeremy Peralta Baez - 2024</p>
        </div>
    </div>
  )
}

export default Bloggox