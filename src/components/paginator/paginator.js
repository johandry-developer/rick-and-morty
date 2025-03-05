import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTableCellsLarge, faTableColumns, faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight, faEllipsis} from '@fortawesome/free-solid-svg-icons';


const Paginator = ({pageCurrent, settingPage, totalPages })=> {

const sum = () => {
  if (pageCurrent < totalPages) {
    const suma = pageCurrent + 1;
    settingPage(suma)
  
  }
}

const rest = () => {
  if (pageCurrent > 1) {
    const resta = pageCurrent - 1;
    settingPage(resta)
  }
}

const lastPage = () => {
  settingPage(totalPages)
}

const firstPage = () => {
  settingPage(1)
}




    return (
        <div className= "paginator">

            <button className="paginator__flashbutton" onClick={firstPage}>
              <FontAwesomeIcon icon={faAnglesLeft}  />
            </button>

            <button className="paginator__button" onClick={rest} disabled={pageCurrent < 1} >
              <FontAwesomeIcon icon={faAngleLeft}  />
            </button>

            <p className="paginator__number">{pageCurrent}</p>   
            
            <button className="paginator__button" onClick={sum} disabled={pageCurrent >= totalPages} >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>

            <button className="paginator__flashbutton" onClick={lastPage}>
              <FontAwesomeIcon icon={faAnglesRight}  />
            </button>
      
           <p className="paginator__number">{totalPages}</p>  
             
        </div>
    )

}

export default Paginator;