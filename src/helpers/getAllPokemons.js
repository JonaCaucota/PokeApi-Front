export const getAllPokemons = async() => {
    const url = 'http://localhost:8080/pokeapi/pokemon';
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}
