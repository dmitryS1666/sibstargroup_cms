let last_known_scroll_position = 0;
let ticking = false;

import {
    command,
    cookies,
    formEmailUs,
    formOrder,
    header,
    navigation,
    navigationPage,
    // news,
    popup,
} from './components';
import {
    homeAboutSlider,
    homeAnimations,
    homeCoalSales,
    homeHeroCounter,
    homeSupplyBasis
} from './pages/home';
import { sales } from './pages/sales';
import { about } from './pages/about';

window.addEventListener('DOMContentLoaded', () => {
    init();
});

window.addEventListener("scroll", function (e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            reverseLogo();
            ticking = false;
        });
        ticking = true;
    }
});

function init() {
    /* Global */
    popup.init();
    header.init();
    navigation.init();
    navigationPage.init();
    // news.init();
    formEmailUs.init();
    formOrder.init();
    command.init();
    cookies.init();

    /* Pages */
    homeHeroCounter.init();
    homeAnimations.init();
    homeAboutSlider.init();
    // home.init();
    sales.init();
    homeCoalSales.init();
    homeSupplyBasis.init();
    about.init();
}

function reverseLogo() {
    let logo = document.getElementById('logo');
    let img = logo.children[0];

    const currentUrl = window.location.href;

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        img.src = '/assets/logo.svg';
    } else if (currentUrl.includes('about') || currentUrl.includes('sale_petroleum')) {
        img.src = '/assets/logo.svg';
    } else {
        img.src = '/assets/logo_white.svg';
    }
}


