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
    
    function handleEditAvatarClick() {
        setisEditAvatarPopupOpen(true);
    };
    function handleEditProfileClick() {
        setisEditProfilePopupOpen(true);
    };
    function handleAddPlaceClick() {
        setisAddPlacePopupOpen(true);
    };
    function closeAllPopups() {
        setisAddPlacePopupOpen(false);
        setisEditProfilePopupOpen(false);
        setisEditAvatarPopupOpen(false);
    };

  return (
    <div className="App">
      <div className="page">
          <Header />
          <Main  { ...{onEditProfile: handleEditProfileClick, onAddPlace: handleAddPlaceClick, onEditAvatar: handleEditAvatarClick}} />
          <Footer/>

          <PopupWithForm name = 'edit' title = 'Редактировать профиль' isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups}>
                <input type="text" name="name" className="modal__item modal__item_type_name" placeholder="Имя профиля" />
                <span className="modal__error modal__error_visible" id="label-error"></span>
                <input type="text" name="activity" className="modal__item modal__item_type_activity-type" placeholder="О себе" />
                <span className="modal__error modal__error_visible" id="activity-error"></span>
                <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
          </PopupWithForm>
          <PopupWithForm name = 'add' title = 'Новое место' isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}>
                <input type="text" name="name" className="modal__item modal__item_type_header-image" placeholder="Название" id="name" />
                <span className="modal__error modal__error_visible" id="name-error"></span>
                <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" />
                <span className="modal__error modal__error_visible" id="url-error"></span>
                <button type="submit" className="modal__save-button" disabled><span className="modal__name-button">Создать</span></button>
          </PopupWithForm>
          <PopupWithForm name = 'avatar' title = 'Обновить аватар' isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups}>
                <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" />
                <span className="modal__error modal__error_visible" id="url-error"></span>
                <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
          </PopupWithForm>
          {/* <PopupWithForm name = 'check' title = 'Вы уверены?' isOpen = {isEditAvatarPopupOpen}>
                <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" autocomplete="off" required/>
                <span className="modal__error modal__error_visible" id="url-error"></span>
                <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
          </PopupWithForm> */}
        {/* <div className="modal modal_type_edit">
            <div className="modal__container modal__container_type_edit">
                <h2 className="modal__title">Редактировать профиль</h2>
                <form action="#" name="modal-form" className="modal__form" novalidate>
                    <input type="text" name="name" className="modal__item modal__item_type_name" placeholder="Имя профиля" minlength="2" maxlength="40" id="label" autocomplete="off" required/>
                    <span className="modal__error modal__error_visible" id="label-error"></span>
                    <input type="text" name="activity" className="modal__item modal__item_type_activity-type" placeholder="О себе" minlength="2" maxlength="200" id="activity" autocomplete="off" required/>
                    <span className="modal__error modal__error_visible" id="activity-error"></span>
                    <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
                </form>
                <button type="button" className="modal__close-button"></button>
            </div>
        </div> */}
        {/* <div className="modal modal_type_add">
            <div className="modal__container modal__container_type_add">
                <h2 className="modal__title">Новое место</h2>
                <form action="#" name="modal-form" className="modal__form" novalidate>
                    <input type="text" name="name" className="modal__item modal__item_type_header-image" placeholder="Название" id="name" minlength="1" maxlength="30" autocomplete="off" required/>
                    <span className="modal__error modal__error_visible" id="name-error"></span>
                    <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" autocomplete="off" required/>
                    <span className="modal__error modal__error_visible" id="url-error"></span>
                    <button type="submit" className="modal__save-button" disabled><span className="modal__name-button">Создать</span></button>
                </form>
                <button type="button" className="modal__close-button"></button>
            </div>
        </div> */}
        {/* <ImagePopup/> */}
        <div className="modal modal_type_figure">
            <div className="modal__container modal__container_type_image">
                <figure className="modal__figure">
                    <img src="#" alt="" className="modal__image"/>
                    <figcaption className="modal__caption"></figcaption>
                </figure>
                <button type="button" className="modal__close-button"></button>
            </div>
        </div>
        {/* */}
        <div className="modal modal_type_check">
            <div className="modal__container modal__container_type_check">
                <h2 className="modal__title">Вы уверены?</h2>
                <form action="#" name="modal-form" className="modal__form" >
                <button type="submit" className="modal__save-button">Да</button>
                </form>
                <button type="button" className="modal__close-button"></button>
            </div>
        </div>
        {/* <div className="modal modal_type_avatar">
            <div className="modal__container">
                <h2 className="modal__title">Обновить аватар</h2>
                <form action="#" name="modal-form" className="modal__form" novalidate>
                  <input type="url" name="link" className="modal__item modal__item_type_url-image" placeholder="Ссылка на картинку" id="url" autocomplete="off" required/>
                  <span className="modal__error modal__error_visible" id="url-error"></span>
                  <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
                </form>
                <button type="button" className="modal__close-button"></button>
            </div>
        </div> */}
        {/* <template className="card-template">
            <li className="cards__item">
                <img src="#" alt="" className="cards__image"/>
                <div className="cards__description">
                    <h3 className="cards__title"></h3>
                    <div className="cards__likes">
                      <button type="button" className="cards__like"></button>
                      <p className="cards__number-of-likes"></p>
                    </div>
                </div>
                <button type="button" className="cards__delete"></button>
            </li>
        </template> */}
    </div>
    </div>
  );
}

export default App;
