import React from 'react'



const CharacterCardItem = ({personaje}) => {

    const validateAge =(age)=>{
        if (age) {
            return `${age} años`;  
        } else {
            return "no tiene edad"
        }
    }

    
    return (
        <div className='item-card'>
            <div className='item-card__container-image'>
                <img src={personaje?.image} alt=""/>
            </div>

            <div className="item-card__container-text">
                <div className="item-card__container-text__box1">
                    <p className="item-card__container-text__box1__title">{personaje.name ? personaje.name : "no tiene nombre"}</p>
                    <p className='item-card__container-text__box1__subtitle'>Genero: {personaje?.gender}</p>
                </div>
                <div className="item-card__container-text__box2">
                    <p className="item-card__container-text__box2__title">Especie: {personaje?.species}</p>
                    <p className="item-card__container-text__box2__subtitle">Status: {personaje?.status}</p>
                </div>  
                <div className="item-card__container-text__box3">
                    <p className="item-card__container-text__box3__title">Locación: {personaje?.location.name} </p>
                </div>
            </div>
        </div>
    )
}

export default CharacterCardItem;