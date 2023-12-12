import logo from "../../assets/logo.png";

export const Footer = () => {
    return (
        <footer className="text-center text-lg-start">
            <section className="d-flex justify-content-between p-4">
                <div className="me-5">
                    <span>Conéctate con nosotros en redes sociales:</span>
                </div>

                <div>
                    <a href="" className=" me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className=" me-4">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

            </section>


            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">ORT PNT2</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                            />
                            <p>
                                Proyecto final para la materia PNT2    (Programacion en nuevas tecnologías 2)

                                El mismo consiste en una api de pokemones en donde puedes seleccionar tus favoritos, ver sus stats y guardarlos.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Integrantes</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                            />
                            <p>
                                <a >Jonathan Caucota</a>
                            </p>
                            <p>
                                <a >Estudiante de Sistemas</a>
                            </p>
                            <p>
                                <a >Instituto ORT Argentina</a>
                            </p>
                            <p>
                                <a >Analista Programador</a>
                            </p>
                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                            />
                            <p><i className="fas fa-home mr-3"></i> Calle falsa 123 ARG</p>
                            <p><i className="fas fa-envelope mr-3"></i> jonacau12@gmail.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 11 57467225</p>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="text-center p-3"
            >
                © 2020 Copyright:
                <a className="text-white"
                >Jonathan Caucota</a
                >
            </div>
        </footer>
    )
}
