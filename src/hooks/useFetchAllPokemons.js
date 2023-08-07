import {useEffect, useState} from "react";
import {getAllPokemons} from "../helpers/getAllPokemons";

export const useFetchAllPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemons = async() => {
        const allPokemons = await getAllPokemons();
        setPokemons(allPokemons);
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return { pokemons, isLoading };
}
