import '../css/style.css'
import { selectOffer, continueToLink } from './offerSelection.js';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';
import es from '../locales/es.json';
import ja from '../locales/ja.json';
import pt from '../locales/pt.json';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yearly').addEventListener('click', () => selectOffer('yearly'));
    document.getElementById('weekly').addEventListener('click', () => selectOffer('weekly'));
    document.querySelector('.button_wrapper').addEventListener('click', continueToLink);
});


const locales = {
  en,
  fr,
  de,
  es,
  ja,
  pt,
};

function getSystemLanguage() {
  return navigator.language || navigator.userLanguage;
}

function getLanguageFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang');
}

function replacePlaceholders(text, values) {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => values[key] || match);
}

function loadLocaleStrings(language) {
  const defaultLanguage = 'en';
  const supportedLanguages = ['en', 'fr', 'de', 'es', 'ja', 'pt'];
  
  if (!supportedLanguages.includes(language)) {
    language = defaultLanguage;
  }
  
  const strings = locales[language];
  
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const price = element.getAttribute('data-price');
    
    let text = strings[key] || key;
    if (price) {
      text = replacePlaceholders(text, { price });
    }

    element.innerHTML = text;
  });
}

function init() {
  let language = getLanguageFromURL();
  
  if (!language) {
    language = getSystemLanguage().substring(0, 2);
  }
  
  loadLocaleStrings(language);
}

document.addEventListener('DOMContentLoaded', init);





// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
