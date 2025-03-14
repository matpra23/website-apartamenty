document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-nav.prev');
    const nextBtn = document.querySelector('.modal-nav.next');
    const images = document.querySelectorAll('.review-img');
    let currentImageIndex = 0;

    // Back button functionality
    document.querySelector('.back-button').addEventListener('click', () => {
        window.history.back();
    });

    // Open modal
    function openModal(index) {
        currentImageIndex = index;
        const imgSrc = images[index].src;
        modalContent.src = imgSrc;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Navigate to previous image
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalContent.src = images[currentImageIndex].src;
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalContent.src = images[currentImageIndex].src;
    }

    // Event listeners for images
    images.forEach((img, index) => {
        img.addEventListener('click', () => openModal(index));
    });

    // Event listeners for modal controls
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('open')) return;

        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
});
