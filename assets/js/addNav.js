const createNav = () => {
    return `
    <div class="container-fluid">
                <a class="navbar-brand" href="./index.html"
                ><img class="logo" src="./assets/img/isotipo-autos-del-mar.png" alt="Logo-Autos-del-mar"
                /></a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                ><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between cont-items-nav" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li>
                            <form class="buscador" role="search">
                                <input
                                class="bus me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                />
                                <button class="btn btn-outline-info" type="submit">
                                Search
                                </button>
                            </form>
                        </li>
                    </ul>
                    
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./catalogo.html">Catalogo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./Nosotros.html">Nosotros</a>
                        </li>

                        <li class="nav-item">
                        <a href="./carrito.html"><img class="logo" src="./assets/img/logo-carrito.png" alt="logo-carrito"></a>
                        </li>
                        
                        <li class="nav-item line-user">
                            <a class="nav-link">|</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./iniciar_sesion.html">Sign in</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./registrar_sesion.html"">Sign up</a>
                        </li>
                        <!-- no se vera hasta haberse autenticado -->
                        <li class="nav-item d-none">
                            <a class="nav-link" href="./perfil.html"><img src="./assets/img/person-circle.svg" alt="Login-icon" class="logo"></a>
                        </li>
                    </ul>  
                </div>
            </div>`;
}
    
const addNav = () => {
    const nav = document.getElementById("add_nav");
    nav.innerHTML = createNav();
}

addNav();
