import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isTabletWidth } from '../../utils';

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

  animateTitles() {
    const videoBackground = document.querySelector('.about-page-background');

    document
      .querySelectorAll('.about-page-slide-titles__item')
      .forEach((el, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const percent = `${10 + 5 * index}%`;

        gsap.fromTo(
          el,
          {
            xPercent: -(100 * direction),
          },
          {
            xPercent: 100 * direction,
            scrollTrigger: {
              trigger: '.about-page-section__slide-titles',
              start: `${percent} 50%`,
              end: '100%+150px top',
              scrub: true,
              markers: false,
            },
          }
        );
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
    const info = document.querySelector('.about-page-info-block');
    const image = info.querySelector('.info-block__image');
    const imageImg = image.querySelector('img');
    const caption = info.querySelector('.info-block__caption');

    if (!isTabletWidth()) {
      gsap.set(info, {
        height: info.clientHeight,
      });
    }

    gsap.fromTo(
      image,
      {
        y: 200,
      },
      {
        scrollTrigger: {
          trigger: '.about-page-info-block',
          start: '200 bottom',
          end: 'center 50%',
          scrub: true,
          markers: false,
        },
        y: 0,
      }
    );

    gsap.fromTo(
      imageImg,
      {
        scale: 2,
      },
      {
        scrollTrigger: {
          trigger: '.about-page-info-block',
          start: '200 bottom',
          end: 'bottom 50%',
          scrub: true,
          markers: false,
        },
        scale: 1,
      }
    );

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
          start: 'bottom center',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
        height: image.clientHeight - 300,
      }
    );

    gsap.fromTo(
      caption,
      {
        yPercent: 100,
      },
      {
        scrollTrigger: {
          trigger: '.about-page-info-block',
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true,
          markers: false,
        },
        yPercent: -100,
      }
    );
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
