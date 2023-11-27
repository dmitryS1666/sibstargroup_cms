import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

class Sales {
  init() {
    const infoBlock = document.querySelector('.sales-info-block');
    if (!infoBlock) {
      return;
    }

    const image = infoBlock.querySelector('.info-block__image');
    const caption = infoBlock.querySelector('.info-block__caption');
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(image.querySelector('img'), {
      scrollTrigger: {
        trigger: infoBlock,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
      scale: 1,
    });

    gsap.to(image, {
      scrollTrigger: {
        trigger: infoBlock,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
      y: 0,
    });
  }
}

export const sales = new Sales();
