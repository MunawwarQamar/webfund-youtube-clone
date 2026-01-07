document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    /* =========================
       Sidebar Toggle
    ========================= */
    menuBtn.addEventListener('click', () => {
        // Toggle a class instead of manipulating inline styles
        sidebar.classList.toggle('sidebar-hidden');
    });

    /* =========================
       Search Functionality
    ========================= */
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        const query = searchInput.value.trim();
        if (query) {
            // Replace alert with real search logic in production
            alert(`Searching for: ${query}`);
        }
    });

    /* =========================
       Dark / Light Mode Toggle
    ========================= */
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Update toggle icon
        themeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });

    /* =========================
       Video Card Clicks
    ========================= */
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent click on links inside the card from triggering twice
            if (e.target.tagName.toLowerCase() !== 'a' && !e.target.closest('a')) {
                alert('Video clicked! (In a real app, this would navigate to the video page)');
            }
        });
    });
});
