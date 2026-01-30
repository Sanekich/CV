import "./AboutMe.css";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Beams from "../MainPage/Beams";

function AboutMe() {
        const [animating, setAnimating] = useState(false);
        const [navTriggered, setNavTriggered] = useState(false);

    useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
}, []);

    const navigate = useNavigate();

    return (
        <div className="AboutMe">
            <div className="BeamsAbout">
                <Beams />
            </div>
            <section className="about-section reveal">
                <h2 className="about-title">Personal info</h2>
            </section>

            <section className="about-section reveal">
                <h3 className="about-subtitle">Personal Information</h3>
                <p><strong>Name:</strong> Muratov Oleksandr</p>
                <p><strong>Date of birth:</strong> 08 October 2007</p>
                <p><strong>Nationality:</strong> Ukrainian</p>
                <p><strong>Phone:</strong> +39 375 6905399</p>
                <p><strong>Email:</strong> alex.d.muratov@gmail.com</p>
            </section>

            <section className="about-section reveal">
                <h3 className="about-subtitle">Professional Objective</h3>
                <p>
                    Motivated and multilingual junior developer, eager to gain real-world experience and grow in a
                    dynamic environment. Strong communication skills, team-oriented mindset, and passion for learning
                    new technologies.
                </p>
            </section>

            <section className="about-section reveal">
                <h3 className="about-subtitle">Education</h3>
                <p><strong>ITIS Majorana – Giorgi</strong></p>
                <p>2022 – Present</p>
            </section>

            <section className="about-section reveal">
                <h3 className="about-subtitle">Languages</h3>
                <ul>
                    <li>Ukrainian – Native</li>
                    <li>English – Fluent</li>
                    <li>Russian – Fluent</li>
                    <li>Italian – Excellent</li>
                </ul>
            </section>

            <section className="about-section reveal">
                <h3 className="about-subtitle">Technical Skills</h3>
                <ul>
                    <li>Frontend: React.js, HTML5, CSS3, JavaScript</li>
                    <li>Backend: Node.js, Python (Django), ASP.NET</li>
                    <li>REST APIs & basic system design</li>
                    <li>Ability to build full-stack web applications</li>
                </ul>
            </section>

            <section className="about-section reveal">
                <h3 className="about-subtitle">Personal Skills</h3>
                <ul>
                    <li>Strong communication and collaboration</li>
                    <li>Fast learner, proactive mindset</li>
                    <li>Punctual, reliable, and responsible</li>
                </ul>
            </section>

            <section className="about-section reveal">
                <h3 className="about-subtitle">Interests</h3>
                <p>Technology, foreign languages, sports, music, travel</p>
            </section>
                <div
                    className={`PageChanger2 ${animating ? 'hovering' : ''}`}
                    onClick={() => {
                        if (navTriggered) return;
                        setAnimating(true);
                        // navigate after the CSS transition completes (match ~350ms + small buffer)
                        setTimeout(() => {
                            setNavTriggered(true);
                            navigate('/');
                        }, 420);
                    }}
                >
                    Main
                </div>
        </div>
    );
}

export default AboutMe;