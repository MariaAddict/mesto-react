import React from 'react';
import api from '../utils/api';
import Card from './Card';

//userName, userDescription , userAvatar
function Main(props) {

    const [userName, setuserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo().then(dataUser => {
            setuserName(dataUser.name);
            setUserDescription(dataUser.about);
            setUserAvatar(dataUser.avatar);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    React.useEffect(() => {
        api.getInitialCards().then(data => {
            console.log(data);
            const items = data.map((item) => ({
                srcImage: item.link,
                title: item.name,
                likes: item.likes,
                idCard: item._id,
                idOwner: item.owner._id
            }));
            // console.log('cards: ', items);
            setCards(items);

        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__overlay" onClick={props.onEditAvatar}>
                    <img src={userAvatar} alt="Фото профиля" className="profile__image" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__info-button" onClick={props.onEditProfile} ></button>
                    <p className="profile__activity-type">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section>
                <ul className="cards">
                    {cards.map((card) => 
                    <Card {...card}/>
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;