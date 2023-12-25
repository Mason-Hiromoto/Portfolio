import { Link } from 'react-router-dom';
import '../css/home.css';
import { useState } from 'react';

import bishopLogo from '../assets/bishop logo.jpg';
import gmailLogo from '../assets/gmailLogo.png';
import instagramLogo from '../assets/instagramLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import pageBreak from '../assets/page break orange.png';
import pcbBoard from '../assets/pcb board.png';
import profilePic from '../assets/profile pic placeholder2.png';



function Home() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet" href="style.css" />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device=width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <title>Mason Hiromoto Portfolio</title>
        </head>
        <body>
            <nav>
            <ul id="navLeft">
                <li class="nav"><a id="Contact" href="">Contact</a></li>
                <li class="nav"><a id="About" href="">About</a></li>
                <li class="nav"><a id="Projects" href="">Projects</a></li>
            </ul>
            </nav>
            <header>
            <div id="profile">
                <img
                class="profilePic"
                src={profilePic}
                alt="profile pic"
                />
            </div>
            <h1>Mason Hiromoto</h1>
            <p>
                I am a current Electrical and Computer Engineering Student at the
                University of Washington. I am also a member of the Hawaii Club, Husky
                Robotics and Dubvelopers!
            </p>
            </header>
            <main>
            <div id="pageBreak1">
                <img
                class="pageBreak"
                src={pageBreak}
                alt="page break"
                />
            </div>
            <article id="projects">
                <h2>Projects/Experience</h2>
                <div id="bishopMuseum">
                <div>
                    <div><p id="bMHeader1">NHEP Intern</p></div>
                    <div>
                    <p id="bMHeader2">Bishop Museum | June 2021 - January 2022</p>
                    </div>
                    <div>
                    <ul id="bMList">
                        <li>
                        Conducted Research on the bioiversity of microinvertebrates in
                        an urban setting.
                        </li>
                        <li>
                        Used PCR to extract and amplify microinvertebrate DNA with the
                        goal to catalog the biodiversity around the Bishop Museum.
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <img
                    id="bishopLogo"
                    src={bishopLogo}
                    alt="bishopLogo"
                    />
                </div>
                </div>
                <div id="PCBBoard">
                <div>
                    <div><p id="PBHeader1">PCB Board</p></div>
                    <div>
                    <p id="PBHeader2">Husky Robotics | October 2022 - Current</p>
                    </div>
                    <div>
                    <ul id="PBList">
                        <li>
                        Developed schematics and layouts for a multi-layer power
                        distribution PCB Board
                        </li>
                        <li>TBD</li>
                    </ul>
                    </div>
                </div>
                <div>
                    <img id="pcbBoardPic" src={pcbBoard} alt="pcbBoard" />
                </div>
                </div>
            </article>
            </main>
            <footer>
            <div id="footerLinks">
                <div id="linkedIn">
                <a href="https://www.linkedin.com/in/mason-hiromoto">
                    <img
                    id="linkedInLogo"
                    src={linkedinLogo}
                    alt="linkedinLogo"
                    />
                    <p id="LinkedInp">LinkedIn</p>
                </a>
                </div>
                <div id="email">
                <a href="mailto:mason.hiromoto@gmail.com">
                    <img id="emailLogo" src={gmailLogo} alt="emailLogo" />
                    <p id="Emailp">Email</p>
                </a>
                </div>
                <div id="instagram">
                <a href="https://www.instagram.com/masont.hiro/">
                    <img
                    id="instagramLogo"
                    src={instagramLogo}
                    alt="instagramLogo"
                    />
                    <p id="Instagramp">Instagram</p>
                </a>
                </div>
            </div>
            <div id="copyright">
                <p>
                All content and images Copyright &copy 2022 Mason Hiromoto except for
                logos and background images
                </p>
            </div>
            </footer>
        </body>
        </html>
    );
}

export default Home;