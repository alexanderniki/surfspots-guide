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