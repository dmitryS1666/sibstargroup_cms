class Header {
  /**
   *
   * @type {number}
   */
  lastScrollY = 0;
  /**
   *
   * @type {boolean}
   */
  pageRefreshed = true;
  /**
   *
   * @type {number}
   */
  headerOffset = 60;
  /**
   *
   * @type {string[]}
   */
  locales = ['ru', 'en', 'zh'];

  init() {
    const header = document.querySelector('.header');
    this.checkScrollFixed(header);

    window.addEventListener('scroll', () => {
      this.checkScrollFixed(header);
      this.checkScrollHidden(header);
    });

    this.pageRefreshed = localStorage.getItem('header_hidden') === 'false';

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('header_hidden', 'false');
    });

    this.changeLanguage();
  }

  /**
   *
   * @param header {HTMLElement}
   */
  checkScrollFixed(header) {
    if (this.pageRefreshed) {
      header.style.transition = 'none';
    }
    if (
      window.scrollY > this.headerOffset &&
      !header.classList.contains('header_fixed')
    ) {
      header.classList.add('header_fixed');
    } else if (
      window.scrollY <= this.headerOffset &&
      header.classList.contains('header_fixed')
    ) {
      header.classList.remove('header_fixed');
    }
    if (this.pageRefreshed) {
      header.removeAttribute('style');
    }
  }

  /**
   *
   * @param header {HTMLElement}
   */
  checkScrollHidden(header) {
    if (this.pageRefreshed) {
      this.pageRefreshed = false;
      return;
    }
    if (document.body.classList.contains('navigation_show')) {
      return;
    }
    const scrollY = window.scrollY;
    if (
      scrollY > this.headerOffset &&
      scrollY > this.lastScrollY &&
      !header.classList.contains('header_hidden')
    ) {
      header.classList.add('header_hidden');
    } else if (
      header.classList.contains('header_hidden') &&
      (scrollY <= this.headerOffset || scrollY < this.lastScrollY)
    ) {
      header.classList.remove('header_hidden');
    }
    this.lastScrollY = scrollY;
  }
  changeLanguage() {
    const currentLocale = document.body.dataset.locale;
    document
      .querySelector(`.header-language__item[data-locale='${currentLocale}']`)
      ?.classList.add('header-language__item_active');

    document.querySelectorAll('.header-language__item').forEach((el) => {
      el.onclick = () => {
        const locale = el.dataset.locale;
        const paths = window.location.pathname.split('/');
        paths.splice(0, 1);
        paths.forEach((path, i) => {
          if (this.locales.includes(path)) {
            paths.splice(i, 1);
          }
        });
        switch (locale) {
          case 'ru':
            window.location.href = '/' + paths.join('/');
            break;
          case 'en':
            window.location.href = '/en/' + paths.join('/');
            break;
          case 'zh':
            window.location.href = '/zh/' + paths.join('/');
            break;
        }
      };
    });
  }
}

export const header = new Header();
