import {useEffect, useState} from "react";
import {getAllPokemons} from "../helpers/getAllPokemons";

export const useFetchAllPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemons = async () => {
        try {
            const allPokemons = await getAllPokemons();
            if (allPokemons.ok) {
                setPokemons(await allPokemons.json());
                setIsLoading(false);
            } else {
                console.error("Error fetching Pokémon data:", allPokemons.status);
            }
        } catch (error) {
            setIsLoading(true);
            console.error("Error fetching Pokémon data:", error);
        }
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return { pokemons, isLoading };
}
