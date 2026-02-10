import { useEffect, useRef, useState } from "react";
import "./Main.css";
import SectionLabel from "../SectionLabel";
import { useNavigate } from "react-router-dom";
import Beams from "./Beams";
import diplome1 from "./Diplome.png";
import diplome2 from "./Diplome2.jpg";


function Main() {
    const nameRef = useRef(null);
    const [activeSection, setActiveSection] = useState("Info");

    const sectionsRef = {
        Info: useRef(null),
        Skills: useRef(null),
        Projects: useRef(null),
        Diplome: useRef(null)
    };

    const skillList = [
        "Programming languages: Python, C++, C#",
        "Web development: HTML5, CSS3, JavaScript",
        "Frontend frameworks: React, Angular",
        "Backend & frameworks: ASP.NET Core, .NET Framework",
        "Desktop applications: Windows Forms, WPF",
        "OOP, Design Patterns, UML",
        "Databases: MS SQL Server, ADO.NET",
        "System & network programming basics",
        "Cloud: Microsoft Azure",
        "Team collaboration & project experience"
    ];

    const [photo, SetPhoto] = useState(true);
    const [modalImage, setModalImage] = useState(null);
    const navigate = useNavigate();
    const [animating, setAnimating] = useState(false);
    const [navTriggered, setNavTriggered] = useState(false);
    
    const openModal = (image) => setModalImage(image);
    const closeModal = () => setModalImage(null);

    const right = ">";
    const left = "<";

    // Detect active section for the floating label
   useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // We only update if the section is entering the middle area of the screen
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.dataset.section);
                }
            });
        },
        { 
            // This captures the section when it's anywhere in the middle 50% of the screen
            rootMargin: "-25% 0px -25% 0px", 
            threshold: 0.1 
        }
    );

    Object.values(sectionsRef).forEach(ref => {
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
            { threshold: 0.05 } // Lower threshold so it triggers earlier
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Animated name letters
    useEffect(() => {
        const el = nameRef.current;
        if (!el) return;
        const text = el.textContent;
        el.textContent = "";
        [...text].forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.animationDelay = `${i * 0.08}s`;
            el.appendChild(span);
        });
    }, []);



    return (
        <div className="Main">

            <div className="Beammms">
                <Beams />
            </div>

            

            {/* INFO SECTION */}
            <section ref={sectionsRef.Info} data-section="Info" className="InfoContainer">
                {/* We remove .reveal from the header because spans have their own animation */}
                <h2 ref={nameRef} className="NameText">Muratov Aleksandr</h2>
                <p className="Info reveal" style={{ transitionDelay: "0.1s" }}>Phone: +39 375 690 5399</p>
                <p className="Info reveal" style={{ transitionDelay: "0.2s" }}>Gmail: alex.d.muratov@gmail.com</p>
                
                <div className="Info reveal" style={{ marginTop: "5%", transitionDelay: "0.3s" }}>
                    <p className="Info reveal" style={{ marginTop: "5%" }}> Completed training at ITStep academy with strong frontend and backend fundamentals.<br /> Internship at Onix working with React UI, Node.js, and REST APIs.<br /> Motivated junior developer, fast learner, team-oriented.Completed training at ITStep, where I gained solid foundational knowledge in frontend and backend development.<br/> Completed an internship at Onix, working with React-based user interfaces, server-side logic in Node.js, and REST APIs.<br/> Motivated to grow as a professional, quick to learn new technologies, and comfortable working in a team environment. </p>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section ref={sectionsRef.Skills} data-section="Skills" className="SkillsContainer">
                <h2 className="NameText reveal">Skills</h2>
                {skillList.map((skill, index) => (
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
                <h2 className="NameText reveal">Projects</h2>
                <div className="Info reveal" style={{ marginBottom: "40px", transitionDelay: "0.1s" }}>
                    <li>Project 1: Backend development for team web app</li>
                    <button className="link-button" onClick={() => window.open("https://github.com/DiplomeProject/paintingsproject", "_blank")}>
                        View Project
                    </button>
                </div>
                <div className="Info reveal" style={{ transitionDelay: "0.2s" }}>
                    <li>Project 2: Fullstack React Store (In progress)</li>
                    <button className="link-button" onClick={() => window.open("https://github.com/Sanekich/reactstore", "_blank")}>
                        View Project
                    </button>
                </div>
            </section>

                    {modalImage && (
                        <div className="image-backdrop" onClick={closeModal}>
                            <div
                            className="image-modal"
                            style={{
                                backgroundImage:
                                modalImage === 'diplome1'
                                    ? `url(${diplome1})`
                                    : `url(${diplome2})`
                            }}
                            onClick={closeModal}
                            />
                        </div>
                        )}

            {/* CERTIFICATES*/}
            <section ref={sectionsRef.Diplome} data-section="Diploma" className="CertificatesContainer">
                <h2 className="NameText reveal">Diploma</h2>

                <div className="Info reveal" style={{ marginBottom: "40px", transitionDelay: "0.1s" }}>
                    <button className={`dot ${photo ? 'active' : ''}`} onClick={() => SetPhoto(true)}>1</button>
                    <button className={`dot ${!photo ? 'active' : ''}`} onClick={() => SetPhoto(false)}>2</button>

                    {photo
                        ? <div className="ImageDiv" onClick={() => openModal('diplome1')} />
                        : <div className="ImageDiv2" onClick={() => openModal('diplome2')} />
                    }

                </div>

                <a 
                    href="./Muratov Diplome.pdf" 
                    download="Aleksandr_Muratov_Diplome.pdf" 
                    className="link-button"
                    style={{ marginTop: "20px" }}
                >
                Download Diploma supplement
                </a>
                <div
                    className={`PageChanger ${animating ? 'hovering' : ''}`}
                    onClick={() => {
                        if (navTriggered) return;
                        setAnimating(true);
                        // navigate after the CSS transition completes (match ~350ms + small buffer)
                        setTimeout(() => {
                            setNavTriggered(true);
                            navigate('/about');
                        }, 420);
                    }}
                >
                    About me
                </div>
            </section>

                

            <div className="glow-line">
                <SectionLabel key={activeSection} text={activeSection} />
            </div>
        </div>
    );
}

export default Main;
