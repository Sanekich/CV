import { useEffect, useRef, useState } from "react";
import "./Main.css";
import SectionLabel from "../SectionLabel";
import Beams from "./Beams";
import diplome1 from "./Diplome.png";
import diplome2 from "./Diplome2.jpg";
import { useLang } from "./Home";

// ─── All translatable strings ──────────────────────────────────────────────────
const strings = {
    en: {
        phone: "Phone:",
        email: "Gmail:",
        bio: "Completed training at ITStep Academy with strong frontend and backend fundamentals. Completed an internship at Onix, working with React-based user interfaces, server-side logic in Node.js, and REST APIs. Motivated to grow as a professional, quick to learn new technologies, and comfortable working in a team environment.",
        skills_title: "Skills",
        skillList: [
            "Programming languages: Python, C++, C#",
            "Web development: HTML5, CSS3, JavaScript",
            "Frontend frameworks: React, Angular",
            "Backend & frameworks: ASP.NET Core, .NET Framework",
            "Desktop applications: Windows Forms, WPF",
            "OOP, Design Patterns, UML",
            "Databases: MS SQL Server, ADO.NET",
            "System & network programming basics",
            "Cloud: Microsoft Azure",
            "Team collaboration & project experience",
        ],
        projects_title: "Projects",
        project1: "Project 1: Backend development for web app",
        project2: "Project 2: Fullstack React Store",
        view_project: "View Project",
        diploma_title: "Diploma",
        download_diploma: "Download Diploma supplement",
    },
    it: {
        phone: "Telefono:",
        email: "Email:",
        bio: "Ho completato la formazione presso l'Academy ITStep acquisendo solide basi di sviluppo frontend e backend. Ho svolto uno stage presso Onix, lavorando con interfacce React, logica server-side in Node.js e REST API. Motivato a crescere professionalmente, apprendo rapidamente nuove tecnologie e mi trovo a mio agio nel lavoro di squadra.",
        skills_title: "Competenze",
        skillList: [
            "Linguaggi di programmazione: Python, C++, C#",
            "Sviluppo web: HTML5, CSS3, JavaScript",
            "Framework frontend: React, Angular",
            "Backend e framework: ASP.NET Core, .NET Framework",
            "Applicazioni desktop: Windows Forms, WPF",
            "OOP, Design Pattern, UML",
            "Database: MS SQL Server, ADO.NET",
            "Basi di programmazione di sistema e di rete",
            "Cloud: Microsoft Azure",
            "Collaborazione in team ed esperienza su progetti reali",
        ],
        projects_title: "Progetti",
        project1: "Progetto 1: Sviluppo backend per app web",
        project2: "Progetto 2: Store React full-stack",
        view_project: "Vedi Progetto",
        diploma_title: "Diploma",
        download_diploma: "Scarica supplemento al diploma",
    },
};

function Main() {
    const { lang } = useLang();
    const s = strings[lang];

    const nameRef = useRef(null);
    const [activeSection, setActiveSection] = useState("Info");

    const sectionsRef = {
        Info: useRef(null),
        Skills: useRef(null),
        Projects: useRef(null),
        Diplome: useRef(null),
    };

    const [photo, SetPhoto] = useState(true);
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => setModalImage(image);
    const closeModal = () => setModalImage(null);

    // Detect active section for the floating label
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.dataset.section);
                    }
                });
            },
            { rootMargin: "-25% 0px -25% 0px", threshold: 0.1 }
        );

        Object.values(sectionsRef).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    // Reveal animation on scroll
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.05 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Animated name letters
    useEffect(() => {
        const el = nameRef.current;
        if (!el) return;
        const text = "Muratov Aleksandr";
        el.textContent = "";
        [...text].forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.animationDelay = `${i * 0.08}s`;
            el.appendChild(span);
        });
    }, []);

    // Section label text (translated)
    const sectionLabelMap = {
        en: { Info: "Info", Skills: "Skills", Projects: "Projects", Diploma: "Diploma" },
        it: { Info: "Info", Skills: "Competenze", Projects: "Progetti", Diploma: "Diploma" },
    };
    const labelText = sectionLabelMap[lang][activeSection] ?? activeSection;

    return (
        <div className="Main">
            <div className="Beammms">
                <Beams />
            </div>

            {/* INFO SECTION */}
            <section ref={sectionsRef.Info} data-section="Info" className="InfoContainer">
                <h2 ref={nameRef} className="NameText">Muratov Aleksandr</h2>
                <p className="Info reveal" style={{ transitionDelay: "0.1s" }}>
                    {s.phone} +39 375 690 5399
                </p>
                <p className="Info reveal" style={{ transitionDelay: "0.2s" }}>
                    {s.email} alex.d.muratov@gmail.com
                </p>
                <p className="Info reveal" style={{ marginTop: "5%", transitionDelay: "0.3s" }}>
                    {s.bio}
                </p>
            </section>

            {/* SKILLS SECTION */}
            <section ref={sectionsRef.Skills} data-section="Skills" className="SkillsContainer">
                <h2 className="NameText reveal">{s.skills_title}</h2>
                {s.skillList.map((skill, index) => (
                    <p
                        key={index}
                        className="Info reveal"
                        style={{ transitionDelay: `${index * 0.05}s`, margin: "10px 0" }}
                    >
                        {skill}
                    </p>
                ))}
            </section>

            {/* PROJECTS SECTION */}
            <section ref={sectionsRef.Projects} data-section="Projects" className="ProjectsContainer">
                <h2 className="NameText reveal">{s.projects_title}</h2>
                <div className="Info reveal" style={{ marginBottom: "40px", transitionDelay: "0.1s" }}>
                    <li>{s.project1}</li>
                    <button
                        className="link-button"
                        onClick={() =>
                            window.open("https://github.com/DiplomeProject/paintingsproject", "_blank")
                        }
                    >
                        {s.view_project}
                    </button>
                </div>
                <div className="Info reveal" style={{ transitionDelay: "0.2s" }}>
                    <li>{s.project2}</li>
                    <button
                        className="link-button"
                        onClick={() =>
                            window.open("https://www.metodo-ballance.it/", "_blank")
                        }
                    >
                        {s.view_project}
                    </button>
                </div>
            </section>

            {/* Image modal */}
            {modalImage && (
                <div className="image-backdrop" onClick={closeModal}>
                    <div
                        className="image-modal"
                        style={{
                            backgroundImage:
                                modalImage === "diplome1" ? `url(${diplome1})` : `url(${diplome2})`,
                        }}
                        onClick={closeModal}
                    />
                </div>
            )}

            {/* CERTIFICATES / DIPLOMA SECTION */}
            <section ref={sectionsRef.Diplome} data-section="Diploma" className="CertificatesContainer">
                <h2 className="NameText reveal">{s.diploma_title}</h2>

                <div className="Info reveal" style={{ marginBottom: "40px", transitionDelay: "0.1s" }}>
                    <button className={`dot ${photo ? "active" : ""}`} onClick={() => SetPhoto(true)}>
                        1
                    </button>
                    <button className={`dot ${!photo ? "active" : ""}`} onClick={() => SetPhoto(false)}>
                        2
                    </button>

                    {photo ? (
                        <div className="ImageDiv" onClick={() => openModal("diplome1")} />
                    ) : (
                        <div className="ImageDiv2" onClick={() => openModal("diplome2")} />
                    )}
                </div>

                <a
                    href="./Muratov Diplome.pdf"
                    download="Aleksandr_Muratov_Diplome.pdf"
                    className="link-button"
                    style={{ marginTop: "20px" }}
                >
                    {s.download_diploma}
                </a>
            </section>

            <div className="glow-line">
                <SectionLabel key={labelText} text={labelText} />
            </div>
        </div>
    );
}

export default Main;