import React from "react";
import Button from "../button/Button";
import "./grammarSection.css"
import { Link } from "react-router-dom";

function GrammarSection() {

    return (
        <section id="grammarSection">
            <div class="container container-box text-center">
                <div class="row row-box">
                    <div class="col col-box-image">
                        <img src="https://cdn-icons-png.flaticon.com/512/4359/4359738.png" alt="grammar-img"></img>       
                    </div>
                    <div class="col col-box-description">
                        <h1>Grammar</h1>
                        <p>
                            Level up your knowlodge with the Grammar of the language of your choice.
                        </p>
                        <Link to="grammar"><Button title = "Learn more"/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GrammarSection;