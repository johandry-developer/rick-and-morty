import React, { useEffect, useState } from 'react'

import CharacterCardItem from '../../components/character-card-item/character-card-item';
import { DATA_DUMMY_PERSONAS, DATA_DUMMY_SIMPSON } from '../../components/character-card-item/data';
import CharacterCardItemHorizontal from '../../components/character-card-item-horizontal/character-card-item-horizontal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTableCellsLarge, faTableColumns, faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import Paginator from '../../components/paginator/paginator';
import { getApiCharacters } from '../../modules/actions/characters/characters';



const Home = ()=> {
    // aqui creo mis estado ///
    const [orderGrid, setOrderGrid] = useState(false);
    const [data, setData] = useState();
    const [pageCurrent, setPageCurrent] = useState(1);
    const [totalPages, setTotalPages] = useState(1)


    const settingPage = (value) => {
        setPageCurrent(value)
    }

    const selectGrid =(value) => {
        setOrderGrid(value)
    } 

    const johandry = (x, y, z) => {
        const sum = x * y
        return sum + z.map((item)=> item.name + item.lastName )
    }

    const getCharacter = async ()=> {
       const response = await getApiCharacters(pageCurrent)
       setData(response?.results)
       setTotalPages(response?.info?.pages)
    }

   
    useEffect(() => {
        getCharacter()
    }, [pageCurrent]);



    console.log("Inicio");

    setTimeout(() => {
      console.log("Timeout 1 (0 ms)");
    }, 0);
    
    Promise.resolve().then(() => {
      console.log("Promesa resuelta");
    });
    
    setTimeout(() => {
      console.log("Timeout 2 (100 ms)");
    }, 5000);
    
    console.log("Fin");
 

    return (
        <div className="home-pages">

            <h1 className="home-pages__title text-center">
                Rick and Morty Crud
            </h1>
            <h2>
                {johandry(80, 20, [
                    {
                        name: "jose", 
                        lastName: "sancez",   
                    }, 
                    {
                        name: "ferndo", 
                        lastName: "sancez",  
                    },
                    {
                        name: "ramiro", 
                        lastName: "sancez",  
                    } 
                  ])}
            </h2>

            <div className="home-pages__align-grid">
                <div className="home-pages__align-grid__button" onClick={()=>selectGrid(false)}>
                    <FontAwesomeIcon icon={faTableColumns}/>
                </div>
                
                <div className="home-pages__align-grid__button" onClick={()=>selectGrid(true)}>
                    <FontAwesomeIcon icon={faTableCellsLarge}/>
                </div>          
            </div>

    
            <div className={`home-pages__container-grid-items ${orderGrid ? 'home-pages__grid-3-columns' : 'home-pages__grid-2-columns'}`}>
                {
                     data && data.length > 0 && data.map((item, index)=> {
                        return (
                            <CharacterCardItem key={index} personaje={item}/>
                        )
                    })
                }
            </div>

            
            
        
            <div className="background-paginator">
                <Paginator 
                    pageCurrent={pageCurrent}
                    settingPage={settingPage} 
                    totalPages={totalPages}
          
                />
            </div>
            
      
        
        </div>
    )
}


export default Home;

