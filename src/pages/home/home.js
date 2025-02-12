import React from 'react'
import testImage from '../../assets/test.jpg'
import CharacterCardItem from '../../components/character-card-item/character-card-item';


const Home =()=> {
    return (
        <div className="home-pages">
            <h1 className="home-pages__title text-center">
                Rick and Morty Crud
            </h1>

            <div className="home-pages__container-grid-items">
                <CharacterCardItem/>
                <CharacterCardItem/>
            </div>
        
        </div>
    )
}

export default Home;