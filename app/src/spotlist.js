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

        /*this.innerHTML = `
        <ul>
            <li><a href="spot-atlantis.html">Атлантис</a></li>
            <li><a href="spot-battery.html">Батарейная бухта</a></li>
            <li><a href="spot-bigsands.html">Большие пески</a></li>
            <li><a href="spot-osinovets.html">Осиновец</a></li>
            <li><a href="spot-lighthouse.html">Маяк</a></li>
            <li><a href="spot-motor.html">Бухта Моторная</a></li>
            <li><a href="spot-riverking.html">Порог в Кингисеппе</a></li>
            <!--<li>Мыс Флотский</li>
            <li>Спот "Парковка"</li>
            <li>Липово</li>
            <li><a href="">Бухта Желтая</a></li>-->
        </ul>
        `*/
        
        this.appendChild(this.buildList());
    }

}

customElements.define("spotlist-component", Spotlist);