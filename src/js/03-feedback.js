import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData_key = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(formData_key)) || {};

populateFormFields();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const { name, value } = e.target;

  if (name) {
    formData[name] = value.trim();
    localStorage.setItem(formData_key, JSON.stringify(formData));
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Пожалуйста, заполните все поля формы.');
    return;
  }

  console.log('formdata:', formData);

  e.currentTarget.reset();
  localStorage.removeItem(formData_key);

  // Очистка объекта
  // Object.keys(formData).forEach(key => delete formData[key]);
  formData = {};
}

function populateFormFields() {
  const entries = Object.entries(formData);

  entries.forEach(([key, value]) => {
    const input = form.elements[key];

    if (input) {
      input.value = value;
    }
  });
}
