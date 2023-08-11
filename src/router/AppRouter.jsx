import {Header} from "../components/header/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "../components/home/Home";
import {SignIn} from "../components/login/SignIn";
import {SignUp} from "../components/login/SignUp";
import {Footer} from "../components/footer/Footer";
import {Pokemon} from "../components/pokemon/Pokemon";
import {PokemonListSearch} from "../components/pokemon/PokemonListSearch";
import {FavPokemons} from "../components/pokemon/FavPokemons";

export const AppRouter = () => {
    return (
        <div>
            <Header></Header>
            <main className={'container'}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn></SignIn>} />
                    <Route path="/sign-up" element={<SignUp></SignUp>} />
                    <Route path="/pokemon/search/:pokemon" element={<PokemonListSearch></PokemonListSearch>} />
                    <Route path="/pokemon/:pokemonId" element={<Pokemon></Pokemon>} />
                    <Route path="/favourites/:id" element={<FavPokemons></FavPokemons>} />
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    )
}
