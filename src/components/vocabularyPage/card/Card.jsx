import React, { useState } from "react";
import "./card.css"
import DeleteIcon from '@mui/icons-material/Delete';

function Card(props) {
    const [isActive, setActive] = useState(false);

    function handleClick() {
        setActive(!isActive);
    }

    function handleDelete() {
        return props.onDelete(props.id);
    }

    return (
        <div className={isActive ? "card is-flipped" : "card"} onClick={handleClick}>
            <div className="card-inner">
                <div className="card-front">
                    <div><h4>{props.fText}</h4></div>
                    <DeleteIcon className="deleteButton" onClick={handleDelete}/>
                </div>
                <div className="card-back">
                    <div><h4>{props.bText}</h4></div>
                    <DeleteIcon className="deleteButton" onClick={handleDelete}/>
                </div>
            </div>
            
        </div>
    )
}

export default Card;