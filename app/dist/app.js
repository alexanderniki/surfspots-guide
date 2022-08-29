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

    buildList() {
        let spots = data.spots;
        let list = document.createElement("ul");

        for (let i = 0; i < spots.length; i++) {
            // create list
            if (spots[i].is_active == true) {
                let item = document.createElement("li");
                let link = document.createElement("a");
                let linkText = document.createTextNode(spots[i].name);
                link.setAttribute("href", spots[i].page_link);

                link.appendChild(linkText);
                item.appendChild(link);
                list.appendChild(item);
            }
        }
        console.log(list);
        return list;
    }

    render() {
        this.appendChild(this.buildList());
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

    // TODO: можно сделать через два параметра: currentPage и previousPage
    try {
        let prevPage = sessionStorage.getItem("prevPage");
    }
    catch (err) {
        return "index.html";
    }

    return prevPage;
}

function navigateToPage(page) {
    window.location.href = page;
}

function adjustBackButton() {
    let backButton = document.getElementById("button--back");
    backButton.onclick = window.history.back();
    /*
    if (window.history.length === 1) {
        // Direct link
        console.log("DIRECT LINK");
        backButton.onclick = navigateToPage("index.html");
    }
    else if (window.history.length != 1 && sessionStorage.getItem('prevPage') == null){
        backButton.onclick = navigateToPage("index.html");
        //backButton.onclick = window.history.back();
        console.log("FROM SITE");
        alert("FROM SITE");
    }
    else {
        backButton.onclick = window.history.back();
    }
    console.log("BACK"); */
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


function getHistoryLength() {
    // For debug purpose only
    console.log("HISTORY: " + window.history.length);
    return window.history.length;
}


/* 
 * Utils for pages
 */

/*
 * Labels in the header at a spot page
 */
function getSpotLabels(instanceState) {
    let spots = data.spots;
    let currentSpot = '';
    for (let i = 0; i < spots.length; i++) {
        // debug prints
        /* console.log("---");
        console.log("i: " + ": " + i);
        console.log("spots length: " + spots.length);*/
        // end debug prints

        if (spots[i].code == instanceState.spotcode) {
            currentSpot = spots[i];
        }
        else {
            // do nothing
            console.log("The spot not found");
        }
    }

    let output = document.getElementById("labels");
    try {
        let items = currentSpot.metadata.labels;
        for (let i = 0; i < items.length; i++) {
            label = document.createElement('span');
            label.innerHTML = items[i];
            // label.classList.add('uix-label--simple');
            label.className += "uix-label--simple";
            label.className += " body-2";
            label.className += " typography-uppercase";
            output.appendChild(label);
        }
    }
    catch(error) {
        // console.log(error);
        console.log("no labels");
    }
}
function main() {
    getCurrentTheme();
    setPreviousPage("index.html");
}