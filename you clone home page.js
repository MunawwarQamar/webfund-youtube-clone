// Script to handle category nav horizontal scroll (arrow button)
document.addEventListener('DOMContentLoaded', () => {
    const categoryNav = document.getElementById('category-nav');
    const arrowBtn = categoryNav.querySelector('.category.arrow');

    arrowBtn.addEventListener('click', () => {
        categoryNav.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Category selection state
    const categories = categoryNav.querySelectorAll('.category:not(.arrow)');
    categories.forEach((cat) => {
        cat.addEventListener('click', () => {
            categories.forEach(c => c.classList.remove('selected'));
            cat.classList.add('selected');
        });
    });

    // Sidebar toggle buttons (optional for functionality)
    const sidebar = document.getElementById('sidebar');
    const menuToggleSidebar = document.getElementById('menu-toggle');
    const menuToggleTop = document.getElementById('menu-toggle-top');

    function toggleSidebar() {
        if (sidebar.style.width === '72px' || !sidebar.style.width) {
            sidebar.style.width = '240px';
            sidebar.querySelectorAll('.nav-item span').forEach(s => s.style.display = 'inline');
        } else {
            sidebar.style.width = '72px';
            sidebar.querySelectorAll('.nav-item span').forEach(s => s.style.display = 'none');
        }
    }

    menuToggleSidebar.addEventListener('click', toggleSidebar);
    menuToggleTop.addEventListener('click', toggleSidebar);

    // Initially hide nav-item text on collapsed sidebar
    sidebar.querySelectorAll('.nav-item span').forEach(s => s.style.display = 'none');
});
