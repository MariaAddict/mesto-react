import React from 'react';
import api from '../utils/api';
import Card from './Card';
import {CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

    const [cards, setCards] = React.useState([]);
    const userData = React.useContext(CurrentUserContext);
    console.log('user data in Main ', userData);

    React.useEffect(() => {
        api.getInitialCards().then((dataCards) => {
            setCards(dataCards);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__overlay" onClick={props.onEditAvatar}>
                    <img src={userData.avatar} alt="Фото профиля" className="profile__image" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userData.name}</h1>
                    <button type="button" className="profile__info-button" onClick={props.onEditProfile} ></button>
                    <p className="profile__activity-type">{userData.about}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section>
                <ul className="cards">
                    {cards.map((card) =>
                        <Card key={card._id} {...card} onCardClick={props.onCardClick} />
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;