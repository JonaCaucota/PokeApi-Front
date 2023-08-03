export const PokemonCard = ({id, image, name}) => {

    return (
        <>
            <li key={id} className={`col-4 p-4 d-flex align-items-center justify-content-center`}>
                <div className="card justify-content-center" style={{ width: '16rem', height:'21rem' }}>
                    <img src={image} className="card-img-top" alt={name} style={{ width: '16rem', height: '16rem' }}></img>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                        </div>
                </div>
            </li>
        </>
    )
}
