// ============================================================
//  AVILA GRILL MIAMI — main.js
// ============================================================

(function () {
    'use strict';

    const header = document.getElementById('header');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('nav-overlay');
    const btnAbrir = document.getElementById('abrir');
    const btnCerrar = document.getElementById('cerrar');
    const mobileMenuBreakpoint = window.matchMedia('(max-width: 768px)');
    const navLinks = nav ? nav.querySelectorAll('a') : [];
    let shouldReturnFocus = false;

    // ----------------------------------------------------------
    // 1. Sticky header — añade clase .scrolled al hacer scroll
    // ----------------------------------------------------------
    function handleScroll() {
        if (!header) return;

        header.classList.toggle('scrolled', window.scrollY > 80);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // estado inicial si la página carga scrolleada

    // ----------------------------------------------------------
    // 2. Mobile nav — abrir / cerrar con overlay
    // ----------------------------------------------------------
    function setNavState(isOpen, options) {
        const config = options || {};

        if (!nav || !overlay || !btnAbrir) return;

        nav.classList.toggle('visible', isOpen);
        overlay.classList.toggle('visible', isOpen);
        btnAbrir.classList.toggle('active', isOpen);
        btnAbrir.setAttribute('aria-expanded', String(isOpen));
        nav.setAttribute('aria-hidden', String(!isOpen));
        document.body.classList.toggle('nav-open', isOpen);

        if (isOpen) {
            shouldReturnFocus = true;
            if (btnCerrar) {
                window.requestAnimationFrame(function () {
                    btnCerrar.focus();
                });
            }
            return;
        }

        if (config.returnFocus !== false && shouldReturnFocus) {
            window.requestAnimationFrame(function () {
                btnAbrir.focus();
            });
        }

        shouldReturnFocus = false;
    }

    function openNav() {
        if (!mobileMenuBreakpoint.matches) return;

        setNavState(true);
    }

    function closeNav(options) {
        setNavState(false, options);
    }

    function toggleNav() {
        if (!nav) return;

        if (nav.classList.contains('visible')) {
            closeNav();
            return;
        }

        openNav();
    }

    if (btnAbrir) btnAbrir.addEventListener('click', toggleNav);
    if (btnCerrar) btnCerrar.addEventListener('click', closeNav);
    if (overlay) overlay.addEventListener('click', closeNav);

    // Cerrar al hacer click en cualquier enlace del nav
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeNav({ returnFocus: false });
        });
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav && nav.classList.contains('visible')) {
            closeNav();
        }
    });

    function handleBreakpointChange(e) {
        if (!e.matches) {
            closeNav({ returnFocus: false });
        }
    }

    if (typeof mobileMenuBreakpoint.addEventListener === 'function') {
        mobileMenuBreakpoint.addEventListener('change', handleBreakpointChange);
    } else if (typeof mobileMenuBreakpoint.addListener === 'function') {
        mobileMenuBreakpoint.addListener(handleBreakpointChange);
    }

    // ----------------------------------------------------------
    // 3. Activar primera tab del menú si el hash es #menu
    // ----------------------------------------------------------
    window.addEventListener('load', function () {
        closeNav({ returnFocus: false });

        if (window.location.hash === '#menu') {
            const firstTab = document.getElementById('tab-entradas');
            if (firstTab && typeof bootstrap !== 'undefined') {
                new bootstrap.Tab(firstTab).show();
            }
        }
    });

})();
