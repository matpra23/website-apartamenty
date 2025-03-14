const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    initialIndex: 0,
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    }
};

// Function to set background position for slides
function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosition = `${x}px`;
}

// Slides initialization
const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// Add text to navigation dots
const dots = document.querySelectorAll('.flickity-page-dots .dot');
slides.forEach((slide, index) => {
    if (dots[index]) {
        dots[index].setAttribute('data-text', slide.getAttribute('data-text'));
    }
});

// Get contact info section
const contactInfo = document.querySelector('.contact-info-slider');

// Listen for slide change
flkty.on('change', (index) => {
    if (index === 1) {
        // Remove 'hidden' class on main slide
        contactInfo.classList.remove('hidden');
    } else {
        // Add 'hidden' class on other slides
        contactInfo.classList.add('hidden');
    }
});

// Event listener using bg position
flkty.on('scroll', () => {
    flkty.slides.forEach(setBgPosition);
});
