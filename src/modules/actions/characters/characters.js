



export const getApiCharacters = async (pageCurrent, search) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageCurrent}${search ? `&search=${search}` : undefined}`, {
            method: "GET",
        });
        const data = await response.json();
        return data; // 🔥 Retorna la respuesta JSON
    } catch (error) {
        console.error("ERROR DATA::::::::::::::::", error);
        return null; // En caso de error, devuelve null
    }
}


export const getApiSingleCharacter = async (id) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
            method: "GET",
        });
        const data = await response.json()
        return data
    } catch (error){
        return null
    }
}

export const createApiNewCharacter = async (newCharacter) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/crear-personaje-ficticio`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Especificamos que enviamos JSON
            },
            body: JSON.stringify(newCharacter), // Convertimos el objeto a JSON
        })
        return response
    } catch (error) {
        console.log("hay un error", error)
    }
}

export const deleteApiCharacter = async (id) => {

    try { 
        const response = await fetch(`https://rickandmortyapi.com/api/borrar-personaje-ficticio/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json", // Especificamos que enviamos JSON
            },
        })
        const data = await response.json()
        return data

    } catch(ERROR) {
        console.log("error", ERROR)
    } 
}




