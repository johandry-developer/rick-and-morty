import React, { useEffect, useState } from "react";




const Modal = ({ closeModal, info, acceptButton }) => {
 
    return (
        <div className="modal">
            <div className="modal-background" onClick={closeModal}></div>
            
            <div className="box-modal">
                <div className="container-modal">
                    <div className="header-modal"> 
                        <h2 className="title-modal">{info?.title}</h2>
                    </div>
                    <div className="info-modal">
                        <p className="paragraph-modal">
                         {info?.description}
                        </p>
                        <div className="character-container-img">
                            <img className="img-character" src={info?.image} alt={`Project johandry character: `} />
                        </div>
                    </div>
                    
                    <div className="footer-modal button-modal">
                        <button className="button" onClick={closeModal}>Cancelar</button>
                        <button className="button" onClick={acceptButton}>Aceptar</button>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default Modal;