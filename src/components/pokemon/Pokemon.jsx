import {useParams} from "react-router";
import {useFetchPokemonById} from "../../hooks/useFetchPokemonById";
import pikaGif from "../../assets/pikachu.gif";
import hearth from "../../assets/hearth.jpg";
import attack from "../../assets/attack.jpg";
import speed from "../../assets/speed.jpg";
import defense from "../../assets/defense.jpg";
import height from "../../assets/height.jpg";
import weight from "../../assets/weight.jpg";

export const Pokemon = () => {
    const {pokemonId} = useParams();
    const { pokemon, isLoading } = useFetchPokemonById(pokemonId);
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userId = localStorage.getItem("userId");

    const pokemonFav = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        types: pokemon.types
    }
    const favourite = {
        userId: userId,
        pokemon: pokemonFav
    }
    if (isLoading) {
        return <div className={'row justify-content-center'}>
            <img className={'col-4 pt-5 pb-5'} src={pikaGif} alt={'PokeGif'} style={{width: '16rem', height: '20rem'}}/>
        </div>
    }

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const capitalizedTypes = pokemon.types.map(type => capitalizeFirstLetter(type));

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8080/pokeapi/pokemon/favourite/save/';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(favourite),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                window.location.href = "/";
            } else {
                console.error('Error al enviar el formulario:', favourite, await response.json());
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const classType = pokemon.types[0].toLowerCase();
    return (
        <>
            <div className={`row justify-content-center pt-5 pb-5 align-items-center`}>
                <div className={'col-4'}>
                    <div className={`card text-center  gradient-${classType}`} style={{width: '25rem'}}>
                        <img className="card-img-top p-5" src={pokemon.image} alt={pokemon.name} style={{width: '25rem', height:'25rem'}} ></img>
                            <div className="card-body">
                                <h1 className="card-text">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                                <h4 className={'lh-2'}>{pokemon.description}</h4>
                            </div>
                    </div>
                </div>
                <div className={'col-4 justify-content-center text-center'}>
                    <h2 className={'mb-5 fs-1'}>Pokemon Stats</h2>
                    <div className={'pb-3'}>
                        <h4 className={`type-box d-inline me-2 text-light me-4 ${capitalizedTypes[0].toLowerCase()}`}>{capitalizedTypes[0]}</h4>
                        {capitalizedTypes[1] === undefined
                            ? null : <h4 className={`type-box d-inline text-light  ${capitalizedTypes[1].toLowerCase()}`}>{capitalizedTypes[1]}</h4>}
                    </div>
                    <div>
                        <h2><img src={hearth} alt={'Hearth'} style={{width:'2rem'}} className={'me-3'}></img> {pokemon.hp}</h2>
                        <h2><img src={attack} alt={'Attack'} style={{width:'2rem'}} className={'me-3'}></img> {pokemon.attack}</h2>
                        <h2><img src={defense} alt={'Defense'} style={{width:'2rem'}} className={'me-3'}></img> {pokemon.defense}</h2>
                        <h2><img src={speed} alt={'Speed'} style={{width:'2rem'}} className={'me-3'}></img> {pokemon.speed}</h2>
                        <h2><img src={height} alt={'Height'} style={{width:'2rem'}} className={'me-3'}></img> {pokemon.height < 10 ? `0${pokemon.height}` : pokemon.height}</h2>
                        <h2><img src={weight} alt={'Weight'} style={{width:'2rem'}} className={'me-3'}></img> {pokemon.weight}</h2>

                        {isLoggedIn ?<div className={'pt-2 favourite backgroundEffect'}>
                            <form onSubmit={handleSubmit} >
                                <button className={'type-box p-2 fs-3 favourite-card'} >Add to favourite</button>
                            </form>
                        </div> : null }


                    </div>
                </div>
            </div>

        </>
    )
}
