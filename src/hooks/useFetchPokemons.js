import {useEffect, useState} from "react";
import {getAllPokemons} from "../helpers/getAllPokemons";

export const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async() => {
        const allPokemons = await getAllPokemons();
        setPokemons(allPokemons);
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return pokemons;
}
