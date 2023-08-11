export const getAllPokemons = async() => {
    const url = 'http://localhost:8080/pokeapi/pokemon';
    const resp = await fetch(url);
    return resp;
}
