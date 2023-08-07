import {Link} from "react-router-dom";
import {Pokemon} from "./Pokemon";
import pikaGif from "../../assets/pikachu.gif";

export const PokemonCard = ({id, image, name,types}) => {

    if(id === null) {
        return <div className={'row justify-content-center'}>
            <img className={'col-4 pt-5 pb-5'} src={pikaGif} alt={'PokeGif'} style={{width: '16rem', height: '20rem'}}/>
        </div>
    }
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    const capitalizedTypes = types.map(type => capitalizeFirstLetter(type));
    return (
        <>
            <li key={id} className={`col-4 p-4 d-flex align-items-center justify-content-center`}>
                <div className="card justify-content-center" style={{width: '20rem', height: '25rem'}}>
                    <Link to={`/pokemon/${id}`}><img src={image} className="card-img-top" alt={name}
                                                                                        style={{width: '16rem', height: '16rem'}}></img></Link>
                    <div className="card-body">
                        <h5 className="card-title">{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
                        <h5>#{id}</h5>
                        <h5>{capitalizedTypes.join(' ')}</h5>
                    </div>
                </div>
            </li>
        </>
    )
}
