import Choices from 'choices.js';
import { formPOST, validatorEmail } from '../utils';

class FormOrder {
  /**
   * @type {HTMLFormElement}
   */
  form;
  /**
   * @type {NodeListOf<HTMLElement>}
   */
  steps;
  /**
   * @type {number}
   */
  stepsLength;
  /**
   *
   * @type {number}
   */
  currentStep;
  /**
   * @type {HTMLElement}
   */
  nextButton;
  /**
   * @type {HTMLElement}
   */
  prevButton;
  /**
   * @type {HTMLElement}
   */
  submitButton;
  /**
   * @type Object.<string, Choices>
   */
  choices = {};
  /**
   * @type {NodeListOf<HTMLElement>}
   */
  destinationStations;
  /**
   * @type {HTMLElement}
   */
  loader;
  /**
   * @type {HTMLElement}
   */
  error;
  /**
   * @type {HTMLInputElement}
   */
  countInput;
  init() {
    this.form = document.querySelector('#form-order');
    if (!this.form) {
      return;
    }

    this.submitButton = this.form.querySelector('.form-step__submit');
    this.countInput = this.form.querySelector('#order__count');
    this.destinationStations = this.form.querySelectorAll(
      '.order__destination-station'
    );

    this.selectInit();
    this.stepsInit();
    this.nextInit();
    this.prevInit();
    this.destinationStationInit();
    this.stepsReset();
    this.countInit();

    const popupOpen = document.querySelector(
      '.popup-open[href="#popup-order"]'
    );

    popupOpen.addEventListener('click', () => {
      const popup = document.querySelector(popupOpen.getAttribute('href'));
      popup.querySelector('.form_hide')?.classList.remove('form_hide');
      popup
        .querySelector('.form-success_show')
        ?.classList.remove('form-success_show');
      this.stepsReset();
    });

    this.form.onsubmit = (e) => {
      e.preventDefault();
      this.submit();
    };
  }

  selectInit() {
    this.form.querySelectorAll('.form__select').forEach((el) => {
      this.choices[el.getAttribute('id')] = new Choices(el, {
        searchEnabled: false,
        shouldSort: false,
        position: 'bottom',
      });
    });
  }

  stepsInit() {
    this.steps = this.form.querySelectorAll('.form-step__item');
    this.stepsLength = this.steps.length;
    this.steps.forEach(() => {
      const item = document.createElement('div');
      item.classList.add('form-step-navigation__item');
      this.form.querySelector('.form-step-navigation').append(item);
    });
  }

  stepsReset() {
    this.stepClearActive();
    this.prevButton.setAttribute('disabled', 'disabled');
    this.nextButton.classList.remove('form-step__next_hide');
    this.submitButton.classList.remove('form-step__submit_show');
    this.currentStep = 0;
    this.choices['order__delivery-direction'].setChoiceByValue('China');
    this.destinationStations.item(0).classList.remove('form__field_hide');
    this.destinationStations.item(1).classList.add('form__field_hide');
    this.stepSet();
  }

  stepClearActive() {
    this.form
      .querySelector('.form-step-navigation__item_active')
      ?.classList.remove('form-step-navigation__item_active');
    this.form
      .querySelector('.form-step__item_active')
      ?.classList.remove('form-step__item_active');
  }

  stepSet() {
    this.form
      .querySelectorAll('.form-step-navigation__item')
      .item(this.currentStep)
      .classList.add('form-step-navigation__item_active');
    this.form
      .querySelectorAll('.form-step__item')
      .item(this.currentStep)
      ?.classList.add('form-step__item_active');
  }

  nextInit() {
    this.nextButton = this.form.querySelector('.form-step__next');
    this.nextButton.onclick = (e) => {
      e.preventDefault();

      this.form.querySelectorAll('.form__field').forEach((el) => {
        el.classList.remove('form__field_invalid');
      });

      this.form.querySelectorAll('.form__error').forEach((el) => {
        el.classList.remove('form__error_show');
      });

      if (this.currentStep === 1 && !this.isValidStep2()) {
        return;
      }

      if (this.currentStep !== this.stepsLength - 1) {
        this.currentStep++;
        this.stepClearActive();
        this.stepSet();

        this.prevButton.removeAttribute('disabled');

        if (this.currentStep === this.stepsLength - 1) {
          this.nextButton.classList.add('form-step__next_hide');
          this.submitButton.classList.add('form-step__submit_show');
        }
      }
    };
  }

  prevInit() {
    this.prevButton = this.form.querySelector('.form-step__prev');
    this.prevButton.onclick = (e) => {
      e.preventDefault();
      if (this.currentStep !== 0) {
        this.currentStep--;
        this.stepClearActive();
        this.stepSet();

        this.nextButton.classList.remove('form-step__next_hide');
        this.submitButton.classList.remove('form-step__submit_show');

        if (this.currentStep === 0) {
          this.prevButton.setAttribute('disabled', 'disabled');
        }
      }
    };
  }

  destinationStationInit() {
    this.choices[
      'order__delivery-direction'
    ].passedElement.element.addEventListener('change', (change) => {
      if (change.detail.value === 'China') {
        this.destinationStations.item(0).classList.remove('form__field_hide');
        this.destinationStations.item(1).classList.add('form__field_hide');
      }
      if (change.detail.value === 'Turkey') {
        this.destinationStations.item(0).classList.add('form__field_hide');
        this.destinationStations.item(1).classList.remove('form__field_hide');
      }
    });
  }

  submit() {
    const formData = new FormData(this.form);

    if (!this.isValid(formData)) {
      return;
    }

    /*Если валидация успешна, то скрываем все сообщения об ошибках*/
    this.form.querySelectorAll('.form__field').forEach((el) => {
      el.classList.remove('form__field_invalid');
    });

    this.form.querySelectorAll('.form__error').forEach((el) => {
      el.classList.remove('form__error_show');
    });

    const url =
      '//sibstar-forms-mailer.dsml.ru/api/v1/order?' +
      new URLSearchParams(formData).toString();

    this.form.classList.add('form_hide');
    this.addLoader(this.form);
    this.error?.remove();

    formPOST(url, (status, response) => {
      if (status === 200) {
        this.loader.remove();
        this.form.reset();
        this.form
          .closest('.popup')
          .querySelector('.form-success')
          ?.classList.add('form-success_show');
      } else {
        this.loader.remove();
        this.form.classList.remove('form_hide');
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
        const submit = this.form.querySelector('.form__submit');
        this.form.insertBefore(this.error, submit);
      }
    });
  }

  /**
   * @param formData {FormData}
   * @return {boolean}
   */
  isValid(formData) {
    let formValid = true;
    if (!this.isValidStep2()) {
      formValid = false;
    }
    const requiredFields = ['email', 'price', 'phone'];
    this.form
      .querySelectorAll('.form__input, .form__textarea')
      .forEach((el) => {
        const name = el.getAttribute('name');
        const formField = el.closest('.form__field');

        if (requiredFields.includes(name) && !formData.get(name)) {
          formField.classList.add('form__field_invalid');
          formField
            .querySelector('.form__error[data-type="required"]')
            .classList.add('form__error_show');
          formValid = false;
        }

        if (name === 'email' && !validatorEmail(formData.get(name))) {
          formField.classList.add('form__field_invalid');
          formField
            .querySelector('.form__error[data-type="email"]')
            .classList.add('form__error_show');
          formValid = false;
        }
      });

    return formValid;
  }

  /**
   *
   * @return {boolean}
   */
  isValidStep2() {
    let formValid = true;
    const formData = new FormData(this.form);
    const requiredFields = ['count'];
    if (formData.get('formData') === 'China') {
      requiredFields.push('destination_station_turkey');
    } else {
      requiredFields.push('destination_station_china');
    }

    this.form
      .querySelectorAll('.form__input, .form__textarea')
      .forEach((el) => {
        const name = el.getAttribute('name');
        const formField = el.closest('.form__field');

        if (requiredFields.includes(name) && !formData.get(name)) {
          formField.classList.add('form__field_invalid');
          formField
            .querySelector('.form__error[data-type="required"]')
            .classList.add('form__error_show');
          formValid = false;
        }

        if (
          name === 'count' &&
          this.countIsInvalid(parseInt(formData.get(name).toString()))
        ) {
          formField.classList.add('form__field_invalid');
          formField
            .querySelector('.form__error[data-type="not-valid"]')
            ?.classList.add('form__error_show');
          formValid = false;
        }
      });

    return formValid;
  }

  addLoader() {
    this.loader = document.createElement('div');
    this.loader.classList.add('form__loader');
    this.form.closest('.popup__container').append(this.loader);
  }

  step2Init() {}

  countInit() {
    let timeout;
    this.countInput.addEventListener('keyup', () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const value = parseInt(this.countInput.value);
        this.countSetValidValue(value);
      }, 300);
    });
  }

  /**
   *
   * @param value {number}
   */
  countIsInvalid(value) {
    return value % 70 !== 0;
  }

  /**
   *
   * @param value {number}
   */
  countSetValidValue(value) {
    if (this.countIsInvalid(value)) {
      this.countInput.value = (Math.ceil(value / 70) * 70).toString(10);
    }
  }
}

export const formOrder = new FormOrder();
