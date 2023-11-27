export * from './home-hero-counter';
export * from './home-animations';
export * from './home-about-slider';
export * from './home-coal-sales';
export * from './home-supply-basis';

// import { homeHeroCounter } from './home-hero-counter';
// import { homeAnimations } from './home-animations';
// import { homeCoalSales } from './home-coal-sales';
// import { homeSupplyBasis } from './home-supply-basis';

class Home {
    init() {
        if (!document.querySelector('.home-page')) {
            return;
        }
        document.querySelector('.header').classList.add('invert');
        // homeHeroCounter.init();
        // homeAnimations.init();
        // homeCoalSales.init();
        // homeSupplyBasis.init();
    }
}

export const home = new Home();
export * from './home-about-slider';
