export const searchPokemon = async (search) => {
    const url = `http://localhost:8080/pokeapi/pokemon/search/?search=${search}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}