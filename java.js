document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Rolagem Suave para os Links do Menu
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Animação ao Rolar a Página (Scroll Reveal)
    const cards = document.querySelectorAll('.card');
    
    const checkCards = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', checkCards);
    checkCards(); // Executa uma vez no início caso os cards já estejam visíveis

    // 3. Efeito de Clique Interativo no Botão Principal
    const btnMain = document.querySelector('.btn-main');
    if (btnMain) {
        btnMain.addEventListener('click', () => {
            alert('🌱 Bem-vindo ao Futuro! O projeto Agrinho transforma a produção através da sustentabilidade.');
        });
    }
});