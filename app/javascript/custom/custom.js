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
    homeSupplyBasis,
} from './pages/home';

window.addEventListener('DOMContentLoaded', () => {
    init();
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
    homeCoalSales.init();
    homeSupplyBasis.init();
}

function reverseLogo() {
    let logo = document.getElementById('logo');
    let img = logo.children[0];

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        img.src = '/assets/logo.svg';
    } else {
        img.src = '/assets/logo_white.svg';
    }
}

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

