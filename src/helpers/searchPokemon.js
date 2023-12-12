export const searchPokemon = async (search) => {

    const url = `http://localhost:8080/pokeapi/pokemon/search/?search=${search}`;
    try {
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }

        return resp;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw error;
    }
}