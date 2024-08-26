document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
});

// Animaciones en la Galería
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.gallery-overlay').style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.gallery-overlay').style.opacity = '0';
    });
});
