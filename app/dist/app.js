/* 
 * footer.js 
 */

class Footer extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="uix-layout--hbox--wrapped"  id="footer--container--main">
                <span>
                    Контакты:
                    <ul>
                        <li>Telegram/WhatsApp: @alexanderniki</li>
                        <li>Instagram: @alexanderniki</li>
                        <li>inbox@alexanderniki.name</li>
                    </ul>
                </span>
                <!--<span>
                    Проект:
                    <ul>
                        <li><a href="">О проекте</a></li>
                        <li><a href="">Помочь проекту</a></li>
                    </ul>
                </span>-->
            </div>
            <span>Made with ❤ in Russia</span>
        `;
    }
}

customElements.define("component-footer", Footer);
/*
 * spotlist.js
 */


class Spotlist extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `
        <ul>
            <li><a href="spot-atlantis.html">Атлантис</a></li>
            <li><a href="spot-osinovets.html">Осиновец</a></li>
            <li><a href="spot-lighthouse.html">Маяк</a></li>
            <li><a href="spot-bigsands.html">Большие пески</a></li>
            <li><a href="spot-motor.html">Бухта Моторная</a></li>
            <li><a href="spot-battery.html">Батарейная бухта</a></li>
            <!--<li>Мыс Флотский</li>
            <li>Спот "Парковка"</li>
            <li>Липово</li>
            <li><a href="">Бухта Желтая</a></li>-->
        </ul>
        `
    }

}

customElements.define("spotlist-component", Spotlist);
/*
 * utils.js
 * Various useful functions and classed
 */

class AppInstanceState {
    locale = "";
    city = "";
    theme = "";
    prevPage = "";
    
    constructor() {}

    get locale() {
        // get locale from sessionStorage
    }

    get city() {
        // get city from sessionStorage
    }

    get theme() {
        // get theme from sessionStorage
    }

    get prevPage() {

    }

    set locale(locale) {
        sessionStorage.setItem('locale', 'ru_RU');
    }

    set city(city) {
        sessionStorage.setItem('city', 'Санкт-Петербург');
    }

    set theme(themeStyle) {
        sessionStorage.setItem('theme', themeStyle);
    }

    set prevPage(pageLink) {
        sessionStorage.setItem('prevPage', prevPage);
    }
}

let appInstanceState = {
    locale: "",
    city: "",
    theme: "",
    prevPage: "",
};

function setLocale(locale) {
    sessionStorage.setItem('locale', 'ru_RU');
    appInstanceState.locale = 'ru_RU';
}

function setCity(city) {
    sessionStorage.setItem('city', 'Санкт-Петербург');
    appInstanceState.city = 'Санкт-Петербург';
}

function setPreviousPage(pageLink) {
    console.log("setPreviousPage()");
    sessionStorage.setItem('prevPage', pageLink);
    appInstanceState.prevPage = pageLink;
}

function getPreviousPage() {
    try {
        let prevPage = sessionStorage.getItem(prevPage);
        appInstanceState.prevPage = prevPage;
    }
    catch (err) {
        console.log(err);
        return "index.html";
    }

    return prevPage;
}

function adjustBackButton() {

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
function main() {
    getCurrentTheme();
    setPreviousPage("index.html");
}