import React from 'react';

function ImagePopup(props) {
    return(
        <div className={`modal modal_type_figure ${props.isOpen ? ('modal_opened') : ('')}`}>
            <div className="modal__container modal__container_type_image">
                <figure className="modal__figure">
                    <img src={props.srcImage} alt={props.title} className="modal__image"/>
                    <figcaption className="modal__caption">{props.title}</figcaption>
                </figure>
                <button type="button" className="modal__close-button" onClick = {props.onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;