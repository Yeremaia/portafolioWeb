// React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Bloggox from "./bloggox";

// Iconos para el listo de burbuja
import { MdContentPasteSearch } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { GrCode } from "react-icons/gr";

// Iconos de los titulos
import { MdEmail } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// Icono para el pie de pagina
import { FaGithub } from "react-icons/fa";

// Icono para proyectos practica
import { FaCaretRight } from "react-icons/fa";

// Iconos de proyectos destacados
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { RiPhpFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";

// Iconos botones scroll
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

// Importar imagenes
import LogoInfotep from "../imagen/infotep-logo.jpg"
import LogoCincinnatus from "../imagen/logo-cic.png"
import LogoTalentoDigital from "../imagen/logo-talento-digital.png"
import A1 from "../imagen/a.jpg"
import A2 from "../imagen/a2.jpeg"
import BloggoxImage from "../imagen/bloggox/login.png"
import SkinGardenImage from "../imagen/SkinGarden/login.png"
import ColegioVermillion from "../imagen/colegioVermillion/inicio.png"

// Importar traductor
import { useTranslation } from "react-i18next";

function Inicio() {
    const { t } = useTranslation();
    const [imagenActual, setImagenActual] = useState(A1);
    const [fade, setFade] = useState(true);
    const [indiceCertificado, setIndiceCertificado] = useState(0);
    const certificadosPorVista = 2;

    const cambiarImagen = (imagen) => {
        if (imagen === imagenActual) return; // devolver nada si ya esta puesta

        setFade(false); // fade out

        setTimeout(() => {
            setImagenActual(imagen);
            setFade(true); // fade in
        }, 300);
    };

    // Cambiar de cada 9 segundos la imagen de forma automatica

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setImagenActual((prev) => (prev === A1 ? A2 : A1));
                setFade(true);
            }, 300);
        }, 9000);

        return () => clearInterval(intervalo);
    }, []);

    // Scroll del certificado
    const certificados = [
    {
        logo: LogoInfotep,
        titulo: "INFOTEP",
        curso: t("formacion.curso-1"),
        tipo: t("formacion.tipo-1"),
        descripcion: t("formacion.descripcion-1"),
        link: "#"
    },
    {
        logo: LogoInfotep,
        titulo: "INFOTEP",
        curso: t("formacion.curso-2"),
        tipo: t("formacion.tipo-1"),
        descripcion: t("formacion.descripcion-2"),
        link: "#"
    },
    {
        logo: LogoCincinnatus,
        titulo: "Cincinnatus Institute of Craftmanship",
        curso: t("formacion.curso-3"),
        tipo: t("formacion.tipo-1"),
        descripcion: t("formacion.descripcion-3"),
        link: "#"
    },
    {
        logo: LogoCincinnatus,
        titulo: "Cincinnatus Institute of Craftmanship",
        curso: t("formacion.curso-4"),
        tipo: t("formacion.tipo-1"),
        descripcion: t("formacion.descripcion-4"),
        link: "#"
    },
    {
        logo: LogoCincinnatus,
        titulo: "Cincinnatus Institute of Craftmanship",
        curso: t("formacion.curso-5"),
        tipo: (
            <>
                {t("formacion.tipo-1")} <span className="en-proceso">{t("formacion.en-proceso")}</span>
            </>
        ),
        descripcion: t("formacion.descripcion-4")
    },
    {
        logo: LogoTalentoDigital,
        titulo: "Talento Digital",
        curso: t("formacion.curso-5"),
        tipo: t("formacion.tipo-2"),
        descripcion: t("formacion.descripcion-6"),
        link: "https://drive.google.com/file/d/1wVkirKp-bbA17idvl6FODUgY3HOtYuhi/view?usp=sharing"
    }
    ];

    const siguiente = () => {
    if (indiceCertificado + certificadosPorVista < certificados.length) {
        setIndiceCertificado(indiceCertificado + certificadosPorVista);
    }
    };

    const anterior = () => {
    if (indiceCertificado - certificadosPorVista >= 0) {
        setIndiceCertificado(indiceCertificado - certificadosPorVista);
    }
    };

    return (
        <div className="contenedor-todo">
            <div className="contenedor-inicio">
                <div className="contenido-arriba">
                    <div className="lado-izquierdo-arriba" id="ir-sobre-mi">
                        <img
                            src={imagenActual}
                            alt="Aqui va mis imagenes"
                            className={`imagen-slider ${fade ? "fade-in" : "fade-out"}`}
                        />
                        <div className="botones-imagenes">
                            <button
                                title="Imagen anterior"
                                className={imagenActual === A1 ? "activo" : ""}
                                onClick={() => cambiarImagen(A1)}
                            ></button>

                            <button
                                title="Imagen siguiente"
                                className={imagenActual === A2 ? "activo" : ""}
                                onClick={() => cambiarImagen(A2)}
                            ></button>
                        </div>
                    </div>
                    <div className="lado-derecho-arriba">
                        <h1>Yeremy Peralta Báez</h1>
                        <p>{t("main.description")}</p>
                        <ul className="lista-burbujas">
                            <li><MdContentPasteSearch />{t("main.buscar-trabajo")}</li>
                            <li><FaGraduationCap />{t("main.buscar-estudios")}</li>
                        </ul>
                        <div className="boton-curriculum">
                            <a href="https://drive.google.com/file/d/1VKbdFF_6kFx7RgXUG8iZLcC83NbPs5FG/view?usp=sharing" target="_blank" id="verCurriculum"><IoDocumentTextSharp /> {t("main.ver-cv")}</a>
                            <a href="#ir-contacto" id="contactame"><MdEmail /> {t("main.contactame")}</a>
                        </div>
                    </div>
                </div>

                {/* Primer titulo */}
                <div className="sobre-mi">
                    <h2>{t("title.sobre-mi")} <FaBriefcase /></h2>
                    <p>{t("sobre-mi.descripcion-1")}</p>

                    <p> {t("sobre-mi.descripcion-2")}</p>

                    <p>{t("sobre-mi.descripcion-3")}</p>
                </div>

                {/* Segundo titulo */}
                <h2 id="ir-mis-proyectos">{t("title.destacado")} <FaStar /></h2>
                <div className="contenido-proyectos-destacados">
                    <img src={BloggoxImage} alt="" />
                    <div className="derecho-proyectos-destacados">
                        <h3>Bloggox</h3>
                        <p>{t("destacado.proyecto-1")}</p>
                        <ul>
                            <li className="html-icono"><FaHtml5 title={t("icon.html")} /></li>
                            <li className="css-icono"><DiCss3 title={t("icon.css")} /></li>
                            <li className="tailwind-icono"><RiTailwindCssFill title={t("icon.tailwind")} /></li>
                            <li className="node-icono"><FaNodeJs title={t("icon.nodejs")} /></li>
                            <li className="mysql-icono"><SiMysql title={t("icon.mysql")} /></li>
                            <li className="react-icono"><FaReact title={t("icon.React")} /></li>
                        </ul>
                        <Link to="/bloggox" target="_blank">{t("destacado.ver-detalles")}</Link>
                    </div>
                </div>

                {/* Tercer titulo */}
                <h2>{t("title.academico")} <FaBook /></h2>
                <div className="contenido-proyectos-destacados">
                    <img src={SkinGardenImage} />
                    <div className="derecho-proyectos-destacados">
                        <h3>SkinGarden</h3>
                        <p>{t("academico-proyecto-1")}</p>
                        <ul>
                            <li className="html-icono"><FaHtml5 title={t("icon.html")} /></li>
                            <li className="css-icono"><DiCss3 title={t("icon.css")} /></li>
                            <li className="mysql-icono"><SiMysql title={t("icon.mysql")} /></li>
                            <li className="django-icono"><DiDjango title={t("icon.django")} /></li>
                        </ul>
                        <Link to="/skinGarden" target="_blank">{t("destacado.ver-detalles")}</Link>
                    </div>
                </div>

                <div className="contenido-proyectos-destacados">
                    <img src={ColegioVermillion} />
                    <div className="derecho-proyectos-destacados">
                        <h3>Colegio Vermillion</h3>
                        <p>{t("academico-proyecto-2")}</p>
                        <ul>
                            <li className="html-icono"><FaHtml5 title={t("icon.html")} /></li>
                            <li className="css-icono"><DiCss3 title={t("icon.css")} /></li>
                            <li className="mysql-icono"><SiMysql title={t("icon.mysql")} /></li>
                            <li className="css-icono"><RiPhpFill title={t("icon.php")} /></li>
                        </ul>
                        <Link to="/colegioVermillion" target="_blank">{t("destacado.ver-detalles")}</Link>
                    </div>
                </div>

                {/* Cuarto titulo */}
                <h2>{t("title.practica")} <FaFileCode /></h2>
                <div className="conjunto-proyecto-practica">
                    <div className="contenido-proyecto-practica">
                        <h3>{t("practica.calculadora")}</h3>
                        <p>{t("calculadora.descripcion")}</p>
                        <ul>
                            <li className="react-icono"><FaReact title={t("icon.React")} /></li>
                            <li className="java-icono"><IoLogoJavascript title={t("icon.js")} /></li>
                            <li className="html-icono"><FaHtml5 title={t("icon.html")} /></li>
                            <li className="css-icono"><DiCss3 title={t("icon.css")} /></li>
                        </ul>
                        <div className="linea-botones-practica">
                            <a href="https://yeremaia.github.io/Calculadora/" target="_blank" className="ejecutar-codigo"><FaCaretRight />{t("boton.ver-demo")}</a>
                            <a href="https://github.com/Yeremaia/Calculadora.git" target="_blank" className="ver-codigo"><GrCode />{t("boton.ver-code")}</a>
                        </div>
                    </div>
                    <div className="contenido-proyecto-practica">
                        <h3>{t("practica.contador")}</h3>
                        <p>{t("contador.descripcion")}</p>
                        <ul>
                            <li className="react-icono"><FaReact title={t("icon.React")} /></li>
                            <li className="java-icono"><IoLogoJavascript title={t("icon.js")} /></li>
                            <li className="html-icono"><FaHtml5 title={t("icon.html")} /></li>
                            <li className="css-icono"><DiCss3 title={t("icon.css")} /></li>
                        </ul>
                        <div className="linea-botones-practica">
                            <a href="https://yeremaia.github.io/contador-de-clicks/" target="_blank" className="ejecutar-codigo"><FaCaretRight />{t("boton.ver-demo")}</a>
                            <a href="https://github.com/Yeremaia/contador-de-clicks.git" target="_blank"  className="ver-codigo"><GrCode /> {t("boton.ver-code")}</a>
                        </div>
                    </div>
                    <div className="contenido-proyecto-practica">
                        <h3>{t("practica.sitio")}</h3>
                        <p>{t("sitio.descripcion")}</p>
                        <ul>
                            <li className="html-icono"><FaHtml5 title={t("icon.html")} /></li>
                            <li className="css-icono"><DiCss3 title={t("icon.css")} /></li>
                        </ul>
                        <div className="linea-botones-practica">
                            <a href="https://yeremaia.github.io/SitioWebCSSGrid/" target="_blank" className="ejecutar-codigo"><FaCaretRight />{t("boton.ver-demo")}</a>
                            <a href="https://github.com/Yeremaia/SitioWebCSSGrid.git" target="_blank"  className="ver-codigo"><GrCode />{t("boton.ver-code")}</a>
                        </div>
                    </div>
                </div>
                {/* Cuarto titulo */}
                <h2 className="titulo-certificado-movil">{t("title.formacion")} <FaGraduationCap /></h2>
                <div className="slider-certificados">

                    <button className="btn-slider" onClick={anterior} disabled={indiceCertificado === 0}>
                        <FaAngleLeft />
                    </button>

                    <div className="conjunto-formacion">
                        {certificados
                        .slice(indiceCertificado, indiceCertificado + certificadosPorVista)
                        .map((cert, index) => (
                            <div className="caja-certificado" key={index}>
                            <img src={cert.logo} alt={cert.titulo} />
                            <h3 className="titulo-certificado">{cert.titulo}</h3>
                            {cert.curso && <p className="curso-certificado">{cert.curso}</p>}
                            <p className="tipo-carrera">{cert.tipo}</p>
                            <p className="curso-enfocado">{cert.descripcion}</p>
                            {cert.link && <a href={cert.link} target="_blank"> {t("formacion.link")} </a>}
                            </div>
                        ))}
                    </div>

                    <button
                        className="btn-slider"
                        onClick={siguiente}
                        disabled={indiceCertificado + certificadosPorVista >= certificados.length}
                    >
                        <FaAngleRight />
                    </button>
                    </div>
                    <div className="indicadores-certificados">
                    {Array.from({ length: Math.ceil(certificados.length / certificadosPorVista) }).map((_, i) => (
                        <span
                        key={i}
                        className={indiceCertificado / certificadosPorVista === i ? "activo" : ""}
                        onClick={() => setIndiceCertificado(i * certificadosPorVista)}
                        ></span>
                    ))}
                    </div>

                <footer id="ir-contacto">
                    <h2>{t("title.footer")} <FaPhoneAlt /></h2>
                    <p>{t("footer.descripcion")}</p>
                    <ul>
                        <li className="gmail"><a href=""><MdEmail /> yerethedark@gmail.com</a></li>
                        <li><a href=""><FaGithub /> Yeremaia</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Inicio