import React from 'react';

function Card(card) {
    return(
        <li className="cards__item" key={card.idCard}>
            <img src={card.srcImage} alt={card.title} className="cards__image" />
            <div className="cards__description">
                <h3 className="cards__title">{card.title}</h3>
                <div className="cards__likes">
                    <button type="button" className="cards__like"></button>
                    <p className="cards__number-of-likes">{card.likes.length}</p>
                </div>
            </div>
            <button type="button" className="cards__delete"></button>
        </li>
    );
}

export default Card;