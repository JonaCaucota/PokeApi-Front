import {PokemonCard} from "./PokemonCard";
import {useFetchPokemons} from "../../hooks/useFetchPokemons";

export const PokemonList = () => {

    const pokemons = useFetchPokemons();

    return (
        <>
            <ul className={'row justify-content-center pt-5 list-unstyled text-center'}>
                {
                    pokemons.map((pokemonCard) => (
                        <PokemonCard key={pokemonCard.id} {...pokemonCard} ></PokemonCard>
                    ))
                }
            </ul>
        </>
    )
}
