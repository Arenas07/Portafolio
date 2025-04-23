particlesJS('particles-js', {
    particles: {
        number: { value: 60 },
        size: { value: 4 },
        move: { speed: 1 }
    }
});

const typingEffect = document.querySelector('.typing-effect');
const phrases = ["Desarrollador Fullstack", "Santiago Arenas", "Innovador"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typingEffect.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingEffect.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(type, isDeleting ? 150 : 100);
}

document.addEventListener('DOMContentLoaded', type);
