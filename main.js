// ============================================================
//  AVILA GRILL MIAMI — main.js
// ============================================================

(function () {
    'use strict';

    const header    = document.getElementById('header');
    const nav       = document.getElementById('nav');
    const overlay   = document.getElementById('nav-overlay');
    const btnAbrir  = document.getElementById('abrir');
    const btnCerrar = document.getElementById('cerrar');

    // ----------------------------------------------------------
    // 1. Sticky header — añade clase .scrolled al hacer scroll
    // ----------------------------------------------------------
    function handleScroll() {
        header.classList.toggle('scrolled', window.scrollY > 80);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // estado inicial si la página carga scrolleada

    // ----------------------------------------------------------
    // 2. Mobile nav — abrir / cerrar con overlay
    // ----------------------------------------------------------
    function openNav() {
        nav.classList.add('visible');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeNav() {
        nav.classList.remove('visible');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (btnAbrir)  btnAbrir.addEventListener('click', openNav);
    if (btnCerrar) btnCerrar.addEventListener('click', closeNav);
    if (overlay)   overlay.addEventListener('click', closeNav);

    // Cerrar al hacer click en cualquier enlace del nav
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeNav);
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeNav();
    });

    // ----------------------------------------------------------
    // 3. Activar primera tab del menú si el hash es #menu
    // ----------------------------------------------------------
    window.addEventListener('load', function () {
        if (window.location.hash === '#menu') {
            var firstTab = document.getElementById('tab-entradas');
            if (firstTab && typeof bootstrap !== 'undefined') {
                new bootstrap.Tab(firstTab).show();
            }
        }
    });

})();
