import React from "react";
import Button from "../button/Button";
import "./vocabularySection.css";
import { Link } from "react-router-dom";

function VocabularySection() {

    return (
        <section id="vocabularySection">
            <div class="container container-box text-center">
                <div class="row row-box">
                    <div class="col col-box-description">
                        <h1>Vocabulary</h1>
                        <p>
                            Create a card, save your word in two languages, practice by flipping the card.
                        </p>
                        <Link to="vocabulary"><Button title = "Try it!" /></Link>
                    </div>
                    <div class="col col-box-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/3898/3898090.png" alt="vocabulary-img"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VocabularySection;