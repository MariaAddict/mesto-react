import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm name='edit' title='Редактировать профиль' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >
            <input type="text" name="name" className="modal__item modal__item_type_name"
                placeholder="Имя профиля" onChange={handleChangeName} value={name} />
            <span className="modal__error modal__error_visible" id="label-error"></span>
            <input type="text" name="activity" className="modal__item modal__item_type_activity-type"
                placeholder="О себе" onChange={handleChangeDescription} value={description} />
            <span className="modal__error modal__error_visible" id="activity-error"></span>
            <button type="submit" className="modal__save-button"><span className="modal__name-button">Сохранить</span></button>
        </PopupWithForm>
    );
}

export default EditProfilePopup;