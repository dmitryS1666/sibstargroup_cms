class HomeHeroCounter {
  /**
   * @type {String}
   */
  locale;
  init() {
    const counters = document.querySelectorAll('.home-hero-counter__value');

    if (!counters.length) {
      return;
    }

    this.locale = document.querySelector('body').dataset.locale;

    counters.forEach((el) => {
      this.animate(el);
    });
  }

  /**
   *
   * @param counter {HTMLElement}
   */
  animate(counter) {
    const value = +counter.dataset.counter;
    const data = +counter.innerText.replace(/\D/g, '');
    const speed = +counter.dataset.speed;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time).toLocaleString(this.locale);
      setTimeout(() => {
        this.animate(counter);
      }, 1);
    } else {
      counter.innerText = value.toLocaleString(this.locale);
    }
  }
}

export const homeHeroCounter = new HomeHeroCounter();
