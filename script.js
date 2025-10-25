document.addEventListener('DOMContentLoaded', () => {
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
});