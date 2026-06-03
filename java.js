document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Rolagem Suave para os Links de Navegação
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

    // 2. Scroll Reveal - Revelação dos Cards ao Rolar a Página
    const cards = document.querySelectorAll('.card');
    
    const revealCards = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealCards);
    revealCards(); // Dispara logo de início caso os elementos já estejam visíveis

    // 3. Efeito de Animação de Números (Contadores de Sustentabilidade)
    const counters = document.querySelectorAll('.num');
    const speed = 60; // Velocidade da animação

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Ativar o contador apenas quando a secção estiver visível no ecrã
    const techSection = document.querySelector('.tech-section');
    let counted = false;

    const checkCounterScroll = () => {
        if (!techSection) return;
        const sectionPos = techSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight * 0.85;

        if (sectionPos < screenPos && !counted) {
            startCounters();
            counted = true;
        }
    };

    window.addEventListener('scroll', checkCounterScroll);
    checkCounterScroll();

    // 4. Feedback Interativo no Botão Principal
    const btnMain = document.querySelector('.btn-main');
    if (btnMain) {
        btnMain.addEventListener('click', () => {
            alert('🌱 Bem-vindo ao Futuro! O projeto Agrinho une tecnologia e consciência para transformar o amanhã.');
        });
    }
});