const apiOptions = {
  url: 'https://api.mixer0000.nomoredomainsmonster.ru',
  // url: 'http://localhost:3000', - поменять на него для локального запуска с бэкэндом на 3000 порте
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

const registerValidationConfig = {
  formSelector: '.register__form',
  inputSelector: '.register__input',
  submitButtonSelector: '.register__button',
  inputErrorSelector: '.register__input-error_type_',
  inputErrorFrameClass: 'register__input_error-frame',
};

const formValidators = {}

export { apiOptions, validationConfig, formValidators, registerValidationConfig };
