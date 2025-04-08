import React, {useState} from "react";  
import { createApiNewCharacter } from "../../modules/actions/characters/characters";


const DATA_INIT_FORM = {
    name: "",
    lastName: "",
    species: "",
    gender: "",
    image: "",
}

const NewCharacter = () => {

     const [newCharacter, setNewCharacter] = useState(DATA_INIT_FORM);

     const [statusError, setStatusError] = useState('')
     

     const handleChange =(params)=> {

        const value = params?.target?.value
        const name = params?.target?.name
        setNewCharacter((prev) => ({
            ...prev,
            [name]: value,
        }));
     }

     const handleImageChange = (e) => {
       
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setNewCharacter((prev) => ({
            ...prev,
            image: imageUrl,
          }));
        }
      };

      const sendData = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
    
        // Verificar si todos los campos están llenos
        if (!newCharacter.name || !newCharacter.lastName || !newCharacter.species || !newCharacter.gender || !newCharacter.image) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return 
        }

        const response = await createApiNewCharacter(newCharacter)
        setStatusError(response?.status)
        if (response?.status === 404) {
            setNewCharacter(DATA_INIT_FORM)
        }
    };


   
    return (
        <div className="new-character">

            <h2>Registro de presonaje</h2>
            <form className="form">

                {
                    statusError === 404 && 
                    <p className="color-error message-error">Hubo un error en la creación de tu personaje</p>
                }

                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={newCharacter?.name}
                    required 
                    onChange={(e)=>handleChange(e)}
                />

                <label htmlFor="lastName">Apellido:</label>
                <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    value={newCharacter?.lastName}
                    onChange={(e)=>handleChange(e)}
                />

                <label htmlFor="species">Especie:</label>
                <select required id="species" name="species" onChange={(e)=>handleChange(e)} value={newCharacter?.species}>
                    <option value="" disabled/>
                    <option value="humano">Humano</option>
                    <option value="alien">Alien</option>
                    <option value="robot">Robot</option>
                    <option value="otro">Otro</option>
                </select>

                <label htmlFor="gender" >Género:</label>
                <select required id="gender" name="gender" onChange={(e)=>handleChange(e)} value={newCharacter?.gender}>
                    <option value="" disabled/>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>

                <label htmlFor="image">Imagen de Perfil:</label>
                <input 
                   required 
                   className="input-image" 
                   type="file" 
                   id="image" 
                   name="image" 
                   accept="image/*" 
                   onChange={(e)=>handleImageChange(e)}
                 />

                {newCharacter.image && (
                    <div>
                        <p>Vista previa:</p>
                        <img src={newCharacter.image} alt="Preview" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                    </div>
                )}

                <button type="submit" onClick={sendData}>Registrar</button>

                
            </form>

           

        </div>
    )
}

export default NewCharacter;