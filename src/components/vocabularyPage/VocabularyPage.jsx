import React, {useState} from "react";
import "./vocabularyPage.css";
import Card from "./card/Card.jsx";
import CreateCardForm from "./createCardForm/CreateCardForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VocabularyPage() {
    const [cards, setCards] = useState([]);

    function addCards(card) {
      setCards((prevCards) => {
        return [...prevCards, card];
      });
      console.log(cards);
    }

    function deleteCard(id) { // we pass the "id" property using props in Card.jsx 
        setCards((prevCards) => {
            return prevCards.filter((cardItem, index) => {
                return index !== id // return cards except the one with the selected id
            })
        })
    }
    return(
        <div id="vocabularyPage">
            <div className="card-container">
            <CreateCardForm onAdd={addCards} />
            <Container>
                <Row xs={2} md={4} lg={6}>
                    {cards.map((cardItem, index) => {
                        return (
                            <Col>
                                <Card
                                    key={index}
                                    id={index}
                                    fText={cardItem.fText}
                                    bText={cardItem.bText}
                                    onDelete={deleteCard}
                                />
                            </Col>
                        );
                    }).reverse()} 
                </Row>
            </Container>
            </div>
        </div>
    )
}
export default VocabularyPage;