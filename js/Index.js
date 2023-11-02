function contactar() {
    alert("¡Gracias por tu interés! Puedes contactarnos a través de la página de 'Contacto'.");
}

const titleAnimation = anime({
    targets: '.section-title',
    translateY: [-30, 0],
    opacity: [0, 1],
    color: ['#fff', '#007bff'],
    duration: 1000,
    easing: 'easeOutExpo',
    autoplay: false,
});

const ctaAnimation = anime({
    targets: '.cta-button',
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutElastic(1, 0.6)',
    delay: 500,
    autoplay: false,
});

document.addEventListener('DOMContentLoaded', () => {
    titleAnimation.play();
    ctaAnimation.play();
    productoCardAnimation.play();
    contactoAnimation.play();
});

