import { gsap } from 'gsap';
import { isMobileDevice } from '../utils';

class Navigation {
  /**
   * @type {HTMLElement}
   */
  navigation;
  /**
   * @type {GSAPTimeline}
   */
  navigationTimeline1;
  /**
   * @type {GSAPTimeline}
   */
  navigationTimeline2;
  /**
   * @type {GSAPTimeline}
   */
  headerBurgerTimeline;
  init() {
    this.navigation = document.querySelector('.navigation');
    if (!this.navigation) {
      return;
    }

    this.navigationSetHeight();

    window.addEventListener('resize', () => {
      this.navigationSetHeight();
    });

    gsap.to(this.navigation, { y: '-100%', opacity: 0 });
    this.navigationTimelineInit();
    this.headerTimelineInit();
    this.navigationLinkInit();
    this.soonInit();

    const burgerButton = document.querySelector('.header-burger');
    burgerButton.onclick = () => {
      if (document.body.classList.contains('navigation_show')) {
        this.navigationHide();
      } else {
        document.body.classList.add('navigation_show', 'overflow-hidden');
        this.navigationTimeline1.play();
        this.navigationTimeline2.play();
        this.headerBurgerTimeline.play();
      }
    };
  }

  navigationHide() {
    this.navigationTimeline1.reverse();
    this.navigationTimeline1.eventCallback('onReverseComplete', () => {
      this.headerBurgerTimeline.reverse();
      document.body.classList.remove('navigation_show', 'overflow-hidden');
    });
    this.navigationTimeline2.reverse();
  }

  headerTimelineInit() {
    this.headerBurgerTimeline = gsap.timeline({ paused: true });
    this.headerBurgerTimeline.to('.header-burger__text_open', {
      duration: 0.3,
      display: 'none',
      opacity: 0,
    });
    this.headerBurgerTimeline.to('.header-burger__text_close', {
      duration: 0.3,
      display: 'block',
      opacity: 1,
      color: '#ffffff'
    });
    this.headerBurgerTimeline.to('.header-burger__icon span', {
      duration: 0.3,
      display: 'block',
      opacity: 1,
      backgroundColor: '#ffffff'
    });
  }

  navigationTimelineInit() {
    gsap.set(
      '.navigation-contact__title, .navigation-contact__item, .navigation__li',
      {
        opacity: 0,
        y: -50,
      }
    );

    this.navigationTimeline1 = gsap.timeline({ paused: true });
    this.navigationTimeline1.set('.navigation', {
      display: 'block',
    });
    this.navigationTimeline1.to('.navigation', {
      duration: 0.5,
      y: 0,
      opacity: 1,
    });
    this.navigation.querySelectorAll('.navigation__li').forEach((el, i) => {
      this.navigationTimeline1.to(
        el,
        {
          duration: 0.2,
          opacity: 1,
          y: 0,
        },
        i === 0 ? '' : '-=.1s'
      );
    });

    this.navigationTimeline2 = gsap.timeline({ paused: true });

    this.navigation.querySelectorAll('.navigation-contact').forEach((el, i) => {
      const title = el.querySelector('.navigation-contact__title');
      const items = el.querySelectorAll('.navigation-contact__item');
      this.navigationTimeline2.to(
        title,
        {
          duration: 0.2,
          opacity: 1,
          y: 0,
        },
        i === 0 ? '' : '-=0.1s'
      );

      items.forEach((item) => {
        this.navigationTimeline2.to(
          item,
          {
            duration: 0.2,
            opacity: 1,
            y: 0,
          },
          '-=0.1s'
        );
      });
    });
  }

  navigationSetHeight() {
    if (isMobileDevice()) {
      this.navigation.style.height = `${window.screen.availHeight}px`;
    } else {
      this.navigation.style.height = `${innerHeight}px`;
    }
  }

  navigationLinkInit() {
    this.navigation.querySelectorAll('.navigation__link').forEach((el) => {
      const href = el.getAttribute('href');
      if (href?.startsWith('#')) {
        el.onclick = (e) => {
          e.preventDefault();
          this.navigationHide();
          const scrollToElement = document.querySelector(href);
          window.scrollTo({
            top: scrollToElement.offsetTop,
            behavior: 'smooth',
          });
        };
      }
    });
  }

  soonInit() {
    this.navigation
      .querySelectorAll('.navigation__link_disabled')
      .forEach((el) => {
        const text = el.querySelector('.navigation__link_text');
        const soon = el.querySelector('.navigation__link_soon');
        el.addEventListener('mouseenter', () => {
          gsap.set(text, { display: 'none' });
          gsap.set(soon, { display: 'block' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.set(soon, { display: 'none' });
          gsap.set(text, { display: 'block' });
        });
      });
  }
}

export const navigation = new Navigation();
