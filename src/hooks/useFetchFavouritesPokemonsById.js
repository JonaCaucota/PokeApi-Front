import {useEffect, useState} from "react";
import {getFavouritesPokemonsByUserId} from "../helpers/getFavouritesPokemonsByUserId";
import {getAllPokemons} from "../helpers/getAllPokemons";

export const useFetchFavouritesPokemonsById = (id) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemon = async() => {

        try {
            const pokemon = await getFavouritesPokemonsByUserId(id);
            if(pokemon.ok){
                setPokemons(await pokemon.json());
                setIsLoading(false);
            } else {
                setIsLoading(true)
                console.error("Error fetching Pokémon data:", pokemon.status);
            }
        } catch (error) {
            setIsLoading(true);
            console.error("Error fetching Pokémon data:", error);
        }

    }

    useEffect(() => {
        getPokemon();
    }, [])

    return { pokemons, isLoading };
}
