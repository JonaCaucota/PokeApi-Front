import {PokemonCard} from "./PokemonCard";
import {useState} from "react";
import notFound from '../../assets/notFound.jpg'
import pikaGif from '../../assets/pikachu.gif'
import {useFetchSearchPokemon} from "../../hooks/useFetchSearchPokemon";
import {useParams} from "react-router";

export const PokemonListSearch = () => {
    const {pokemon} = useParams();
    const {pokemons, isLoading} = useFetchSearchPokemon(pokemon);
    const [currentPage, setCurrentPage] = useState(0);

    if (isLoading && pokemons.length === 0) {
        return <div className={'row justify-content-center'}>
            <img className={'col-4 pt-5 pb-5'} src={pikaGif} alt={'PokeGif'} style={{width: '18rem', height: '24rem'}}/>
        </div>
    } else if (pokemons.length === 0) {
        return <div className={'row justify-content-center'}>
        <img className={'col-4 pt-5 pb-5'} src={notFound} alt={'NOT FOUND'} style={{width: '25rem', height: '35rem'}}/>
        </div>
    }
    const filteredPokemons = () => {
        return pokemons.slice(currentPage, currentPage + 6)
    }
    const nextPage = () => {
        if (currentPage + 6 < pokemons.length) {
            setCurrentPage(currentPage + 6);
        }
    }
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 6);
        }
    }

    return (
        <>
            <div className={'container'}>
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
            </div>
        </>
    )
}
