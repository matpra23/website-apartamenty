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
var flkty = new Flickity(carousel, {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    draggable: false,
    dragThreshold: 0,
    touch: false,
    prevNextButtons: true,
    pageDots: true
});

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

// Handle slide navigation links
document.querySelectorAll('.slide-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const slideIndex = parseInt(link.getAttribute('data-slide'));
        flkty.select(slideIndex);
    });
});

// About Section Navigation
document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.querySelector('.about-button');
    const aboutSection = document.querySelector('.about-section');
    const closeAbout = document.querySelector('.close-about');
    const navigationButtons = document.querySelectorAll('.flickity-prev-next-button');

    function hideNavigation() {
        navigationButtons.forEach(button => {
            button.classList.add('hidden');
        });
    }

    function showNavigation() {
        navigationButtons.forEach(button => {
            button.classList.remove('hidden');
        });
    }

    aboutButton.addEventListener('click', function() {
        aboutSection.classList.add('active');
        hideNavigation();
    });

    closeAbout.addEventListener('click', function() {
        aboutSection.classList.remove('active');
        showNavigation();
    });
});

// Location Section Navigation
document.addEventListener('DOMContentLoaded', function() {
    const locationButton = document.querySelector('.location-button');
    const locationSection = document.querySelector('.location-section');
    const closeLocation = document.querySelector('.close-location');
    const navigationButtons = document.querySelectorAll('.flickity-prev-next-button');

    function hideNavigation() {
        navigationButtons.forEach(button => {
            button.classList.add('hidden');
        });
    }

    function showNavigation() {
        navigationButtons.forEach(button => {
            button.classList.remove('hidden');
        });
    }

    locationButton.addEventListener('click', function() {
        locationSection.classList.add('active');
        hideNavigation();
    });

    closeLocation.addEventListener('click', function() {
        locationSection.classList.remove('active');
        showNavigation();
    });
});
