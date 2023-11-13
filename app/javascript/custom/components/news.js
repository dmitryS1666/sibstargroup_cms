import { getHTML } from '../utils';

class News {
  init() {
    const popup = document.querySelector('#popup-news');
    document.querySelectorAll('.news-list-item').forEach((el) => {
      el.addEventListener('click', () => {
        const newsContainer = popup.querySelector('.news__container');
        newsContainer.innerHTML = '';
        this.addLoader(newsContainer);
        this.getContent(el, newsContainer);
      });
    });
  }

  /**
   *
   * @param newsContainer {HTMLElement}
   */
  addLoader(newsContainer) {
    const loader = document.createElement('div');
    loader.classList.add('news__loader');
    newsContainer.append(loader);
  }

  /**
   *
   * @param newsContainer {HTMLElement}
   * @param newsItem {HTMLElement}
   */
  getContent(newsItem, newsContainer) {
    const url = newsItem.dataset.link;
    getHTML(url, (responseCode, responseData) => {
      if (responseCode === 200) {
        newsContainer.innerHTML = responseData;
      } else {
        /*todo do something when error*/
      }
    });
  }
}

export const news = new News();
