import React from "react";
import "./style.css";


function Footer() {
    return (
        <footer className="footer">
            <h2>TSM</h2>
            
            <a id="trevorsmay" href="/" target="home"><i className="fas fa-hiking"></i></a>
            <a id="instagram" href="https://www.instagram.com/trevsmay/" target="external"><i className="fab fa-instagram"></i></a>
            <a id="linkedin" href="https://www.linkedin.com/in/trevor-may/" target="external"><i className="fab fa-linkedin"></i></a>
            <a id="github" href="https://github.com/trevorsmay" target="external"><i className="fab fa-github-square"></i></a>
        </footer>
    )
}

export default Footer;