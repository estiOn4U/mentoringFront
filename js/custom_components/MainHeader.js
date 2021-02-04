class MainHeader extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = '<header>\n' +
            '    <main-nav></main-nav>\n' +
            '    <ul class="secondary-nav">\n' +
            '        <li class="secondary-nav__tab tab"><a href="https://www.cosentino.com/es/silestone/">Silestone</a></li>\n' +
            '        <li class="secondary-nav__tab tab"><a href="https://www.cosentino.com/es/dekton/">Dekton</a></li>\n' +
            '        <li><a href="https://www.cosentino.com/es/sensa/">Sensa</a></li>\n' +
            '        <li><a href="https://www.cosentino.com/es/piedra-natural/">Natural Stone</a></li>\n' +
            '    </ul>\n' +
            '    <form action="#" role="search">\n' +
            '        <input type="search" name="search" id="search">\n' +
            '        <label for="search">icon</label>\n' +
            '        <input type="submit" value="Buscar">\n' +
            '    </form>\n' +
            '    <ul class="secondary-nav">\n' +
            '        <li><a href="https://www.cosentino.com/es/noticias/">Noticias</a></li>\n' +
            '        <li><a href="https://jobs.cosentino.com/?locale=es_ES">Empleo</a></li>\n' +
            '        <li><a href="https://www.cosentino.com/es/garantia/">Garantía</a></li>\n' +
            '        <li><a href="https://www.cosentino.com/es/contacto/">Contacto</a></li>\n' +
            '    </ul>\n' +
            '    <ul>\n' +
            '        <li><a href="#" aria-label="Idioma seleccionado: Español">Español</a></li>\n' +
            '        <li><a href="#" aria-label="Idioma seleccionado: Inglés">Inglés</a></li>\n' +
            '    </ul>\n' +
            '\n' +
            '    <nav class="main-navbar">\n' +
            '        <a href="#homepage">\n' +
            '            <img src="https://icosentino.imgix.net/wp-content/uploads/2020/04/logo-1.gif" alt="Logo Cosentino">\n' +
            '        </a>\n' +
            '        <div class="main-navbar__tab"><!--Dropdown-->\n' +
            '            <a href="https://www.cosentino.com/es/colores/">Colores</a>\n' +
            '            <ul role="listbox" tabindex="0">\n' +
            '                <li role="option"><a href="#">Todos</a></li>\n' +
            '                <li role="option"><a href="#">Tonos</a></li>\n' +
            '                <li role="option"><a href="#">Silestone</a></li>\n' +
            '                <li role="option"><a href="#">Dekton</a></li>\n' +
            '                <li role="option"><a href="#">Sensa</a></li>\n' +
            '                <li role="option"><a href="#">Piedra Natural</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <div class="main-navbar__tab"><!--Dropdown-->\n' +
            '            <a href="https://www.cosentino.com/es/cocinas/">Cocinas</a>\n' +
            '            <ul role="listbox" tabindex="0">\n' +
            '                <li role="option"><a href="#">Encimeras</a></li>\n' +
            '                <li role="option"><a href="#">Suelos</a></li>\n' +
            '                <li role="option"><a href="#">Revestimientos</a></li>\n' +
            '                <li role="option"><a href="#">Fregaderos</a></li>\n' +
            '                <li role="option"><a href="#">Reformas</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <div class="main-navbar__tab"><!--Dropdown-->\n' +
            '            <a href="https://www.cosentino.com/es/banos/">Baños</a>\n' +
            '            <ul role="listbox" tabindex="0">\n' +
            '                <li role="option"><a href="#">Encimeras</a></li>\n' +
            '                <li role="option"><a href="#">Lavabos</a></li>\n' +
            '                <li role="option"><a href="#">Platos de ducha</a></li>\n' +
            '                <li role="option"><a href="#">Suelos de baño</a></li>\n' +
            '                <li role="option"><a href="#">Revestimientos</a></li>\n' +
            '                <li role="option"><a href="#">Reformas</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <div class="main-navbar__tab"><!--Dropdown-->\n' +
            '            <a href="https://www.cosentino.com/es/soluciones-arquitectonicas/">Soluciones Arquitectónicas</a>\n' +
            '            <ul role="listbox" tabindex="0">\n' +
            '                <li role="option"><a href="#">Fachadas</a></li>\n' +
            '                <li role="option"><a href="#">Suelos y pavimentos</a></li>\n' +
            '                <li role="option"><a href="#">Revestimientos</a></li>\n' +
            '                <li role="option"><a href="#">Reformas</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <div class="main-navbar__tab"><!--Dropdown-->\n' +
            '            <a href="https://www.cosentino.com/es/galeria/">Galería</a>\n' +
            '            <ul role="listbox" tabindex="0">\n' +
            '                <li role="option"><a href="#">Galería de baños</a></li>\n' +
            '                <li role="option"><a href="#">Galería de cocinas</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <div class="main-navbar__tab"><!--Dropdown-->\n' +
            '            <a href="https://www.cosentino.com/es/blog-news/">Blog</a>\n' +
            '            <ul role="listbox" tabindex="0">\n' +
            '                <li role="option"><a href="#">Top Faces</a></li>\n' +
            '                <li role="option"><a href="#">Top Projects</a></li>\n' +
            '                <li role="option"><a href="#">Top Trends</a></li>\n' +
            '                <li role="option"><a href="#">Top Products</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <div class="main-navbar__tab"><!--Dropdown-->\n' +
            '            <a href="https://www.cosentino.com/es/donde-comprar/">Dónde comprar</a>\n' +
            '            <ul role="listbox" tabindex="0">\n' +
            '                <li role="option"><a href="#">Fachadas</a></li>\n' +
            '                <li role="option"><a href="#">Suelos y pavimentos</a></li>\n' +
            '                <li role="option"><a href="#">Revestimientos</a></li>\n' +
            '                <li role="option"><a href="#">Reformas</a></li>\n' +
            '            </ul>\n' +
            '        </div>\n' +
            '        <a href="https://pro.cosentino.com/es/" target="_blank" rel="noopener noreferrer">Profesional</a>\n' +
            '    </nav>\n' +
            '</header>' +
            '<style> :host { color:blue;}</style>';
    }
}
customElements.define('main-nav', MainHeader);