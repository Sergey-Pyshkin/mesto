let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');
let namePopup = document.querySelectorAll('.popup__input')[0];
let jobPopup = document.querySelectorAll('.popup__input')[1];
let form = document.querySelector('.popup__form');

function OpenPopup() {
  if (popup.classList.contains('popup_opened') === false) {
    namePopup.value = nameProfile.textContent;
    jobPopup.value = jobProfile.textContent;
    popup.classList.add('popup_opened');
  }
  else {
    popup.classList.remove('popup_opened')
  }
}

form.addEventListener('submit',
  function (event) {
      event.preventDefault();
      nameProfile.textContent = namePopup.value;
      jobProfile.textContent = jobPopup.value;
      OpenPopup()
  }
);

openPopupButton.addEventListener('click', OpenPopup);
closePopupButton.addEventListener('click', OpenPopup);
