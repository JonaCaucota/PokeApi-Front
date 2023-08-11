export const getFavouritesPokemonsByUserId = async(id) => {
    const url = `http://localhost:8080/pokeapi/pokemon/favourite/${id}`;
    const resp = await fetch(url);
    return resp;
}
