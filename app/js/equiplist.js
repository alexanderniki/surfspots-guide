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