import { slideToggle, slideUp } from '../../utils';

class HomeCoalSales {
  accordionActiveClass = 'home-coal-sales-accordion_active';
  init() {
    const accordions = document.querySelectorAll('.home-coal-sales-accordion');
    if (!accordions.length) {
      return;
    }

    accordions.forEach((el) => {
      el.querySelector('.home-coal-sales-accordion__head').onclick = () => {
        if (!el.classList.contains(this.accordionActiveClass)) {
          const active = document.querySelector(
            '.home-coal-sales-accordion_active'
          );
          if (active) {
            active.classList.remove(this.accordionActiveClass);
            slideUp(active.querySelector('.home-coal-sales-accordion__body'));
          }
        }

        el.classList.toggle(this.accordionActiveClass);
        slideToggle(el.querySelector('.home-coal-sales-accordion__body'));
      };
    });
  }
}

export const homeCoalSales = new HomeCoalSales();
