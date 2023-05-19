import React from "react";
import { Routes, Route,  } from "react-router-dom";
import Navbar from "./homePage/navbar/Navbar";
import AboutSection from "./homePage/aboutSection/AboutSection";
import Footer from "./homePage/footer/Footer";
import GrammarSection from "./homePage/grammarSection/GrammarSection";
import VocabularySection from "./homePage/vocabularySection/VocabularySection";
import GrammarPage from "./grammarPage/GrammarPage";
import VocabularyPage from "./vocabularyPage/VocabularyPage";
import GamePage from "./gamePage/gamePage";
import SignUpPage from "./singUpPage/signUpPage";




function App(){
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element = {<div>
                        <AboutSection />
                        <GrammarSection />
                        <VocabularySection />
                        <Footer />
                     </div>} />
                     
                <Route path="grammar" element = {<GrammarPage />} />
                <Route path="vocabulary" element = {<VocabularyPage />} />
                <Route path="sign-up" element = {<SignUpPage />} />
                <Route path="game" element = {<GamePage />} />
            </Routes>  
        </>
    )
}

export default App;