// Drawer menu logic for all pages
document.addEventListener('DOMContentLoaded', function () {
    const drawer = document.getElementById('drawer-nav');
    const openBtn = document.querySelector('.drawer-toggle');
    const closeBtn = drawer.querySelector('.drawer-close');
    const links = drawer.querySelectorAll('a');

    openBtn.addEventListener('click', () => {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
    });
    links.forEach(link => {
        link.addEventListener('click', () => {
            drawer.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
    // Close drawer on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            drawer.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});

// Add after logo span in header
const logoSpan = document.querySelector('.logo span');
if (logoSpan) {
    const placeholder = document.createElement('div');
    placeholder.id = 'drawer-menu-placeholder';
    logoSpan.insertAdjacentElement('afterend', placeholder);
}

// Load drawer menu HTML and JS
fetch('menu.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('drawer-menu-placeholder').innerHTML = html;
        const script = document.createElement('script');
        script.src = 'scripts/drawer-menu.js';
        document.body.appendChild(script);
    });