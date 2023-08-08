import {PokemonList} from "../pokemon/PokemonList";

export const Home = () => {
    return (
        <div className={'container'}>
            <h1 className={'row pt-5 justify-content-center text-black'}>Bienvenido al mundo Pokémon</h1>
            <PokemonList></PokemonList>
        </div>
    )
}
