document.addEventListener('DOMContentLoaded', () => {
    const producto = document.querySelectorAll('.producto-card');

    const titleAnimation = anime({
        targets: '.section-title',
        translateY: [-30, 0],
        opacity: [0, 1],
        color: ['#fff', '#007bff'], 
        duration: 1000,
        easing: 'easeOutExpo',
        autoplay: false,
    });

    titleAnimation.play();

    anime({
        targets: producto,
        translateY: [-30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 1000,
        easing: 'easeOutExpo'
    });
});

function agregarAlCarrito(idProducto) {
    const productos = document.querySelector(`[onclick="mostrarDetalle(${idProducto})"]`);
    
    anime({
        targets: productos,
        scale: 1.1,
        duration: 300,
        easing: 'easeInOutQuad',
        complete: () => {
            alert(`Se ha añadido el producto al carrito ;)`);
            anime({
                targets: productos,
                scale: 1,
                duration: 300,
                easing: 'easeInOutQuad'
            });
        }
    });
}

const producto = document.querySelectorAll('.producto-card');
producto.forEach(productos => {
    productos.addEventListener('mouseenter', () => {
        anime({
            targets: productos.querySelector('.precio'),
            scale: 1.1,
            duration: 200,
            easing: 'easeInOutQuad'
        });
    });

    productos.addEventListener('mouseleave', () => {
        anime({
            targets: productos.querySelector('.precio'),
            scale: 1,
            duration: 200,
            easing: 'easeInOutQuad'
        });
    });
});