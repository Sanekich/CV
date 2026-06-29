import "./AboutMe.css";
import { useEffect } from "react";
import Beams from "../MainPage/Beams";
import { useLang } from "../MainPage/Home";

// ─── Translations ──────────────────────────────────────────────────────────────
const strings = {
    en: {
        title: "About Me",
        personal_subtitle: "Personal Information",
        name: "Name",
        dob: "Date of birth",
        nationality: "Nationality",
        phone: "Phone",
        email: "Email",
        residence: "Residence",
        objective_subtitle: "Professional Objective",
        objective_text:
            "Motivated and multilingual junior developer, eager to gain real-world experience and grow in a dynamic environment. Strong communication skills, team-oriented mindset, and passion for learning new technologies.",
        education_subtitle: "Education",
        edu1_school: "ITIS Majorana – Giorgi",
        edu1_years: "2022 – Present",
        edu2_school: "TNTU – Information Technology",
        edu2_years: "2024 – Present",
        languages_subtitle: "Languages",
        languages: ["Ukrainian – Native", "English – Fluent", "Russian – Fluent", "Italian – Excellent"],
        tech_subtitle: "Technical Skills",
        tech: [
            "Frontend: React.js, HTML5, CSS3, JavaScript",
            "Backend: Node.js, Python (Django), ASP.NET",
            "REST APIs & basic system design",
            "Ability to build full-stack web applications",
        ],
        soft_subtitle: "Personal Skills",
        soft: [
            "Strong communication and collaboration",
            "Fast learner, proactive mindset",
            "Punctual, reliable, and responsible",
            "Creative",
        ],
        interests_subtitle: "Interests",
        interests_text: "Technology, foreign languages, sports, music, travel",
    },
    it: {
        title: "Chi Sono",
        personal_subtitle: "Informazioni Personali",
        name: "Nome",
        dob: "Data di nascita",
        nationality: "Nazionalità",
        phone: "Telefono",
        email: "Email",
        residence: "Residenza",
        objective_subtitle: "Obiettivo Professionale",
        objective_text:
            "Junior developer motivato e multilingue, desideroso di acquisire esperienza pratica e crescere in un ambiente dinamico. Ottime capacità comunicative, mentalità orientata al lavoro di squadra e passione per l'apprendimento di nuove tecnologie.",
        education_subtitle: "Formazione",
        edu1_school: "ITIS Majorana – Giorgi",
        edu1_years: "2022 – Presente",
        edu2_school: "TNTU – Informatica",
        edu2_years: "2024 – Presente",
        languages_subtitle: "Lingue",
        languages: ["Ucraino – Madrelingua", "Inglese – Fluente", "Russo – Fluente", "Italiano – Eccellente"],
        tech_subtitle: "Competenze Tecniche",
        tech: [
            "Frontend: React.js, HTML5, CSS3, JavaScript",
            "Backend: Node.js, Python (Django), ASP.NET",
            "REST API e progettazione di base dei sistemi",
            "Capacità di sviluppare applicazioni web full-stack",
        ],
        soft_subtitle: "Competenze Personali",
        soft: [
            "Ottime capacità di comunicazione e collaborazione",
            "Apprendimento rapido, mentalità proattiva",
            "Puntuale, affidabile e responsabile",
            "Creativo",
        ],
        interests_subtitle: "Interessi",
        interests_text: "Tecnologia, lingue straniere, sport, musica, viaggi",
    },
};

function AboutMe() {
    const { lang } = useLang();
    const s = strings[lang];

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("show");
                });
            },
            { threshold: 0.1 }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="AboutMe">
            <div className="BeamsAbout">
                <Beams />
            </div>

            {/* ── Page title ── */}
            <h1 className="about-title reveal">{s.title}</h1>

            {/* ── Personal info ── */}
            <section className="about-section reveal">
                <h3 className="about-subtitle">{s.personal_subtitle}</h3>
                <p><strong>{s.name}:</strong> Muratov Oleksandr</p>
                <p><strong>{s.dob}:</strong> 08 October 2007</p>
                <p><strong>{s.nationality}:</strong> Ukrainian</p>
                <p><strong>{s.phone}:</strong> +39 375 6905399</p>
                <p><strong>{s.email}:</strong> alex.d.muratov@gmail.com</p>
                <p><strong>{s.residence}:</strong> Genova</p>
            </section>

            {/* ── Professional Objective ── */}
            <section className="about-section reveal">
                <h3 className="about-subtitle">{s.objective_subtitle}</h3>
                <p>{s.objective_text}</p>
            </section>

            {/* ── Education ── */}
            <section className="about-section reveal">
                <h3 className="about-subtitle">{s.education_subtitle}</h3>
                <p><strong>{s.edu1_school}</strong></p>
                <p>{s.edu1_years}</p>
                <p><strong>{s.edu2_school}</strong></p>
                <p>{s.edu2_years}</p>
            </section>

            {/* ── Languages ── */}
            <section className="about-section reveal">
                <h3 className="about-subtitle">{s.languages_subtitle}</h3>
                <ul>
                    {s.languages.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
            </section>

            {/* ── Technical Skills ── */}
            <section className="about-section reveal">
                <h3 className="about-subtitle">{s.tech_subtitle}</h3>
                <ul>
                    {s.tech.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
            </section>

            {/* ── Personal Skills ── */}
            <section className="about-section reveal">
                <h3 className="about-subtitle">{s.soft_subtitle}</h3>
                <ul>
                    {s.soft.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
            </section>

            {/* ── Interests ── */}
            <section className="about-section reveal">
                <h3 className="about-subtitle">{s.interests_subtitle}</h3>
                <p>{s.interests_text}</p>
            </section>
        </div>
    );
}

export default AboutMe;