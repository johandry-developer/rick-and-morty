import React from 'react'
import { useNavigate } from "react-router-dom";



const CharacterCardItem = ({personaje}) => {
    const navigate = useNavigate();

    const validateAge =(age)=>{
        if (age) {
            return `${age} años`;  
        } else {
            return "no tiene edad"
        }
    }

    const clickCharacter = (id) => {
        navigate(`/character/${id}`);
    }

   

    return (
        <div className='item-card' onClick={()=>clickCharacter(personaje?.id)} >
            <div className='item-card__container-image'>
                <img src={personaje?.image} alt={personaje?.name}/>
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
                    <p className="item-card__container-text__box3__title">Locación: {personaje?.location?.name} </p>
                </div>
            </div>
        </div>
    )
}

export default CharacterCardItem;