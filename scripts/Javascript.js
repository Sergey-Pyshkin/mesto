const openEditPopupButton = document.querySelector('.profile__edit-button');
const closeEditPopupButton = document.getElementById('edit__close-button');
const openAddPopupButton = document.querySelector('.profile__add');
const closeAddPopupButton = document.getElementById('add__close-button');
const Editpopup = document.querySelector('.popup_edit');
const Addpopup = document.querySelector('.popup_add');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const namePopup = document.querySelector('#editName');
const jobPopup = document.querySelector('#editJob');
const editForm = document.querySelector('#edit-form');
const addForm = document.querySelector('#add-form');
const namePlace = document.querySelector('#addName');
const placeImg = document.querySelector('#addLink');
const caseElement = document.querySelector('.places');
const cardTemplate = document.querySelector('#card-template').content;

namePopup.value = nameProfile.textContent;
jobPopup.value = jobProfile.textContent;

const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachayevsk.png'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Gora-elbrus.png'
  },
  {
    name: 'Домбаи',
    link: './images/dombai.png'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/Gora-elbrus.png'
  },
  {
    name: 'Домбаи',
    link: './images/dombai.png'
  },
  {
    name: 'Карачаевск',
    link: './images/karachayevsk.png'
  },
];

const deleteCard = (event) => {
  event.target.closest('.places__figure').remove();
};

const addLike = (event) => {
  event.target.classList.toggle('places__like_active');
};

const popupOpenImage = document.querySelector('.popup_image');
const popupOpenImageCloseButton = document.getElementById('image-close-button');
const popupImage = popupOpenImage.querySelector('.popup__place');
const popupName = popupOpenImage.querySelector('.popup__title-image');

const popupBigPic = (data) =>{
  popupImage.src = data.link;
  popupName.textContent = data.name;
  popupImage.alt = data.name;
  openPopup(popupOpenImage);
};


const addCard = (data) => {
  const cardElement = cardTemplate.querySelector('.places__figure').cloneNode(true);
  cardElement.querySelector('.places__name').textContent = data.name;
  cardElement.querySelector('.places__image').src = data.link;
  cardElement.querySelector('.places__image').alt = data.name;
  cardElement.querySelector('.places__delete').addEventListener('click', deleteCard);
  cardElement.querySelector('.places__like').addEventListener('click', addLike);
  cardElement.querySelector('.places__image').addEventListener('click', () => popupBigPic(data));

  caseElement.prepend(cardElement);
};

initialCards.forEach((data) =>{
  addCard(data);
});

const cardsFormHandler = (event) => {
  event.preventDefault();
  addCard({
    name: namePlace.value,
    link: placeImg.value,
  });
  addForm.reset();
  closePopup(Addpopup)
};

function openPopup(popup){
	popup.classList.add('popup_opened');
};

function closePopup(popup){
	popup.classList.remove('popup_opened');
};

editForm.addEventListener('submit',
  function (event) {
    event.preventDefault();
    nameProfile.textContent = namePopup.value;
    jobProfile.textContent = jobPopup.value;
    closePopup(Editpopup)
  }
);


openEditPopupButton.addEventListener('click', () => openPopup(Editpopup));
closeEditPopupButton.addEventListener('click', () => closePopup(Editpopup));

openAddPopupButton.addEventListener('click', () => openPopup(Addpopup));
closeAddPopupButton.addEventListener('click', () => closePopup(Addpopup));

addForm.addEventListener('submit', cardsFormHandler);

popupOpenImageCloseButton.addEventListener('click', () => closePopup(popupOpenImage));

window.addEventListener('load', () => {
  document.querySelectorAll('.popup').forEach((popup) => popup.classList.add('popup_transition'))
})
