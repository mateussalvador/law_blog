document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para o Menu Hambúrguer ---
    const hamburgerBtn = document.querySelector('.menu-alternativo');
    const menu = document.querySelector('.menu');

    if (hamburgerBtn && menu) {
        hamburgerBtn.addEventListener('click', () => {
            // Adiciona ou remove a classe 'active' no menu para exibir/ocultar
            menu.classList.toggle('active');
        });
    }

    // --- Lógica para a busca no Header ---
    const searchIconLink = document.querySelector('.search-icon-link');
    const searchInput = document.querySelector('.header-search-input');

    if (searchIconLink && searchInput) {
        searchIconLink.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link navegue para outra página
            event.stopPropagation(); // Impede que o clique se propague para o document
            searchInput.classList.toggle('active');
            
            // Se o input ficou ativo, foca nele para o usuário digitar
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            }
        });

        // Fecha a busca ao clicar fora do input e do ícone
        document.addEventListener('click', (event) => {
            if (searchInput.classList.contains('active') && !searchInput.contains(event.target) && !searchIconLink.contains(event.target)) {
                searchInput.classList.remove('active');
            }
        });
    }
});
