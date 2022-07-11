/* 
 * uix-labels.js
 * Labels components
 */


class UixLabel extends HTMLElement {
    
    constructor() {
        super();
        let shadow = elementRef.attachShadow(
            {
                mode: 'open'
            }
        );
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let label = document.createElement("span");
        label.className += " uix-label--simple";
        label.className += " body-2";
        label.className += " typography-uppercase";
        this.appendChild(label);

        console.log(this.innerHTML);
    }
}


customElements.define("uix-label", UixLabel);