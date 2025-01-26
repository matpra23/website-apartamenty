const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};

// Function to set background position forr slides
function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosition = `${x}px`;
}

// Slides initialization
const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Uzyskaj sekcję kontaktową
const contactInfo = document.querySelector('.contact-info-slider');

// Nasłuchiwanie zmiany slajdu
flkty.on('change', (index) => {
    if (index === 0) {
        // Usuwamy klasę `hidden` na pierwszym slajdzie
        contactInfo.classList.remove('hidden');
    } else {
        // Dodajemy klasę `hidden` na innych slajdach
        contactInfo.classList.add('hidden');
    }
});

// Event listener using bg position
flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});
