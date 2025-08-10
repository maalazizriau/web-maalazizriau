document.addEventListener('DOMContentLoaded', function() {

    // Aktifkan Carousel Bootstrap
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            ride: 'carousel'
        });
    }

    // Scrollspy untuk navigasi (Opsional untuk halaman profil)
    const scrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
    if (scrollSpyEl) {
        new bootstrap.ScrollSpy(scrollSpyEl, {
            target: '#navbar-example2'
        })
    }
});