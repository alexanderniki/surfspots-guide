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