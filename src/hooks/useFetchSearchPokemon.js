import {useEffect, useState} from "react";
import {searchPokemon} from "../helpers/searchPokemon";

export const useFetchSearchPokemon = (search) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const searchPoke = async () => {
        const filteredPokemons = await searchPokemon(search);
        setPokemons(filteredPokemons);
        setIsLoading(false);
    }

    useEffect(() => {
        searchPoke();
    }, [])

    return {pokemons, isLoading};
}