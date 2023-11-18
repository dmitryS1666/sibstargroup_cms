import { formPOST, validatorEmail } from '../utils';

class FormEmailUs {
  /**
   * @type {HTMLElement}
   */
  loader;
  /**
   * @type {HTMLElement}
   */
  error;
  init() {
    const form = document.querySelector('#form-email-us');
    if (!form) return;

    form.onsubmit = (e) => {
      e.preventDefault();
      this.submit(form);
    };

    const popupOpen = document.querySelector(
      '.popup-open[href="#popup-email-us"]'
    );

    popupOpen.addEventListener('click', () => {
      const popup = document.querySelector(popupOpen.getAttribute('href'));
      popup.querySelector('.form_hide')?.classList.remove('form_hide');
      popup
        .querySelector('.form-success_show')
        ?.classList.remove('form-success_show');
    });
  }

  /**
   *
   * @param form {HTMLFormElement}
   */
  submit(form) {
    const formData = new FormData(form);

    /*Проверка на валидность данных в форме*/
    if (!this.isValid(form, formData)) {
      return;
    }

    /*Если валидация успешна, то скрываем все сообщения об ошибках*/
    form.querySelectorAll('.form__field').forEach((el) => {
      el.classList.remove('form__field_invalid');
    });

    form.querySelectorAll('.form__error').forEach((el) => {
      el.classList.remove('form__error_show');
    });

    const url = '/feedbacks?' + new URLSearchParams(formData).toString();

    form.classList.add('form_hide');
    this.addLoader(form);
    this.error?.remove();

    formPOST(url, (status, response) => {
      if (status === 200 || status === 302) {
        this.loader.remove();
        form.reset();
        form
          .closest('.popup')
          .querySelector('.form-success')
          ?.classList.add('form-success_show');
      } else {
        this.loader.remove();
        form.classList.remove('form_hide');
        this.error = document.createElement('div');
        this.error.classList.add('form__error_main');
        const locale = document.body.dataset.locale;
        switch (locale) {
          case 'en':
            this.error.textContent = 'Error: ' + status;
            break;
          case 'zh':
            this.error.textContent = '错误: ' + status;
            break;
          default:
            this.error.textContent = 'Ошибка: ' + status;
            break;
        }
        const submit = form.querySelector('.form__submit');
        form.insertBefore(this.error, submit);
      }
    });
  }

  /**
   *
   * @param form {HTMLFormElement}
   * @param formData {FormData}
   * @return {boolean}
   */
  isValid(form, formData) {
    let formInvalid = false;
    form.querySelectorAll('.form__input, .form__textarea').forEach((el) => {
      const name = el.getAttribute('name');
      const formField = el.closest('.form__field');
      if (!formData.get(name)) {
        formField.classList.add('form__field_invalid');
        formField
          .querySelector('.form__error[data-type="required"]')
          .classList.add('form__error_show');
        formInvalid = true;
      }
      if (name === 'email' && !validatorEmail(formData.get(name))) {
        formField.classList.add('form__field_invalid');
        formField
          .querySelector('.form__error[data-type="email"]')
          .classList.add('form__error_show');
        formInvalid = true;
      }
    });

    return !formInvalid;
  }

  /**
   *
   * @param form {HTMLElement}
   */
  addLoader(form) {
    this.loader = document.createElement('div');
    this.loader.classList.add('form__loader');
    form.closest('.popup__container').append(this.loader);
  }
}

export const formEmailUs = new FormEmailUs();
