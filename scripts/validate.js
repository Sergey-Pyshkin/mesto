function enableValidation(Config) {
  const forms = [...document.querySelectorAll(Config.formSelector)];
  forms.forEach((form) => setFormListeners(form, Config));
};

function setFormListeners(form, config) {
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', () => setSubmitButtonState (form, config));

  const inputs = [...form.querySelectorAll(config.inputSelector)]
  inputs.forEach(input => {
    input.addEventListener('input', () => handleFieldValidation(input, form, config))
  });
  setSubmitButtonState(form, config);
};


function setSubmitButtonState (form, config){
  const button = form.querySelector(config.submitButtonSelector);
  if (form.checkValidity()){
    button.disabled = false;
    button.classList.toggle(config.inactiveButtonClass, false);
  } else {
    button.disabled = true;
    button.classList.toggle(config.inactiveButtonClass, true);
}
};

function resetError(form, config){
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  inputs.forEach((input) => hideError(input, form, config));
};

function handleSubmit(event) {
  event.preventDefault();
}

function handleFieldValidation(input, form, config) {
  if (!input.validity.valid){
    showError(input, form, config);
  } else {
    hideError(input, form, config);
  }
};

function showError(input, form, config){
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
  input.classList.add(config.errorClass);
};


function hideError(input, form, config){
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  input.classList.remove(config.errorClass);
};



