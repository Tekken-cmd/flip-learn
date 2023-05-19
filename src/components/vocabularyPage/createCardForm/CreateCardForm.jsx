import React, { useState } from "react";
import "./createCardForm.css";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function CreateCardForm(props) {
  const [card, setCard] = useState({
    fText: "",
    bText: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCard((prevValue) => {
      if (name === "fText") {
        return {
          fText: value,
          bText: prevValue.bText
        };
      } else if (name === "bText") {
        return {
          fText: prevValue.fText,
          bText: value
        };
      }
    });
  }
  function submitCard(event) {
    props.onAdd(card); //pass the "note object" back to App.jsx
    setCard(() => {
      return {
        fText: "",
        bText: ""
      };
    });
    event.preventDefault(); //to prevent the auto refresh of the page when the add button is clicked
  }

  return (
    <div>
      <form className="card-form">
        <textarea
          onChange={handleChange}
          name="fText"
          placeholder="Enter the front text..."
          rows="2"
          value={card.fText}
        />
        <textarea
          className="secondTextArea"
          onChange={handleChange}
          name="bText"
          placeholder="Enter the back text..."
          rows="2"
          value={card.bText}
        />
        <Fab className="addButton" onClick={submitCard}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateCardForm;
