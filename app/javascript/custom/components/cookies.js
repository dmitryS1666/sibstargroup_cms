import { gsap } from 'gsap';
import { getCookie } from '../utils';
class Cookies {
  init() {
    if (getCookie('confirmCookie')) {
      return;
    }
    gsap.to('.cookies__container', {
      duration: 0.3,
      y: 0,
      opacity: 1,
      delay: 1,
    });

    const tl = gsap.timeline({ paused: true });
    tl.to('.cookies__container', {
      duration: 0.3,
      y: '100%',
      opacity: 0,
    });

    tl.set('.cookies', { display: 'none' });

    document.querySelector('.cookies__button').onclick = () => {
      tl.play();

      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 7);
      const expires = currentDate.toUTCString();
      document.cookie = 'confirmCookie=true; expires=' + expires + '; path=/';
    };
  }
}

export const cookies = new Cookies();
