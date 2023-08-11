export const getPokemonById = async(id) => {
    const url = `http://localhost:8080/pokeapi/pokemon/${id}`;
    const resp = await fetch(url);
    return resp;
}
