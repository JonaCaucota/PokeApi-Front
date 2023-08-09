import {Link} from "react-router-dom";
import pokemonLogo from "../../assets/pokemonLogo.png";
import {useState} from "react";


export const Header = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = pokeSearching();
        window.location.href = url;
    };

    const pokeSearching = () => {
        return `/pokemon/search/${inputValue}`;
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    return (
        <header>
            <nav className="navbar navbar-expand-lg p-4">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand me-5" href="#">
                        <img src={pokemonLogo} alt="Bootstrap" width="180" height="70"/>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5 ms-lg-5">
                                <Link to={"/"} className="text-decoration-none">
                                    <button className="nav-link">
                                        <h5>Home</h5>
                                    </button>
                                </Link>
                            </li>
                            {isLoggedIn ?
                                <li>
                                    <button className="nav-link" onClick={() => {
                                        localStorage.removeItem("isLoggedIn");
                                        window.location.href = "/";
                                    }}>
                                        <h5>Logout</h5>
                                    </button>
                                </li> :
                                <>
                                    <li className="nav-item me-5">
                                        <Link to={"/sign-in"} className="text-decoration-none">
                                            <button className="nav-link">
                                                <h5>Login</h5>
                                            </button>
                                        </Link>
                                    </li>
                                    <li className="nav-item me-5">
                                        <Link to={"/sign-up"} className="text-decoration-none">
                                            <button className="nav-link">
                                                <h5>Sign Up</h5>
                                            </button>
                                        </Link>
                                    </li>
                                </>

                            }

                        </ul>
                        <form className="d-flex" onSubmit={(event) => handleSubmit(event)}>
                            <input
                                className="form-control me-2"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};
