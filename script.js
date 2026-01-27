document.addEventListener('DOMContentLoaded', () => {
    // Update year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();

    const introText = document.getElementById('intro-text');
    const text = introText.textContent;
    introText.textContent = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            introText.textContent += text.charAt(index);
            index++;
            // Adjusted timing to complete in ~1 second (1000ms / text.length)
            const typingSpeed = Math.max(10, Math.floor(1000 / text.length));
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();

    // Make any .project-card with a data-href navigable without turning it into an anchor
    const navigableCards = document.querySelectorAll('.project-card[data-href]');
    navigableCards.forEach(card => {
        const href = card.getAttribute('data-href');
        // Click → navigate
        card.addEventListener('click', () => {
            if (href) window.location.href = href;
        });
        // Keyboard accessibility: Enter or Space
        card.addEventListener('keydown', (e) => {
            if (!href) return;
            const key = e.key || e.keyCode;
            if (key === 'Enter' || key === ' ' || key === 13 || key === 32) {
                e.preventDefault();
                window.location.href = href;
            }
        });
    });
});