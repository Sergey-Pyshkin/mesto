let OpenPopupButton = document.querySelector('.profile__edit-button');
let ClosePopupButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let namePopup = document.querySelectorAll('.popup__input')[0];
let jobPopup = document.querySelectorAll('.popup__input')[1];
let form = document.querySelector('.popup__form');
let submitButton = document.querySelector('popup__submit');

function togglePopup() {
  if (!popup.classList.contains('popup_opened')) {
    namePopup.value = nameProfile.textContent;
    jobPopup.value = jobProfile.textContent;
  }
  popup.classList.toggle('popup_opened');
}

OpenPopupButton.addEventListener('click', togglePopup);
ClosePopupButton.addEventListener('click', togglePopup);

form.addEventListener('submit',
  function (event) {
      event.preventDefault();
      nameProfile.textContent = namePopup.value;
      jobProfile.textContent = jobPopup.value;
      popup.classList.toggle('popup_opened');
  }
);
