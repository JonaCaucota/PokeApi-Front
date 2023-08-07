export const getPokemonById = async(id) => {
    const url = `http://localhost:8080/pokeapi/pokemon/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}
