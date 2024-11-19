const form = document.querySelector('.feedback-form');

const formData_key = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(formData_key)) || {};

populateFormFields();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const emailName = 'email';
  const messageName = 'message';
  if (e.target.name === emailName) {
    formData[emailName] = e.target.value;
    localStorage.setItem(formData_key, JSON.stringify(formData));
  } else if (e.target.name === messageName) {
    formData[messageName] = e.target.value;
    localStorage.setItem(formData_key, JSON.stringify(formData));
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(formData_key);
}

function populateFormFields() {
  if (formData) {
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}
