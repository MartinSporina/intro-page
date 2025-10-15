document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const closeButton = document.querySelector('.close-button');
    const videoCards = document.querySelectorAll('.video-card');
    const videoContainer = videoModal.querySelector('.video-container');

    // Funkcia na otvorenie modálneho okna
    function openModal(videoId) {
        videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Zabrání scrollu stránky za modalem
    }

    // Funkcia na zatvorenie modálneho okna
    function closeModal() {
        videoModal.style.display = 'none';
        videoContainer.innerHTML = ''; // Vymaže video, aby prestalo hrať
        document.body.style.overflow = ''; // Obnoví scroll stránky
    }

    // Event listenery pre kliknutie na video karty
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.dataset.videoId;
            if (videoId) {
                openModal(videoId);
            }
        });
    });

    // Event listener pre zatvorenie tlačidlom X
    closeButton.addEventListener('click', closeModal);

    // Event listener pre zatvorenie kliknutím mimo modal
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            closeModal();
        }
    });

    // Event listener pre zatvorenie stlačením ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && videoModal.style.display === 'block') {
            closeModal();
        }
    });
});