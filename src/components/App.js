import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

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
        setSelectedCard({ ...card, isOpen: true });
    }
    function closeAllPopups() {
        setisAddPlacePopupOpen(false);
        setisEditProfilePopupOpen(false);
        setisEditAvatarPopupOpen(false);
        setSelectedCard({});
    }

    return (
        <div className="App">
            <div className="page">
                <Header />
                <Main  {...{
                    onEditProfile: handleEditProfileClick, onAddPlace: handleAddPlaceClick, onEditAvatar: handleEditAvatarClick,
                    onCardClick: handleCardClick
                }}
                />
                <Footer />

                <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                    <input type="text" name="name" className="modal__item modal__item_type_name" placeholder="Имя профиля" />
                    <span className="modal__error modal__error_visible" id="label-error"></span>
                    <input type="text" name="activity" className="modal__item modal__item_type_activity-type" placeholder="О себе" />
                    <span className="modal__error modal__error_visible" id="activity-error"></span>
                    <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
                </PopupWithForm>
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
                {/* <PopupWithForm name='check' title='Вы уверены?' isOpen={isEditAvatarPopupOpen}>
                    <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" autocomplete="off" required />
                    <span className="modal__error modal__error_visible" id="url-error"></span>
                    <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
                </PopupWithForm> */}
                <ImagePopup {...selectedCard} onClose={closeAllPopups} />
            </div>
        </div>
    );
}

export default App;