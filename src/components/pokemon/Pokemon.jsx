import {useParams} from "react-router";
import {useFetchPokemonById} from "../../hooks/useFetchPokemonById";

export const Pokemon = () => {
    const {pokemonId} = useParams();
    const { pokemon, isLoading } = useFetchPokemonById(pokemonId);

    if (isLoading) {
        return <h1> Cargando..</h1>
    }

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const capitalizedTypes = pokemon.types.map(type => capitalizeFirstLetter(type));

    return (
        <>
            <div className={'row mx-auto justify-content-center'}>
                <div className={'col-4 text-center pt-5'}>
                    <h1> Pokemón Description </h1>
                </div>
            </div>
            <div className={'row justify-content-center pt-3 pb-5'}>
                <div className={'col-4'}>
                    <div className={'text-center pt-5'}>
                        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                        <img src={pokemon.image} alt={pokemon.name} style={{width: '16rem', height: '16rem'}}></img>
                    </div>
                </div>
                <div className={'col-4 justify-content-center text-center'}>
                    <h2>Types: {capitalizedTypes.join(' ')}</h2>
                    <h2>HP: {pokemon.hp}</h2>
                    <h2>Attack: {pokemon.attack}</h2>
                    <h2>Defense: {pokemon.defense}</h2>
                    <h2>Speed: {pokemon.speed}</h2>
                    <h2>Height: {pokemon.height}</h2>
                    <h2>Weight: {pokemon.weight}</h2>
                    <h2>Description: {pokemon.description}</h2>
                </div>
            </div>

        </>
    )
}
