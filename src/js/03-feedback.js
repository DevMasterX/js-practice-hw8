import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData_key = 'feedback-form-state';

// Восстановление данных из localStorage с обработкой ошибок
// let formData = JSON.parse(localStorage.getItem(formData_key)) || {};
let formData;

try {
  const data = localStorage.getItem(formData_key);
  formData = data ? JSON.parse(data) : {};
} catch (error) {
  console.error('Ошибка при разборе данных из localStorage:', error);
  formData = {};
}

// Восстанавливаем значения в полях формы
populateFormFields();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

// Функция: обработка ввода данных и сохранение в localStorage
function onFormInput(e) {
  const { name, value } = e.target;

  if (name) {
    formData[name] = value.trim();
    localStorage.setItem(formData_key, JSON.stringify(formData));
  }
}

// Функция: обработка отправки формы
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

// Функция: заполнение полей формы из formData
function populateFormFields() {
  if (!formData || typeof formData !== 'object') {
    return;
  }

  const entries = Object.entries(formData);

  entries.forEach(([key, value]) => {
    const input = form.elements[key];

    if (input) {
      input.value = value;
    }
  });
}
