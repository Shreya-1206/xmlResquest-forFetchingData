// Import stylesheets
import './style.css';

const app = document.querySelector('#app');
const uri = 'https://icanhazdadjoke.com/';

const xhr = new XMLHttpRequest(); ///created our xhr obj
xhr.addEventListener('load', function () {
  app.innerHTML = `<h1>${this.responseText}</h1>`;
});

xhr.open('GET', uri); //we have configured our xhr obj
xhr.setRequestHeader('Accept', 'text/plain'); //seting the accept header after the opening of xhr
xhr.send();
