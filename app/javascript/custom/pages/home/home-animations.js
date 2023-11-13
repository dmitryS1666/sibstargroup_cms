import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobileDevice } from '../../utils';

class HomeAnimations {
  /**
   * @type {ScrollTrigger}
   */
  headScrollTrigger;
  init() {
    gsap.registerPlugin(ScrollTrigger);
    this.heroInit();
    this.aboutInit();
  }

  heroInit() {
    const homeHero = document.querySelector('.home-hero');
    if (!homeHero) {
      return;
    }

    this.heroSetHeight(homeHero);

    this.headScrollTriggerInit(homeHero);

    window.addEventListener('resize', () => {
      this.headScrollTrigger.kill();

      this.heroSetHeight(homeHero);

      this.headScrollTriggerInit(homeHero);
    });
  }

  headScrollTriggerInit(homeHero) {
    this.headScrollTrigger = ScrollTrigger.create({
      trigger: homeHero,
      start: `top top`,
      pinSpacing: false,
      pin: true,
    });
  }

  aboutInit() {
    const homeAbout = document.querySelector('.home-about');
    if (!homeAbout) {
      return;
    }

    const homeAboutHeadTitle = document.querySelector(
      '.home-about-head__title'
    );

    const containerWidth = homeAbout.querySelector('.container').offsetWidth;

    gsap.fromTo(
      homeAboutHeadTitle,
      {
        x: (innerWidth - containerWidth) / 2 + containerWidth,
      },
      {
        scrollTrigger: {
          trigger: homeAboutHeadTitle,
          start: '-150px bottom-=250px',
          end: 'bottom 70%',
          scrub: true,
          markers: false,
        },
        x: 0,
      }
    );

    const homeAboutHeadH2 = document.querySelector('.home-about-head__h2');

    gsap.fromTo(
      homeAboutHeadH2,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: homeAboutHeadH2,
          start: '-150px bottom-=250px',
          end: 'top 80%',
          scrub: true,
        },
        opacity: 1,
      }
    );
  }

  /**
   *
   * @param homeHero {HTMLElement}
   */
  heroSetHeight(homeHero) {
    if (isMobileDevice()) {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        homeHero.style.height = `${window.screen.availWidth}px`;
      } else {
        homeHero.style.height = `${window.screen.availHeight}px`;
      }
    } else {
      homeHero.style.height = `${innerHeight}px`;
    }
  }
}

export const homeAnimations = new HomeAnimations();
