import {useEffect, useState} from "react";
import {getFavouritesPokemonsByUserId} from "../helpers/getFavouritesPokemonsByUserId";

export const useFetchFavouritesPokemonsById = (id) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemon = async() => {
        const pokemon = await getFavouritesPokemonsByUserId(id);
        if(pokemon.ok){
            setPokemons(await pokemon.json());
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getPokemon();
    }, [])

    return { pokemons, isLoading };
}
