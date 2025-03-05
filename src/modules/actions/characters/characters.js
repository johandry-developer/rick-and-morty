


export const getApiCharacters = async (pageCurrent) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageCurrent}`);
        const data = await response.json();
        return data; // 🔥 Retorna la respuesta JSON
    } catch (error) {
        console.error("ERROR DATA::::::::::::::::", error);
        return null; // En caso de error, devuelve null
    }

}