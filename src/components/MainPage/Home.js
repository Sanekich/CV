import { useState, createContext, useContext } from "react";
import Main from "./Main";
import AboutMe from "../AboutMe/AboutMe";
import "./Home.css";

// ─── Language Context ──────────────────────────────────────────────────────────
export const LangContext = createContext({ lang: "en", t: (en) => en });

export function useLang() {
    return useContext(LangContext);
}

// ─── Translations ──────────────────────────────────────────────────────────────
const translations = {
    en: {
        nav_main: "Main",
        nav_about: "About Me",
        lang_toggle: "English",
    },
    it: {
        nav_main: "Principale",
        nav_about: "Chi Sono",
        lang_toggle: "Italiano",
    },
};

function Home() {
    const [page, setPage] = useState("main");
    const [lang, setLang] = useState("it");

    const t = (key) => translations[lang][key] ?? key;

    return (
        <LangContext.Provider value={{ lang, t }}>
            <div className="home-container">
                <div className="PageChanger">
                    <button
                        className={page === "main" ? "active" : ""}
                        onClick={() => setPage("main")}
                    >
                        {t("nav_main")}
                    </button>

                    <button
                        className={page === "about" ? "active" : ""}
                        onClick={() => setPage("about")}
                    >
                        {t("nav_about")}
                    </button>

                    <button
                        className="lang-toggle"
                        onClick={() => setLang((l) => (l === "it" ? "en" : "it"))}
                        aria-label="Toggle language"
                    >
                        {t("lang_toggle")}
                    </button>
                </div>

                {page === "main" ? <Main /> : <AboutMe />}
            </div>
        </LangContext.Provider>
    );
}

export default Home;