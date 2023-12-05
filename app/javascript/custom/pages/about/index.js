import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobileWidth, isTabletWidth } from '../../utils';

class About {
  init() {
    if (!document.querySelector('.about-page')) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    this.animateVideo();
    this.animateTitles();
    this.animateInfo();
    this.animateImage();
    this.animateCommand();

    this.animateElements();

    window.addEventListener('resize', () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.refresh();
      });
    });
  }

  animateVideo() {
    const title = document.querySelector('.about-page-section__title');
    const video = document.querySelector('.about-page-background__video');
    const blurVideo = { value: 0 };

    gsap.to(blurVideo, {
      scrollTrigger: {
        trigger: title,
        start: '10% bottom',
        end: 'top 50%',
        scrub: true,
        markers: false,
      },
      value: 7,
      onUpdate: () => {
        gsap.set(video, {
          webkitFilter: 'blur(' + blurVideo.value + 'px)',
          filter: 'blur(' + blurVideo.value + 'px)',
        });
      },
    });

    gsap.to(video, {
      scrollTrigger: {
        trigger: title,
        start: '10% bottom',
        end: 'top 50%',
        scrub: true,
        markers: false,
      },
      opacity: 0.4,
    });
  }

  animateElements() {
    let offset = 150;

    if (isMobileWidth()) {
      offset = 70;
    }

    document
      .querySelectorAll(
        // '.about-page-title, .about-page-mission, .about-page-text, .about-page-command__title, .info-block__divider, .info-block__title, .info-block__text, .footer__head'
        '.about-page-title'
      )
      .forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.3,
          },
          {
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: `bottom+=${offset}px bottom`,
              scrub: true,
              markers: false,
              invalidateOnResize: true,
            },
            opacity: 1,
            scale: 1,
          }
        );
      });

    const aboutOuter = document.querySelector('.about-page-command__outer');
    gsap.fromTo(
      aboutOuter,
      { opacity: 0, scale: 0.3 },
      {
        scrollTrigger: {
          trigger: '.about-page-command',
          start: `top+=100px bottom`,
          end: `bottom bottom`,
          scrub: true,
          markers: false,
        },
        opacity: 1,
        scale: 1,
      }
    );
  }

  animateTitles() {
    const videoBackground = document.querySelector('.about-page-background');
    let offset = 150;

    if (isMobileWidth()) {
      offset = 70;
    }

    document
      .querySelectorAll('.about-page-slide-titles__item')
      .forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.3 },
          {
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: `bottom+=${offset}px bottom`,
              scrub: true,
              markers: false,
            },
            opacity: 1,
            scale: 1,
          }
        );
      });

    gsap.to('.about-page-slide-titles__item', {
      scrollTrigger: {
        trigger: '.about-page-section__slide-titles',
        start: 'top 40%',
        end: 'center 50%',
        scrub: true,
        markers: false,
      },
      color: '#252739',
    });

    gsap.to('.about-page-slide-titles__item', {
      scrollTrigger: {
        trigger: '.about-page-section__slide-titles',
        start: 'top 40%',
        end: 'center 50%',
        scrub: true,
        markers: false,
      },
      color: '#252739',
    });

    gsap.to(videoBackground, {
      scrollTrigger: {
        trigger: '.about-page-section__slide-titles',
        start: 'top 40%',
        end: 'center 50%',
        scrub: true,
        markers: false,
      },
      opacity: 0,
    });
  }

  animateInfo() {
    const sectionInfo = document.querySelector('.about-page-section__info');
    const imageWrapper = sectionInfo.querySelector(
      '.info-block__image-wrapper'
    );
    const image = sectionInfo.querySelector('.info-block__image');
    const imageImg = imageWrapper.querySelector('img');
    const caption = sectionInfo.querySelector('.info-block__caption');
    const infoBlock01 = document.querySelector('.about-page-info-block_01');

    if (!isTabletWidth()) {
      gsap.fromTo(
        imageImg,
        {
          scale: 2,
        },
        {
          scrollTrigger: {
            trigger: imageWrapper,
            start: 'top bottom',
            end: `bottom+=${
              infoBlock01.clientHeight + caption.clientHeight
            }px bottom`,
            scrub: true,
            markers: false,
          },
          scale: 1,
        }
      );
    } else {
      gsap.fromTo(
        imageImg,
        {
          scale: 2,
        },
        {
          scrollTrigger: {
            trigger: imageWrapper,
            start: 'top bottom',
            end: `bottom 50%`,
            scrub: true,
            markers: false,
          },
          scale: 1,
        }
      );
    }

    if (isTabletWidth()) {
      return;
    }

    gsap.fromTo(
      image,
      {
        height: image.clientHeight,
      },
      {
        scrollTrigger: {
          trigger: '.about-page-info-block',
          start: `top+=${infoBlock01.clientHeight + caption.clientHeight} top`,
          end: `bottom+=${
            infoBlock01.clientHeight + caption.clientHeight + 300
          }px top`,
          scrub: true,
          markers: false,
        },
        height: image.clientHeight - 300,
      }
    );

    ScrollTrigger.create({
      trigger: infoBlock01,
      start: `top top`,
      end: `bottom+=${
        infoBlock01.clientHeight + caption.clientHeight
      }px bottom`,
      pin: true,
      pinSpacing: false,
      scrub: true,
      markers: false,
    });
  }

  animateImage() {
    const imageImg = document.querySelector('.about-page-image img');
    gsap.fromTo(
      imageImg,
      {
        scale: 1.5,
      },
      {
        scrollTrigger: {
          trigger: '.about-page-section__image',
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true,
          markers: false,
        },
        scale: 1,
      }
    );

    gsap.to('.about-page', {
      scrollTrigger: {
        trigger: '.about-page-section__image',
        start: '50% 50%',
        end: 'bottom 80%',
        scrub: true,
        markers: false,
      },
      backgroundColor: '#252739',
    });
  }

  animateCommand() {
    let totalWidth = 0;
    const command = document.querySelector('.about-page-command');
    const containerWidth = command.querySelector('.container').clientWidth;
    let windowWidth = window.innerWidth;

    command.querySelectorAll('.about-page-command-item').forEach((item) => {
      totalWidth += item.clientWidth;
    });

    let x = -totalWidth + (windowWidth / 2 + containerWidth / 2);
    if (isTabletWidth()) {
      x = -totalWidth + (windowWidth - 60);
    }

    let to = gsap.to('.about-page-command__outer', {
      scrollTrigger: {
        trigger: command,
        start: 'bottom bottom',
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        markers: false,
      },
      ease: 'none',
      x,
    });

    if (!isTabletWidth()) {
      return;
    }

    window.addEventListener('resize', () => {
      to.scrollTrigger.kill();
      to.kill();
      totalWidth = 0;
      windowWidth = window.innerWidth;

      command.querySelectorAll('.about-page-command-item').forEach((item) => {
        totalWidth += item.clientWidth;
      });

      to = gsap.to('.about-page-command__outer', {
        scrollTrigger: {
          trigger: command,
          start: 'bottom bottom',
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          markers: false,
        },
        ease: 'none',
        x: -totalWidth + (windowWidth - 60),
      });
    });
  }
}

export const about = new About();
