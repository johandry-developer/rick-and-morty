import React, { useEffect, useState } from "react";



const Modal = ({ closeModal, info, acceptButton }) => {
 
 
    return (
        <div className="modal">
            <div className="modal-background" onClick={closeModal}></div>
            
            <div className="box-modal">
                <div className="container-modal">
                    <div className="header-modal"> 
                        {info?.title}
                    </div>
                    <div className="info-modal">
                       {info?.description}
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