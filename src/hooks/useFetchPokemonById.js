import {useEffect, useState} from "react";
import {getPokemonById} from "../helpers/getPokemonById";
import {getAllPokemons} from "../helpers/getAllPokemons";

export const useFetchPokemonById = (id) => {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemon = async() => {


        try {
            const pokemon = await getPokemonById(id);
            if(pokemon.ok){
                setPokemon(await pokemon.json());
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

    return { pokemon, isLoading };
}
