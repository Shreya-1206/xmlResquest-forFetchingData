// Import stylesheets
import './style.css';

const joke = document.querySelector('#joke');
const refreshBtn = document.querySelector('#refreshBtn');
const uri = 'https://icanhazdadjoke.com/';

const xhr = new XMLHttpRequest(); ///created our xhr obj
xhr.addEventListener('load', function () {
  joke.innerHTML = `<h1>${this.responseText}</h1>`;
});

refreshBtn.addEventListener('click', function () {
  xhr.open('GET', uri); //we have configured our xhr obj
  xhr.setRequestHeader('Accept', 'text/plain'); //seting the accept header after the opening of xhr
  xhr.send();
});
