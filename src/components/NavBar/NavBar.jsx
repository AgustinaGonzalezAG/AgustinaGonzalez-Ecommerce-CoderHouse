import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#93c572' }}>
            <div className="container-fluid">
                <a className="navbar-brand ms-4 text-white" href="#">Pet Paradise</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end me-4 " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                               Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Alimentos</a></li>
                                <li><a className="dropdown-item" href="#">Juguetes</a></li>
                                <li><a className="dropdown-item" href="#">Accesorios</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Ofertas Especiales</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar