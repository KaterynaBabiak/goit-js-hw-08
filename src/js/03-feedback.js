
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(event => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500));


window.addEventListener('load', () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = state.email || '';
  messageInput.value = state.message || '';
});


form.addEventListener('submit', event => {
  event.preventDefault();


  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);


  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});