import React from 'react'
import { Link } from "react-router-dom";
import Imagen1 from '../imagen/colegioVermillion/asistencia.png'
import Imagen2 from '../imagen/colegioVermillion/editar.png'
import Imagen3 from '../imagen/colegioVermillion/estudiante.png'
import Imagen4 from '../imagen/colegioVermillion/inicio.png'
import Imagen5 from '../imagen/colegioVermillion/login.png'
import Imagen6 from '../imagen/colegioVermillion/materia.png'
import { FaGithub } from "react-icons/fa";

// Importar traductor
import { useTranslation } from "react-i18next";

function Bloggox() {
    const { t } = useTranslation();
  return (
    <div className='contenido-extra'>
        <div className="contenido-de-arriba">
            <h1>{t("titulo-colegio")}</h1>
            <p>{t("bloggox.demostracion")}</p>
        </div>
        <div className="contenido-del-medio">
            <div className="descripcion-pagina">
                <h2>{t("bloggox.titulo-descripcion")}</h2>
                <p>{t("colegio.descripcion-1")}</p>
                <br />
                <p>{t("colegio.descripcion-2")}</p>
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
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </li>
                    <li className="listado-tecnologia">Backend: 
                        <ul>
                            <li>PHP</li>
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
                            <li>Cronograma</li>
                            <li>Figma</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="responsabilidades-pagina">
                <h2>{t("bloggox.responsabilidades")}</h2>
                <ul>
                    <li>{t("colegio-responsabilidad-1")}</li>
                    <li>{t("colegio-responsabilidad-2")}</li>
                    <li>{t("colegio-responsabilidad-3")}</li>
                    <li>{t("colegio-responsabilidad-4")}</li>
                    <li>{t("colegio-responsabilidad-5")}</li>
                    <li>{t("colegio-responsabilidad-6")}</li>
                </ul>
            </div>
            <div className="enlaces-pagina">
                <h2>{t("bloggox.titulo-ver")}</h2>
                <Link to="https://github.com/Yeremaia/ColegioVermillion.git" target="_blank"><FaGithub /> GitHub</Link>
            </div>
        </div>
        <div className="contenido-de-abajo">
            <p>&copy; {t("bloggox.footer")} Yeremy Peralta Baez, Ismanol Jose Gomez, Joshua Soto Familia & Miguel Nehemias Garcia. - 2022</p>
        </div>
    </div>
  )
}

export default Bloggox