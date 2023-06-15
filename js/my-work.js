const previewLinks = document.querySelectorAll('.image-preview-link');
const previewPopup = document.querySelector('.image-preview');

previewLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah navigasi ke halaman baru
        const imageUrl = link.getAttribute('href');
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        previewPopup.innerHTML = '';
        previewPopup.appendChild(imageElement);
        previewPopup.style.display = 'block';
    });
});

previewPopup.addEventListener('click', (e) => {
    if (e.target === previewPopup) {
        previewPopup.style.display = 'none';
    }
});