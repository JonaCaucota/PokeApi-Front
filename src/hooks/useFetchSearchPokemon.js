import {useEffect, useState} from "react";
import {searchPokemon} from "../helpers/searchPokemon";
import {getAllPokemons} from "../helpers/getAllPokemons";

export const useFetchSearchPokemon = (search) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const searchPoke = async () => {

        try {
            const filteredPokemons = await searchPokemon(search);

            if(filteredPokemons.ok){
                setPokemons(await filteredPokemons.json());
                setIsLoading(false);
            } else {
                setIsLoading(true)
                console.error("Error fetching Pokémon data:", filteredPokemons.status);
            }
        } catch (error) {
            setIsLoading(true);
            console.error("Error fetching Pokémon data:", error);
        }

    }

    useEffect(() => {
        searchPoke();
    }, [])

    return {pokemons, isLoading};
}