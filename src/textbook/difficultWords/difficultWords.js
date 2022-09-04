/* eslint-disable no-unused-vars */

const buttonLogIn = document.querySelector('#buttonLogIn');
const buttonLogOut = document.querySelector('#buttonLogOut');
const unauthorizedDifficultWords = document.querySelector('#unauthorizedDifficultWords');
const difficultWords = document.querySelector('#difficultWords');
console.log(unauthorizedDifficultWords);
console.log(difficultWords);

const person = JSON.parse(localStorage.getItem('person'));

function toggleLogInButton() {
  if (person) {
    buttonLogIn.style.display = 'none';
    buttonLogOut.style.display = 'block';
    buttonLogOut.innerHTML = person.name;
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