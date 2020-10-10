//модалки и формы
const modalEditProfile = document.querySelector('.modal_type_edit');
const modalAddCard = document.querySelector('.modal_type_add');

const formEditProfile = modalEditProfile.querySelector('.modal__form');
const formAddCard = modalAddCard.querySelector('.modal__form');
const formAvatar = document.querySelector('.modal_type_avatar').querySelector('.modal__form');

//кнопки открытия
const openModalEditButton = document.querySelector('.profile__info-button');
const openModalAddButton = document.querySelector('.profile__add-button');

//данные профиля на странице
const nameProfile = document.querySelector('.profile__name');
const activityProfile = document.querySelector('.profile__activity-type');
const imageProfile = document.querySelector('.profile__image');

//селекторы карточек
const cardTemplateSelector = '.card-template';
const cardContainerSelector = '.cards';

export {
    modalEditProfile, modalAddCard, formEditProfile, formAddCard, formAvatar, openModalEditButton, openModalAddButton, nameProfile,
    activityProfile, imageProfile, cardTemplateSelector, cardContainerSelector
}