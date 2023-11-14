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
// document.addEventListener("turbolinks:load", function () {
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
