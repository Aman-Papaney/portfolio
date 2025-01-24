import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";
import ParticlesComponent from "./Components/Particles";

const siteProps = {
    name: "Aman Papaney",
    title: "Full Stack Web Developer",
    email: "amanpapaney2003@gmail.com",
    gitHub: "aman-papaney",
    linkedIn: "aman-papaney",
};

const primaryColor = "#364591";
const secondaryColor = "757575";

const App = () => {
    return (
            <div id="main">
                <ParticlesComponent id="particles"/>
                <Header />
                <Home name={siteProps.name} title={siteProps.title} />
                <About />
                <Portfolio />
                <Footer
                    {...siteProps}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                />
            </div>
    );
};

export default App;
