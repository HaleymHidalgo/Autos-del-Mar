const createNav = () => {
    const containerFluid = document.createElement("div");
    containerFluid.classList.add("container-fluid");

    const navbarBrand = document.createElement("a");
    navbarBrand.classList.add("navbar-brand");
    navbarBrand.href = "./index.html";

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "./assets/img/isotipo-autos-del-mar.png";
    logo.alt = "Logo-Autos-del-mar";
    navbarBrand.appendChild(logo);

    const navbarToggler = document.createElement("button");
    navbarToggler.classList.add("navbar-toggler");
    navbarToggler.type = "button";
    navbarToggler.dataset.bsToggle = "collapse";
    navbarToggler.dataset.bsTarget = "#navbarNavDropdown";
    navbarToggler.setAttribute("aria-controls", "navbarNavDropdown");
    navbarToggler.setAttribute("aria-expanded", "false");
    navbarToggler.setAttribute("aria-label", "Toggle navigation");

    const navbarTogglerIcon = document.createElement("span");
    navbarTogglerIcon.classList.add("navbar-toggler-icon");
    navbarToggler.appendChild(navbarTogglerIcon);

    const collapseDiv = document.createElement("div");
    collapseDiv.classList.add("collapse", "navbar-collapse", "justify-content-between", "cont-items-nav");
    collapseDiv.id = "navbarNavDropdown";

    const ul1 = document.createElement("ul");
    ul1.classList.add("navbar-nav");

    const liSearch = document.createElement("li");

    const searchForm = document.createElement("form");
    searchForm.classList.add("buscador");
    searchForm.setAttribute("role", "search");

    const searchInput = document.createElement("input");
    searchInput.classList.add("bus", "me-2");
    searchInput.type = "search";
    searchInput.placeholder = "Search";
    searchInput.setAttribute("aria-label", "Search");

    const searchButton = document.createElement("button");
    searchButton.classList.add("btn", "btn-outline-info");
    searchButton.type = "submit";
    searchButton.textContent = "Search";

    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);
    liSearch.appendChild(searchForm);
    ul1.appendChild(liSearch);

    const ul2 = document.createElement("ul");
    ul2.classList.add("navbar-nav");

    const navItems = [
        { href: "./index.html", text: "Inicio", classes: ["nav-link", "active"] },
        { href: "./catalogo.html", text: "Catalogo", classes: ["nav-link"] },
        { href: "./Nosotros.html", text: "Nosotros", classes: ["nav-link"] },
        { href: "./carrito.html", imgSrc: "./assets/img/logo-carrito.png", imgAlt: "logo-carrito", imgClass: "logo" },
        { isDivider: true },
        { href: "./iniciar_sesion.html", text: "Sign in", classes: ["nav-link"] },
        { href: "./registrar_sesion.html", text: "Sign up", classes: ["nav-link"] },
        { href: "./perfil.html", imgSrc: "./assets/img/person-circle.svg", imgAlt: "Login-icon", imgClass: "logo", classes: ["nav-link", "d-none"] }
    ];

    navItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("nav-item", "flex-column-center");

        if (item.isDivider) {
            li.classList.remove("flex-column-center");
            li.classList.add("line-user");
            const divider = document.createElement("a");
            divider.classList.add("nav-link");
            divider.textContent = "|";
            li.appendChild(divider);
        } else if (item.imgSrc) {
            const imgLink = document.createElement("a");
            imgLink.href = item.href;

            const img = document.createElement("img");
            img.classList.add(item.imgClass);
            img.src = item.imgSrc;
            img.alt = item.imgAlt;

            imgLink.appendChild(img);
            li.appendChild(imgLink);
        } else {
            const link = document.createElement("a");
            link.classList.add(...item.classes);
            link.href = item.href;
            link.textContent = item.text;
            li.appendChild(link);
        }

        ul2.appendChild(li);
    });

    collapseDiv.appendChild(ul1);
    collapseDiv.appendChild(ul2);

    containerFluid.appendChild(navbarBrand);
    containerFluid.appendChild(navbarToggler);
    containerFluid.appendChild(collapseDiv);

    return containerFluid;
}

export const addNav = () => {
    const nav = document.getElementById("add_nav");
    const navbar = createNav();
    nav.appendChild(navbar);
}

addNav();