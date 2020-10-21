import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext , user} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getUserInfo().then((dataUser) => {
            setCurrentUser(dataUser);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    function handleEditAvatarClick() {
        setisEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setisEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setisAddPlacePopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    function closeAllPopups() {
        setisAddPlacePopupOpen(false);
        setisEditProfilePopupOpen(false);
        setisEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    return (
        < CurrentUserContext.Provider value={currentUser}>
        <div className="App">
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />

                <Footer />

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                
                <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <input type="text" name="name" className="modal__item modal__item_type_header-image" placeholder="Название" id="name" />
                    <span className="modal__error modal__error_visible" id="name-error"></span>
                    <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" />
                    <span className="modal__error modal__error_visible" id="url-error"></span>
                    <button type="submit" className="modal__save-button" disabled><span className="modal__name-button">Создать</span></button>
                </PopupWithForm>
                <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" />
                    <span className="modal__error modal__error_visible" id="url-error"></span>
                    <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
                </PopupWithForm>
                <ImagePopup {...selectedCard} onClose={closeAllPopups} />
            </div>
        </div>
        </ CurrentUserContext.Provider >
    );
}

export default App;