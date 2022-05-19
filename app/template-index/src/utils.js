/*
 * utils.js
 * Various useful functions and classed
 */

function setLocale(locale) {
    sessionStorage.setItem('locale', 'ru_RU');
}

function setCity(city) {
    sessionStorage.setItem('city', 'Санкт-Петербург');
}


/* Toggle CSS style using sessionStorage to store current theme */
function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'dist/theme-light.css') {
        theme.setAttribute('href', 'dist/theme-dark.css');
        sessionStorage.setItem('theme', "dist/theme-dark.css");
    } else {
        theme.setAttribute('href', 'dist/theme-light.css');
        sessionStorage.setItem('theme', "dist/theme-light.css");
    }
}

function setTheme(value) {
  
    // Obtain the name of stylesheet 
    // as a parameter and set it 
    // using href attribute.
    // https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/

    var sheets = document.getElementsByTagName('link');
    sheets[0].href = value;
}

function getCurrentTheme() {

    // Initialize current theme
    // @TODO: rename the function

    var theme = sessionStorage.getItem('theme');
    if (theme != null) {
        setTheme(theme);
    }
    else {
        theme = 'dist/theme-light.css';
        sessionStorage.setItem('theme', theme);
        setTheme(theme);
    }
    
}


function setBrowserDecodation() {
    
    // set Chrome toolbar color
}


function copyToClipboard(element) {
    let copyText = document.getElementById(element);
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(copyText.innerText).then(() => alert("Координаты скопированы"));
      } else {
        console.log("Clipboard is not supported");
      }
}