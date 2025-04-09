



export const getApiCharacters = async (pageCurrent) => {
    
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageCurrent}`, {
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

export const updateApiCharacter = async (id, data) => {
    return new Promise(async (resolve, reject) => {
        console.log(`Simulando actualización del personaje con ID ${id}...`);
        console.log("Datos recibidos:", data);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "PUT", // o PATCH si prefieres actualizar parcialmente
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud de actualización");
            }

            const result = await response.json();

            setTimeout(() => {
                resolve({
                    success: true,
                    message: `El Personaje ${data.name} fue actualizado exitosamente.`,
                    updatedCharacter: {
                        id,
                        ...result
                    }
                });
            }, 1500); // simula delay de red

        } catch (error) {
            console.error("Error en fetch:", error);
            reject({
                success: false,
                message: "Error al actualizar el personaje",
                error,
            });
        }
    });
};


