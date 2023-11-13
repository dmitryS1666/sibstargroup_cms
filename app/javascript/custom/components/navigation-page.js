import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class NavigationPage {
  /**
   * @type {HTMLElement}
   */
  navigationPage;
  /**
   * @type {GSAPTimeline}
   */
  timeline;
  /**
   *
   * @type {boolean}
   */
  checkClick = false;
  /**
   *
   * @type {string}
   */
  linkActiveClass = 'navigation-page__link_active';
  init() {
    this.navigationPage = document.querySelector('.navigation-page');
    if (!this.navigationPage) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    this.resizeInit();
    this.animationInit();
    this.timelineInit();
    this.showInit();
    this.navigationInit();
    this.activeInit();
  }

  resizeInit() {
    this.navigationPage.style.minHeight = `${innerHeight}px`;
    window.addEventListener('resize', () => {
      this.navigationPage.style.minHeight = `${innerHeight}px`;
    });
  }

  animationInit() {
    gsap.fromTo(
      this.navigationPage,
      { opacity: 0, x: -100 },
      {
        scrollTrigger: {
          trigger: this.navigationPage,
          start: `80% top`,
          scrub: true,
        },
        x: 0,
        opacity: 1,
      }
    );
  }

  timelineInit() {
    this.timeline = gsap.timeline({ paused: true });

    this.timeline.to('.navigation-page__background', {
      duration: 0.2,
      x: 0,
    });
    this.navigationPage
      .querySelectorAll('.navigation-page__text')
      .forEach((el, i) => {
        this.timeline.to(
          el,
          {
            duration: 0.1,
            width: 160,
          },
          i === 0 ? '-=.1s' : '-=.05s'
        );
      });
  }

  showInit() {
    const nav = this.navigationPage.querySelector('.navigation-page__nav');
    nav.addEventListener('mouseenter', () => {
      this.timeline.play();
    });
    nav.addEventListener('mouseleave', () => {
      this.timeline.reverse();
    });
  }

  navigationInit() {
    this.navigationPage
      .querySelectorAll('.navigation-page__link')
      .forEach((el) => {
        el.onclick = (e) => {
          e.preventDefault();
          const hash = el.getAttribute('href');
          history.replaceState(undefined, undefined, hash);
          this.checkClick = true;
          this.navigationPage
            .querySelector('.navigation-page__link_active')
            .classList.remove(this.linkActiveClass);
          el.classList.add(this.linkActiveClass);
          gsap.to(window, {
            duration: 0.5,
            scrollTo: hash,
            onComplete: () => {
              this.checkClick = false;
            },
          });
        };
      });
  }

  activeInit() {
    document.querySelectorAll('.home-section').forEach((el) => {
      const id = el.getAttribute('id');
      const link = this.navigationPage.querySelector(
        `.navigation-page__link[href='#${id}']`
      );
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom-=20%',
        end: 'bottom bottom-=20%',
        onEnter: () => {
          if (!this.checkClick) {
            link.classList.add(this.linkActiveClass);
          }
        },
        onEnterBack: () => {
          if (!this.checkClick) {
            link.classList.add(this.linkActiveClass);
          }
        },
        onLeave: () => {
          if (!this.checkClick) {
            link.classList.remove(this.linkActiveClass);
          }
        },
        onLeaveBack: () => {
          if (!this.checkClick) {
            link.classList.remove(this.linkActiveClass);
          }
        },
        markers: false,
      });
    });
  }
}

export const navigationPage = new NavigationPage();
