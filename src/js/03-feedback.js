import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const MEMORY_KEY = 'feedback-form-state';
const THROTTLE = 500;

getDataFromStorage();

form.addEventListener('input', throttle(formInput, THROTTLE));
form.addEventListener('submit', formSubmit);

function formInput(e) {
  //const form = form.elements;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const saveData = { email, message };
  localStorage.setItem(MEMORY_KEY, JSON.stringify(saveData));
}

function formSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(MEMORY_KEY)));

  e.currentTarget.reset();
  localStorage.removeItem(MEMORY_KEY);
}

function getDataFromStorage() {
  const savedData = JSON.parse(localStorage.getItem(MEMORY_KEY));

  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
}
