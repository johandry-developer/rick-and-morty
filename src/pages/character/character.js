import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteApiCharacter, getApiSingleCharacter } from "../../modules/actions/characters/characters";
import Modal from "../../components/modal/modal";


const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [infoModal, setInfoModal] = useState({
        title: '',
        description: '',
        image: '',
    })



    const getCharacterId = async () => {
       const response = await getApiSingleCharacter(id)
       setCharacter(response)
    }

    const handelInfoModal = () => {
        setInfoModal({
            title: 'Eliminar personaje',
            description: `Estas seguro que deseas eliminar al personaje ${character?.name}`,
            image: character?.image
        })
    }

    const settingModal = () => {
        setIsModalOpen(!isModalOpen);

    };

    const deleteCharacter = async () => {
        const response = await deleteApiCharacter(character.id)
        settingModal()
    }
      
   
    useEffect(()=> {
        getCharacterId()
    }, [])

    useEffect(()=> {
        handelInfoModal()
    }, [character])
 
    return (
        <div className="character-page-container">
            {
                isModalOpen && 
                    <Modal 
                        closeModal={settingModal} 
                        info={infoModal} 
                        acceptButton={deleteCharacter}
                    />
            }
            <div className="character-page">
                <div className="img-container">
                    <img className="img-character" src={character?.image} alt={`Project johandry character: `} />    
                </div>
                <div className="character-info">
                    <h1 className="title">Name: {character?.name ? character.name : "No tiene nombre"}</h1>
                    <h2 className="sub-title">Gender: {character?.gender ? character.gender : "No tiene genero"} </h2>
                    <h2 className="sub-title-2">location: {character?.location?.name ? character.location.name : "No tiene locación"}</h2>
                    <p className="paragraph">location Url: {character?.location?.url ? character.location.url : "no hay dirección"}</p>
                    <p className="paragraph">Origin: {character?.origin?.name ? character.origin.name : "no hay datos"}</p>
                    <p className="paragraph">{character?.origin?.url ? character.origin.url : "no hay dirección"}</p>

                    <h2 className="sub-title-2">Especie: {character?.species ? character.species : "DESCONOCIDO"  }</h2>
                    <h2 className="sub-title-2 inline">     
                        Status:  
                         <div className={`circle ${character?.status == "Alive" ? 'background-green' : 'background-red' }`}  /> 
                        {character?.status ? character.status : "DESCONOCIDO"}
                    </h2>
                    <button className="button" onClick={settingModal}>Eliminar Personaje</button>
                </div>
            </div>    
            
            <div className="container-capitules">
                
                <h3>
                    Este personaje aparece en {' '}  
                    {character?.episode && character.episode.length} 
                             
                    {character?.episode && character.episode.length < 2 ? ' capitulo' : ' capitulos'} 
                </h3>


                {
                    character?.episode && character.episode.length > 0 && character.episode.map((item, index)=> { 
                        return (
                            <div className="clase-repite" key={index}>
                                <p>Aparece en el capitulo: {item}</p>
                            </div>
                        )
                    })
                }            
            </div>
        </div>

    )
}


export default Character;