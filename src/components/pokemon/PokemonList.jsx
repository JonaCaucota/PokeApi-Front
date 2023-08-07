import {PokemonCard} from "./PokemonCard";
import {useFetchAllPokemons} from "../../hooks/useFetchAllPokemons";
import {useState} from "react";

export const PokemonList = () => {

    const { pokemons, isLoading } = useFetchAllPokemons();
    const [currentPage, setCurrentPage] = useState(0);

    if (isLoading && pokemons.length === 0) {
        return <h1> Cargando...</h1>;
    }
    const filteredPokemons = () => {
        return pokemons.slice(currentPage, currentPage+6)
    }
    const nextPage = () => {
        if (currentPage + 6 < pokemons.length) {
            setCurrentPage(currentPage + 6);
        }
    }
    const prevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 6);
        }
    }

    return (
        <>
            <ul className={'row justify-content-center pt-5 list-unstyled text-center'}>
                {
                    filteredPokemons().map((pokemonCard) => (
                        <PokemonCard key={pokemonCard.id} {...pokemonCard} ></PokemonCard>
                    ))
                }
            </ul>
            <div className={'row mx-auto justify-content-center pb-5'}>
                <div className={'col-4 text-center'}>
                    <button className={'btn'} onClick={prevPage}>Previous</button>
                    |
                    <button className={'btn'} onClick={nextPage}>Next Page</button>
                </div>
            </div>

        </>
    )
}
