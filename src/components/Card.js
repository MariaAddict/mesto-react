import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <li className="cards__item">
            <img src={props.link} alt={props.name} className="cards__image" onClick={handleClick} />
            <div className="cards__description">
                <h3 className="cards__title">{props.name}</h3>
                <div className="cards__likes">
                    <button type="button" className="cards__like"></button>
                    <p className="cards__number-of-likes">{props.likes.length}</p>
                </div>
            </div>
            <button type="button" className="cards__delete"></button>
        </li>
    );
}

export default Card;