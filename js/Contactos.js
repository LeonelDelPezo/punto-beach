document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario');
    const informacion = document.querySelector('.informacion');

    anime({
        targets: [formulario, informacion],
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 1000,
        easing: 'easeOutExpo'
    });
});

function enviarMensaje() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const formulario = document.querySelector('.formulario')

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
    } else {
        alert("¡Gracias por tu mensaje! Te responderemos pronto.");
    }
    
}

function mostrarUbicacion() {
    const informacion = document.querySelector('.informacion');

    anime({
        targets: informacion,
        translateY: 0,
        opacity: 50,
        duration: 500,
        easing: 'easeInExpo',
        complete: () => {

            alert("Nos encontramos ubicados en Calle 10 de Agosto, C. River Plate; Montañita, Ecuador, ¡Te esperamos!");
        }
    });
}
