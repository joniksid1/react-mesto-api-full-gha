const apiOptions = {
  url: 'https://api.mixer0000.nomoredomainsmonster.ru',
  headers: {
    "Content-Type": "application/json",
  },
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorSelector: '.popup__input-error_type_',
  inputErrorFrameClass: 'popup__input_error-frame',
};

const formValidators = {}

export { apiOptions, validationConfig, formValidators };
