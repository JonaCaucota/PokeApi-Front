import {Link} from "react-router-dom";
import pikaGif from "../../assets/pikachu.gif";
import {addClassByType} from "../../helpers/addClassByType";

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
    const className = addClassByType(types).toLowerCase();
    return (
        <>
            <li key={id} className={`col-4 p-4 d-flex align-items-center justify-content-center`}>
                <div className={`card justify-content-center pt-5 gradient-${className}`} style={{width: '20rem', height: '21rem'}}>
                    <Link to={`/pokemon/${id}`} className={'pokemon-card'}>
                    <div className="backgroundEffect"></div>
                    <img src={image} className="card-img-top" alt={name}
                                                                                        style={{width: '12rem', height: '12rem'}}></img>
                    <div className="card-body">
                        <h5 className="card-title">{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
                        <h5>#{id}</h5>
                        <h5>{capitalizedTypes.join(' ')}</h5>
                    </div>
                    </Link>
                </div>
            </li>
        </>
    )
}
