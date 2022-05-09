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
        <section class="main-footer caption">
            <p>КОНТАКТЫ:</p>
            <ul>
                <li>Telegram/Whatsapp: @alexanderniki</li>
                <li>Instagram: <a href="https://instagram.com/alexanderniki">@alexanderniki</a></li>
            </ul>
            <p><button onclick="toggleTheme()">Тема: день/ночь</button>
        </section>
        `;
    }
}

customElements.define("footer-component", Footer);
/* 
 * equiplist.js
 */


class Equiplist extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <ul>
            <li><a href="equip-board.html">Доска</a></li>
            <li><a href="equip-apparel.html">Одежда</a></li>
            <li><a href="equip-accessories.html">Аксесуары</a></li>
        </ul>
        `
    }
}

customElements.define("equiplist-component", Equiplist);
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



/* Toggle CSS style using sessionStorage to store current theme */
function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'style/theme-light.css') {
        theme.setAttribute('href', 'style/theme-dark.css');
        sessionStorage.setItem('theme', "style/theme-dark.css");
    } else {
        theme.setAttribute('href', 'style/theme-light.css');
        sessionStorage.setItem('theme', "style/theme-light.css");
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
        theme = 'style/theme-light.css';
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