import {useEffect, useState} from "react";
import {getPokemonById} from "../helpers/getPokemonById";

export const useFetchPokemonById = (id) => {
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemon = async() => {
        const pokemon = await getPokemonById(id);
        setPokemon(pokemon);
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemon();
    }, [])

    return { pokemon, isLoading };
}
