import React from 'react'
import testImage from '../../assets/test.jpg'


const CharacterCardItem = () => {

    return (
        <div className='item-card'>
            <div className='item-card__container-image'>
            <img src={testImage} alt=""/>
            </div>

            <div className="item-card__container-text">
                <div className="item-card__container-text__box1">
                    <p className="item-card__container-text__box1__title">Armagedon</p>
                    <p className='item-card__container-text__box1__subtitle'>Episodio 1</p>
            
                </div>
                <div className="item-card__container-text__box2">
                    <p className="item-card__container-text__box2__title">Last known location:</p>
                    <p className="item-card__container-text__box2__subtitle">Signus 5 Expanse</p>
                </div>
                <div className="item-card__container-text__box3">
                    <p className="item-card__container-text__box3__title">First seen in:</p>
                    <p className="item-card__container-text__box3__subtitle">Get Schwifty</p>   
                </div>
            </div>
        </div>
    )
}

export default CharacterCardItem;