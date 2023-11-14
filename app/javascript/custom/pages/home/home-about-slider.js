import Swiper from 'swiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

class HomeAboutSlider {
  init() {
    const slider = document.querySelector('.home-about-slider');
    if (!slider) {
      return;
    }

    Swiper.use([Pagination, Autoplay, EffectFade]);
    gsap.registerPlugin(ScrollTrigger);

    const navigation = document.querySelector('.home-about-slider-navigation');

    // let elem = document.getElementById('home-about-slider');
    // let speed = elem.dataset.speed;
    let speed = 3500;

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: speed,
      },
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: navigation,
        clickable: true,
        bulletClass: 'home-about-slider-navigation__bullet',
        bulletActiveClass: 'home-about-slider-navigation__bullet_active',
      },
    });

    swiper.autoplay.pause();
    navigation
      .querySelector('.home-about-slider-navigation__bullet_active')
      .classList.remove('home-about-slider-navigation__bullet_active');

    ScrollTrigger.create({
      once: true,
      trigger: slider,
      start: `top 60%`,
      onEnter: () => {
        swiper.setProgress(0);
        navigation
          .querySelectorAll('.home-about-slider-navigation__bullet')
          .item(0)
          .classList.add('home-about-slider-navigation__bullet_active');
        swiper.autoplay.start();
      },
    });
  }
}

export const homeAboutSlider = new HomeAboutSlider();
