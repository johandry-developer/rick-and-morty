import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getApiSingleCharacter } from '../../modules/actions/characters/characters';
import { updateApiCharacter } from '../../modules/actions/characters/characters';

const DATA_INIT_FORM = {
    name: "",
    lastName: "",
    species: "",
    gender: "",
    image: "",
}

const UpdateCharacter = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const [newCharacter, setNewCharacter] = useState(DATA_INIT_FORM);

    const getCharacterId = async () => {
       const response = await getApiSingleCharacter(id)
       setCharacter(response)
    }

    const handleChangeUpdate =(params)=> {

        const value = params?.target?.value
        const name = params?.target?.name
        setNewCharacter((prev) => ({
            ...prev,
            [name]: value,
        }));
     }

     const handleImageChangeUpdate = (e) => {
       
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setNewCharacter((prev) => ({
            ...prev,
            image: imageUrl,
          }));
        }
      };

    const updateForm =()=> {
        console.log("aqui voy a llenar los datos del formulario con mi personaje", character)
        setNewCharacter({
            ...DATA_INIT_FORM,
            name: character?.name,
            species: character?.species,
            gender: character?.gender,
            image: character?.image
        })
    }
    console.log("el formulario", newCharacter)


    const handleSubmit = async (e) => {
        e.preventDefault();

            // Verificar si todos los campos están llenos
            if (!newCharacter.name || !newCharacter.species || !newCharacter.gender || !newCharacter.image) {
                alert("Por favor, completa todos los campos antes de enviar.");
                return 
            }
        
        try {
            const response = await updateApiCharacter(id, newCharacter);
            console.log("Respuesta de actualización:", response);
    
            alert(response.message);
        } catch (error) {
            console.error("Error al actualizar personaje:", error);
            alert("Ocurrió un error al actualizar el personaje.");
        }
    };

    useEffect(()=> {
        getCharacterId()
    }, [])


    useEffect(()=> {
        if (character) {
            updateForm()
        }
    }, [character])



    return (
        <div className="update-character-container">
            <h1>Actualización de Personaje</h1>
            <p>Aquí podrás actualizar Datos del personaje.</p>
            <form className='form-update'>
            <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={newCharacter?.name}
                    required 
                    onChange={(e)=>handleChangeUpdate(e)}
                />

                <label htmlFor="species">Especie:</label>
                <select required id="species" name="species" onChange={(e)=>handleChangeUpdate(e)} value={newCharacter?.species}>
                    <option value="" disabled/>
                    <option value="humano">Humano</option>
                    <option value="alien">Alien</option>
                    <option value="robot">Robot</option>
                    <option value="otro">Otro</option>
                </select>

                <label htmlFor="gender" >Género:</label>
                <select required id="gender" name="gender" onChange={(e)=>handleChangeUpdate(e)} value={newCharacter?.gender}>
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
                   onChange={(e)=>handleImageChangeUpdate(e)}
                />

                {newCharacter.image && (
                    <div className='image-preview'>
                        <h3>Vista previa:</h3>
                        <img src={newCharacter.image} alt="Preview" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                    </div>
                )}

                <button type="submit" onClick={(e) => handleSubmit(e)}>Guardar cambios</button>

            </form>
            
        </div>
    );
};

export default UpdateCharacter;