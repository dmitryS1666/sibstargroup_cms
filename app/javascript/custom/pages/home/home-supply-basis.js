class HomeSupplyBasis {
  /**
   * @type {HTMLElement}
   */
  buttons;
  /**
   * @type {HTMLElement}
   */
  pathDefault;
  /**
   * @type {NodeListOf<HTMLElement>}
   */
  allDots;
  /**
   *
   * @type {boolean}
   */
  videoClicked = false;
  init() {
    this.buttons = document.querySelector('.home-supply-basis__buttons');
    if (!this.buttons) {
      return;
    }

    this.allDots = document.querySelectorAll(
      '.home-supply-basis-map-item_small'
    );

    this.pathsInit();
    this.videoInit();
    this.navigationInit();
    this.popupsInit();
    this.videoPopupCloseInit();
  }

  pathsInit() {
    this.pathDefault = document.querySelector(
      '.home-supply-basis-map__path_default'
    );
    this.pathDefault?.classList.add('home-supply-basis-map__path_show');
    this.buttons
      .querySelectorAll('.button:not(.home-supply-basis__button-close)')
      .forEach((button) => {
        const path = document.querySelector(
          `.home-supply-basis-map__path_${button.dataset.path}`
        );
        button.addEventListener('mouseenter', () => {
          this.pathDefault?.classList.remove(
            'home-supply-basis-map__path_show'
          );
          path?.classList.add('home-supply-basis-map__path_show');
          this.dotShow(button.dataset.cities.split(','));
        });

        button.addEventListener('mouseleave', () => {
          this.pathDefault?.classList.add('home-supply-basis-map__path_show');
          path?.classList.remove('home-supply-basis-map__path_show');
          this.dotsAllShow();
        });
      });
  }

  /**
   *
   * @param cities {string[]}
   */
  dotShow(cities) {
    this.allDots.forEach((el) => {
      if (!cities.includes(el.dataset.city)) {
        el.classList.add('home-supply-basis-map-item_hide');
      }
    });
  }

  dotsAllShow() {
    this.allDots.forEach((el) => {
      el.classList.remove('home-supply-basis-map-item_hide');
    });
  }

  videoInit() {
    document
      .querySelectorAll('.home-supply-basis-map-video__dot')
      .forEach((el) => {
        const video = document.querySelector(
          `.home-supply-basis-map-video__path_${el.dataset.video}`
        );
        el.onclick = () => {
          this.videoShow(video, this.videoClicked);
          this.videoPopupShow(video);
          el.classList.add('home-supply-basis-map-video__dot_active');
          this.videoClicked = true;
        };

        el.addEventListener('mouseenter', () => {
          this.videoShow(video, this.videoClicked);
          el.classList.add('home-supply-basis-map-video__dot_active');
          this.videoClicked = false;
        });

        el.addEventListener('mouseleave', () => {
          if (!this.videoClicked) {
            this.videoHide();
          }
        });
      });
  }

  /**
   *
   * @param video {HTMLVideoElement}
   * @param popup {boolean}
   */
  videoShow(video, popup) {
    if (video.classList.contains('home-supply-basis-map-video__path_show')) {
      return;
    }
    this.videoHide(popup);
    video.classList.add('home-supply-basis-map-video__path_show');
    video.play();
  }

  /**
   *
   * @param popup {boolean}
   */
  videoHide(popup = false) {
    const video = document.querySelector(
      '.home-supply-basis-map-video__path_show'
    );
    document
      .querySelector('.home-supply-basis-map-video__dot_active')
      ?.classList.remove('home-supply-basis-map-video__dot_active');
    if (video) {
      video.classList.remove('home-supply-basis-map-video__path_show');
      video.pause();
      video.currentTime = 0;
    }
    if (popup) {
      this.videoClicked = false;
      this.videoPopupHide(video);
    }
  }

  /**
   *
   * @param video {HTMLVideoElement}
   */
  videoPopupShow(video) {
    document
      .querySelector(
        `.home-supply-basis-map-video-popup_${video?.dataset.popup}`
      )
      ?.classList.add('home-supply-basis-map-video-popup_show');
  }

  /**
   *
   * @param video {HTMLVideoElement}
   */
  videoPopupHide(video) {
    document
      .querySelector(
        `.home-supply-basis-map-video-popup_${video?.dataset.popup}`
      )
      ?.classList.remove('home-supply-basis-map-video-popup_show');
  }

  navigationInit() {
    const buttons = this.buttons.querySelectorAll(
      '.home-supply-basis__buttons .button'
    );

    buttons.forEach((button) => {
      if (button.classList.contains('home-supply-basis__button-close')) {
        button.onclick = (e) => {
          e.preventDefault();
          this.videoHideAll();
          this.navigationButtonsRemoveActiveAll(buttons);
          this.videoHide(true);
          button.classList.remove('home-supply-basis__button-close_show');
        };
      } else {
        button.onclick = (e) => {
          e.preventDefault();
          if (button.classList.contains('button_active')) {
            return;
          }
          this.popupsHideAll();
          document
            .querySelector('.home-supply-basis__button-close')
            .classList.add('home-supply-basis__button-close_show');
          this.navigationButtonsRemoveActiveAll(buttons);
          this.videoHideAll();
          this.videoHide(true);
          button.classList.add('button_active');
          document
            .querySelector(
              `.home-supply-basis-map-video_${button.dataset.path}`
            )
            ?.classList.add('home-supply-basis-map-video_show');
        };
      }
    });
  }

  videoHideAll() {
    document.querySelectorAll('.home-supply-basis-map-video').forEach((el) => {
      el.classList.remove('home-supply-basis-map-video_show');
    });
  }

  /**
   *
   * @param buttons {NodeListOf<HTMLElement>}
   */
  navigationButtonsRemoveActiveAll(buttons) {
    buttons.forEach((el) => {
      el.classList.remove('button_active');
    });
  }

  popupsInit() {
    document
      .querySelectorAll('.home-supply-basis-map-item_small')
      .forEach((el) => {
        el.onclick = () => {
          this.popupsHideAll();
          el.classList.add('home-supply-basis-map-item_active');
          document
            .querySelector(`.home-supply-basis-map-popup_${el.dataset.city}`)
            .classList.add('home-supply-basis-map-popup_show');
        };
      });

    document
      .querySelectorAll('.home-supply-basis-map-popup__close')
      .forEach((el) => {
        el.onclick = () => {
          this.popupsHideAll();
        };
      });

    document
      .querySelectorAll('.home-supply-basis-map-popup__link')
      .forEach((el) => {
        el.onclick = () => {
          this.popupsHideAll();
          document
            .querySelector(`.home-supply-basis-map-video_${el.dataset.path}`)
            ?.classList.add('home-supply-basis-map-video_show');

          console.log(el.dataset.path);

          this.buttons
            .querySelector(`.button[data-path='${el.dataset.path}']`)
            ?.classList.add('button_active');

          this.buttons
            .querySelector('.home-supply-basis__button-close')
            ?.classList.add('home-supply-basis__button-close_show');
        };
      });
  }

  popupsHideAll() {
    document
      .querySelector('.home-supply-basis-map-popup_show')
      ?.classList.remove('home-supply-basis-map-popup_show');
    document
      .querySelector('.home-supply-basis-map-item_active')
      ?.classList.remove('home-supply-basis-map-item_active');
  }
  videoPopupCloseInit() {
    document
      .querySelectorAll('.home-supply-basis-map-video-popup__close')
      .forEach((el) => {
        el.onclick = () => {
          this.videoHide(true);
        };
      });
  }
}

export const homeSupplyBasis = new HomeSupplyBasis();
