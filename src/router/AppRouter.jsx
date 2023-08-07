import {Header} from "../components/header/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "../components/home/Home";
import {Authenticator} from "../components/login/Authenticator";
import {SignIn} from "../components/login/SignIn";
import {SignUp} from "../components/login/SignUp";
import {Footer} from "../components/footer/Footer";
import {Pokemon} from "../components/pokemon/Pokemon";

export const AppRouter = () => {
    return (
        <div>
            <Header></Header>
            <main className={'container'}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/authenticator" element={<Authenticator />} />
                    <Route path="/sign-in" element={<SignIn></SignIn>} />
                    <Route path="/sign-up" element={<SignUp></SignUp>} />
                    <Route path="/pokemon/:pokemonId" element={<Pokemon></Pokemon>} />
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    )
}
