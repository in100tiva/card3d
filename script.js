// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Adiciona os eventos de animação aos cards
cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect(); // Obtém as dimensões e posição do card
        const x = e.clientX - rect.left; // Calcula a posição X do mouse relativa ao card
        const y = e.clientY - rect.top; // Calcula a posição Y do mouse relativa ao card

        const centerX = rect.width / 2; // Calcula o centro do card no eixo X
        const centerY = rect.height / 2; // Calcula o centro do card no eixo Y

        const rotateX = (y - centerY) / 10; // Ajusta a rotação no eixo X
        const rotateY = (x - centerX) / 10; // Ajusta a rotação no eixo Y

        // Aplica a transformação ao card
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0) rotateY(0)'; // Reseta a rotação quando o mouse sai do card
    });

    // Evento de clique para tornar o card principal
    card.addEventListener('click', () => {
        // Remove a classe 'active' de todos os cards
        cards.forEach(c => c.classList.remove('active'));
        // Adiciona a classe 'active' ao card clicado
        card.classList.add('active');
    });
});
