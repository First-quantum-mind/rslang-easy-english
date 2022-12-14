/* eslint-disable no-unused-vars */

const buttonLogIn = document.querySelector('#buttonLogIn');
const buttonLogOut = document.querySelector('#buttonLogOut');
const unauthorizedDifficultWords = document.querySelector('#unauthorizedDifficultWords');
const difficultWords = document.querySelector('#difficultWords');
const footer = document.querySelector('#footer');

const person = JSON.parse(localStorage.getItem('person'));

function toggleLogInButton() {
  if (person) {
    buttonLogIn.style.display = 'none';
    buttonLogOut.style.display = 'block';
    buttonLogOut.innerHTML = person.name;
    footer.style.display = 'block';
  } else {
    buttonLogOut.style.display = 'none';
    buttonLogIn.style.display = 'block';
    unauthorizedDifficultWords.style.display = 'block';
    difficultWords.style.display = 'none';
  }
}

toggleLogInButton();

buttonLogOut.addEventListener('click', () => {
  localStorage.clear();
});

const url = new URL(`${window.location.origin}/authorization/authorization.html`);
const queryString = new URLSearchParams(window.location.search);
queryString.set('returnUrl', `${window.location.toString()}`);
url.search = queryString;
buttonLogIn.href = url.href;
