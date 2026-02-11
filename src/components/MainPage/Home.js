import { useEffect, useRef, useState } from "react";
import SectionLabel from "../SectionLabel";
import { useNavigate } from "react-router-dom";
import Beams from "./Beams";
import diplome1 from "./Diplome.png";
import diplome2 from "./Diplome2.jpg";
import Main from "./Main";
import AboutMe from "../AboutMe/AboutMe";
import "./Home.css";

function Home() {
    const [page, setPage] = useState("main");

    const ChangePage = (newPage) => {
        setPage(newPage);
    }
    return (


        <div className="home-container">
           <div className="PageChanger">
                <button 
                    className={page === "main" ? "active" : ""}
                    onClick={() => ChangePage("main")}
                >
                    Main
                </button>

                <button 
                    className={page === "about" ? "active" : ""}
                    onClick={() => ChangePage("about")}
                >
                    About Me
                </button>
            </div>

            {page === "main" ? <Main /> : <AboutMe />}



        </div>
    );
}

export default Home;