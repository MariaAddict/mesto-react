import React from 'react';
import profileImage from '../images/profile-image.jpg';

function Main(props) {
    return(
        <main className="content">
            <section className="profile">
                <div className="profile__overlay" onClick  = {props.onEditAvatar}>
                  <img src={profileImage} alt="Фото профиля" className="profile__image"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__info-button" onClick={props.onEditProfile} ></button>
                    <p className="profile__activity-type">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section>
                <ul className="cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;