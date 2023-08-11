import {PokemonCard} from "./PokemonCard";
import pikaGif from '../../assets/pikachu.gif'
import {useParams} from "react-router";
import {useFetchFavouritesPokemonsById} from "../../hooks/useFetchFavouritesPokemonsById";

export const FavPokemons = () => {
    const {id} = useParams();
    const {pokemons, isLoading} = useFetchFavouritesPokemonsById(id);

    if (isLoading && pokemons.length !== 0) {
        return <div className={'row justify-content-center'}>
            <img className={'col-4 pt-5 pb-5'} src={pikaGif} alt={'PokeGif'} style={{width: '16rem', height: '20rem'}}/>
        </div>
    }

    return (
        <>
            <ul className={'row justify-content-center pt-2 list-unstyled text-center'}>
                {
                    pokemons.length !== 0 ?
                    pokemons.map((pokemonCard) => (
                        <PokemonCard key={pokemonCard.id} {...pokemonCard} ></PokemonCard>
                    )): <h1>No pokemons</h1>
                }
            </ul>
        </>
    )
}
