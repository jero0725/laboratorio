document.addEventListener('DOMContentLoaded', () => {
    const introText = document.getElementById('intro-text');
    const text = introText.textContent;
    introText.textContent = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            introText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    typeText();
});