const images = document.querySelectorAll('.grid-gallery img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // index aktualnie wyświetlanego zdjęcia

// Funkcja pomocnicza - pokaż zdjęcie o podanym indexie
function showImage(index) {
  modalImg.src = images[index].src;
}

// Przechodzenie do poprzedniego zdjęcia
function showPrev() {
  // cofamy index o 1, a jeśli dojdziemy poniżej 0, to idziemy na koniec tablicy
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Przechodzenie do następnego zdjęcia
function showNext() {
  // zwiększamy index o 1, a jeśli dojdziemy poza ostatni element, to wracamy do 0
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Kliknięcie w miniaturkę - otwarcie modala z danym zdjęciem
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
    modal.classList.add('open');
  });
});

// Zamknięcie po kliknięciu "×"
modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
});

// Zamknięcie po kliknięciu w tło (ale nie w obrazek ani strzałki)
modal.addEventListener('click', (event) => {
  // jeżeli kliknięty element to sam modal (tło), a nie obraz czy przyciski
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});

// Obsługa przycisków prev/next
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Obsługa klawiatury: Esc do zamknięcia, strzałki do przełączania
document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('open')) return; // jeśli modal nie jest otwarty, pomijamy
  
    switch (event.key) {
      case 'Escape':
        modal.classList.remove('open');
        break;
      case 'ArrowLeft':
        showPrev();
        break;
      case 'ArrowRight':
        showNext();
        break;
    }
  });
  
