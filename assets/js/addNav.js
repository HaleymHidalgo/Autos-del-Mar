const crearNavbar = () => {
    // Crear el contenedor principal del navbar
    const contenedor = document.createElement('div');
    contenedor.classList.add('container-fluid');

    // Crear y configurar el enlace de la marca (logo)
    const enlaceLogo = document.createElement('a');
    enlaceLogo.classList.add('navbar-brand');
    enlaceLogo.href = './index.html';
    
    const imagenLogo = document.createElement('img');
    imagenLogo.classList.add('logo');
    imagenLogo.src = './assets/img/isotipo-autos-del-mar.png';
    imagenLogo.alt = 'Logo-Autos-del-mar';
    enlaceLogo.appendChild(imagenLogo);

    // Crear y configurar el botón de toggler
    const botonToggler = document.createElement('button');
    botonToggler.classList.add('navbar-toggler');
    botonToggler.type = 'button';
    botonToggler.setAttribute('data-bs-toggle', 'collapse');
    botonToggler.setAttribute('data-bs-target', '#navbarNavDropdown');
    botonToggler.setAttribute('aria-controls', 'navbarNavDropdown');
    botonToggler.setAttribute('aria-expanded', 'false');
    botonToggler.setAttribute('aria-label', 'Toggle navigation');
    
    const iconoToggler = document.createElement('span');
    iconoToggler.classList.add('navbar-toggler-icon');
    botonToggler.appendChild(iconoToggler);

    // Crear el contenedor de los elementos del navbar
    const contenidoNav = document.createElement('div');
    contenidoNav.classList.add('collapse', 'navbar-collapse', 'justify-content-between', 'cont-items-nav');
    contenidoNav.id = 'navbarNavDropdown';

    // Crear la lista de elementos del navbar (buscador y enlaces)
    const listabuscador = document.createElement('ul');
    listabuscador.classList.add('navbar-nav');

    // Crear el formulario del buscador
    const buscador = document.createElement('li');
    
    const formularioBuscador = document.createElement('form');
    formularioBuscador.classList.add('buscador');
    formularioBuscador.setAttribute('role', 'search');
    
    const inputBuscador = document.createElement('input');
    inputBuscador.classList.add('bus', 'me-2');
    inputBuscador.type = 'search';
    inputBuscador.placeholder = 'Search';
    inputBuscador.setAttribute('aria-label', 'Search');
    
    const botonBuscador = document.createElement('button');
    botonBuscador.classList.add('btn', 'btn-outline-info');
    botonBuscador.type = 'submit';
    botonBuscador.textContent = 'Search';
    
    formularioBuscador.appendChild(inputBuscador);
    formularioBuscador.appendChild(botonBuscador);
    buscador.appendChild(formularioBuscador);
    listabuscador.appendChild(buscador);

    // Crear la segunda lista de elementos del navbar (enlaces)
    const listaNav = document.createElement('ul');
    listaNav.classList.add('navbar-nav');

    // Crear los enlaces del navbar y agregarlos directamente
    const inicio = document.createElement('li');
    inicio.classList.add('nav-item', 'flex-column-center');
    const enlaceInicio = document.createElement('a');
    enlaceInicio.classList.add('nav-link', 'active');
    enlaceInicio.href = './index.html';
    enlaceInicio.textContent = 'Inicio';
    inicio.appendChild(enlaceInicio);

    const catalogo = document.createElement('li');
    catalogo.classList.add('nav-item', 'flex-column-center');
    const enlaceCatalogo = document.createElement('a');
    enlaceCatalogo.classList.add('nav-link');
    enlaceCatalogo.href = './catalogo.html';
    enlaceCatalogo.textContent = 'Catalogo';
    catalogo.appendChild(enlaceCatalogo);

    const nosotros = document.createElement('li');
    nosotros.classList.add('nav-item', 'flex-column-center');
    const enlaceNosotros = document.createElement('a');
    enlaceNosotros.classList.add('nav-link');
    enlaceNosotros.href = './Nosotros.html';
    enlaceNosotros.textContent = 'Nosotros';
    nosotros.appendChild(enlaceNosotros);

    const carrito = document.createElement('li');
    carrito.classList.add('nav-item', 'flex-column-center');
    const enlaceCarrito = document.createElement('a');
    enlaceCarrito.href = './carrito.html';
    const imagenCarrito = document.createElement('img');
    imagenCarrito.classList.add('logo');
    imagenCarrito.src = './assets/img/logo-carrito.png';
    imagenCarrito.alt = 'logo-carrito';
    enlaceCarrito.appendChild(imagenCarrito);
    carrito.appendChild(enlaceCarrito);

    const separador = document.createElement('li');
    separador.classList.add('nav-item', 'line-user');
    const enlaceSeparador = document.createElement('a');
    enlaceSeparador.classList.add('nav-link');
    enlaceSeparador.textContent = '|';
    separador.appendChild(enlaceSeparador);

    const signIn = document.createElement('li');
    signIn.classList.add('nav-item', 'flex-column-center');
    const enlaceSignIn = document.createElement('a');
    enlaceSignIn.classList.add('nav-link');
    enlaceSignIn.href = './iniciar_sesion.html';
    enlaceSignIn.textContent = 'Sign in';
    signIn.appendChild(enlaceSignIn);

    const signUp = document.createElement('li');
    signUp.classList.add('nav-item', 'flex-column-center');
    const enlaceSignUp = document.createElement('a');
    enlaceSignUp.classList.add('nav-link');
    enlaceSignUp.href = './registrar_sesion.html';
    enlaceSignUp.textContent = 'Sign up';
    signUp.appendChild(enlaceSignUp);

    const perfil = document.createElement('li');
    perfil.classList.add('nav-item', 'flex-column-center', 'd-none');
    const enlacePerfil = document.createElement('a');
    enlacePerfil.classList.add('nav-link');
    enlacePerfil.href = './perfil.html';
    const imagenPerfil = document.createElement('img');
    imagenPerfil.src = './assets/img/person-circle.svg';
    imagenPerfil.alt = 'Login-icon';
    imagenPerfil.classList.add('logo');
    enlacePerfil.appendChild(imagenPerfil);
    perfil.appendChild(enlacePerfil);

    // Agregar los elementos a la segunda lista
    listaNav.appendChild(inicio);
    listaNav.appendChild(catalogo);
    listaNav.appendChild(nosotros);
    listaNav.appendChild(carrito);
    listaNav.appendChild(separador);
    listaNav.appendChild(signIn);
    listaNav.appendChild(signUp);
    listaNav.appendChild(perfil);

    // Agregar todas las listas al contenido del navbar
    contenidoNav.appendChild(listabuscador);
    contenidoNav.appendChild(listaNav);

    // Agregar todos los elementos al contenedor principal del navbar
    contenedor.appendChild(enlaceLogo);
    contenedor.appendChild(botonToggler);
    contenedor.appendChild(contenidoNav);

    // Insertar el navbar en el elemento con id "add_nav"
    const elementoNav = document.getElementById('add_nav');
    if (elementoNav) {
        elementoNav.appendChild(contenedor);
    }
}

// Llamar a la función para crear e insertar el navbar
crearNavbar();
