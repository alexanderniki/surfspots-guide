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
                        <li>Instagram: <a href="https://instagram.com/alexanderniki">@alexanderniki</a></li>
                        <li><a href="mailto:inbox@alexanderniki.name">inbox@alexanderniki.name</a></li>
                    </ul>
                </span>
                <span>
                    Информация:
                    <ul>
                        <li><a href="about.html">О проекте</a></li>
                        <li><a href="contribute.html">Помочь проекту</a></li>
                        <li><a href="https://t.me/surflbot">Телеграм-бот @surflbot</a></li>
                    </ul>
                </span>
            </div>
            <span>Made with ❤ in Russia</span>
        `;
    }
}

customElements.define("component-footer", Footer);
/*
 * listitem.js
 * UIListItem
 */


class UIListItem extends HTMLElement {
    
    constructor() {
        super();

        this._primaryText = "";
        this._secondaryText = "";
        this._overline = ""
    }

    _getAttributes() {
        this.primaryText = this.hasAttribute("primary-text") ? this.getAttribute("primary-text"): "";
        this.secondaryText = this.hasAttribute("secondary-text") ? this.getAttribute("secondary-text"): "";
        this.overline = this.hasAttribute("overline") ? this.getAttribute("overline"): "";
    }

    get primaryText() {
        return this._primaryText;
    }

    get secondaryText() {
        return this._secondaryText;
    }

    get overline() {
        return this._overline;
    }

    set primaryText(str) {
        if (str) {
            this._primaryText = str;
        }
        else {
            // do nothing
        }
    }

    set secondaryText(str) {
        if (str) {
            this._secondaryText = str;
        }
        else {
            // do nothing
        }
    }

    set overline(str) {
        if (str) {
            this._overline = str;
        }
        else {
            // do nothing
        }
    }

    render() {
        this.innerHTML = `
            <li class="ui-list--item">
                <div class="ui-list--item--overline caption">${this.overline}</div>
                <div class="ui-list--item--primary-text">${this.primaryText}</div>
            </li>
        `;
    }

    connectedCallback() {
        this._getAttributes();
        console.log("UIListItem connected");
        this.render();
    }
}

customElements.define("ui-list--item", UIListItem);
/*
 * spotlist.js
 */


class Spotlist extends HTMLElement {


    constructor() {
        super();

        if (app.city) {
            this.data = new DataProvider().fromCity(app.city);
        }
        else {
            app.city = "spb";
            this.data = new DataProvider().fromCity(app.city);
        }
    }


    connectedCallback() {
        this.render();
    }


    buildList() {
        let spots = this.data.spots();
        let list = document.createElement("ul");

        for (let i = 0; i < spots.length; i++) {
            // create list
            if (spots[i].is_active == true) {
                let item = document.createElement("li");
                let link = document.createElement("a");
                let linkText = document.createTextNode(spots[i].name);
                let strLink = "spot.html#" + spots[i].code;
                link.setAttribute("href", "spot.html#" + spots[i].code);
                link.addEventListener("click", function() {
                    updatePage(strLink);
                });

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
 * spottabbar.js
 */


class UISpotTabbar extends HTMLElement{
    
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <nav class="uix-tabview--tabbar" id="spot-tabbar">
                <button class="uix-tabview--tablink active" id="uix-tabview--default" onclick="openTab(event, 'tab-spot-overview')">Обзор</button>
                <button class="uix-tabview--tablink" onclick="openTab(event, 'tab-spot-location')">Транспорт</button>
                <button class="uix-tabview--tablink" onclick="openTab(event, 'tab-spot-other')">Другое</button>
                <button class="uix-tabview--tablink" onclick="openTab(event, 'tab-spot-here')">Здесь есть</button>
            </nav>
        `;
    }

    connectedCallback() {
        this.render();
    }
    
}

customElements.define("ui-tabbar-spot", UISpotTabbar);
/*
 * label.js
 * UILabel
 */


class UILabelSimple extends HTMLElement {

    constructor() {
        super();
        this._text = "";
    }

    get text() {
        return this._text;
    }

    set text(str) {
        if (str) {
            this._text = str;
        }
        else {
            console.log("UILabelSimple: ", "No text given");
        }
    }

    render() {
        
    }
}

customElements.define("ui-label--simple", UILabelSimple);
/*
 * card.js
 * Generic card component
 */


class UICard extends HTMLElement {
    
    constructor() {
        super();

        this._primaryText = "";
        this._secondaryText = "";
    }

    get primaryText() {
        return this._primaryText;
    }

    get secondaryText() {
        return this._secondaryText;
    }

    set primaryText(str) {
        if (str) {
            this._primaryText = str;
        }
        else {
            // do nothing
        }
    }

    set secondaryText(str) {
        if (str) {
            this._secondaryText = str;
        }
        else {
            // do nothing
        }
    }

    render() {
        // do nothing
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("ui-card", UICard);
/*
 * cardsimple.js
 * UICardSimple
 * 
 * Attributes
 * 
 * <ui-card--simple 
 *     primary-text="Primary text"
 *     secondary-text="Secondary text"
 *     overline="Overline"
 *     open-url="https://www.example.com"
 * ></ui-card--simple>
 */


class UICardSimple extends UICard {
    
    constructor() {
        super();

        this._overline = "";
        this._openURL = "";
        this._openNewPage = false;

    }

    getAttributes() {
        this.primaryText = this.hasAttribute("primary-text") ? this.getAttribute("primary-text"): "";
        this.secondaryText = this.hasAttribute("secondary-text") ? this.getAttribute("secondary-text"): "";
        this.overline = this.hasAttribute("overline") ? this.getAttribute("overline"): "";
        this.openURL = this.hasAttribute("open-url") ? this.getAttribute("open-url"): "";
        this.openNewPage = this.hasAttribute("open-url-newpage") ? this.getAttribute("open-url-newpage"): false;
    }

    get overline() {
        return this._overline;
    }

    get openURL() {
        return this._openURL;
    }

    get openNewPage() {
        return this._openNewPage;
    }

    set overline(str) {
        if (str) {
            this._overline = str;
        }
        else {
            // do nothing
        }
    }

    set openURL(str) {
        if (str) {
            this._openURL = str;
        }
        else {
            // do nothing
        }
    }

    set openNewPage(value) {
        if (value) {
            this._openNewPage = value;
        }
        else {
            // do nothing
        }
    }

    render() {
        this.innerHTML = `
        <div class="ui-card--simple">
            <div class="uix-layout--vbox-compact ui-card--simple--data bottom">
                <span class="caption typography-uppercase">${this.overline}</span>
                <span class="caption-accent">${this.primaryText}</span>
                <span class="body-1">${this.secondaryText}</span>
            </div>
        </div>
        `;
        if (this.openURL && this.openURL != "") {
            this.addEventListener("click", function() {
                if (this.openNewPage == true) {
                    window.open(this.openURL);
                }
                else if (this.openNewPage == false){
                    window.location.href = this.openURL;
                }
                else {
                    // do nothing
                }
            });
            this.style.cursor = "pointer";
    
        }

    }

    connectedCallback() {
        this.getAttributes();
        this.render();
    }
}

customElements.define("ui-card--simple", UICardSimple);
/*
 * communicationcard.js
 * UICardCommunication
 */


class UICardCommunication extends UICard {

    constructor() {
        super();

        this._type = "";
        this._channelType = "";
        this._link = "";
        this._linkText = "";
    }

    get type() {
        return this._type;
    }

    get channelType() {
        return this._channelType;
    }

    get link() {
        return this._link;
    }

    get linkText() {
        return this._linkText;
    }

    set type(str) {
        if (str) {
            this._type = str;
        }
        else {
            //do nothing
        }
    }

    set channelType(str) {
        if (str) {
            this._channelType = str;
        }
        else {
            // do nothing
        }
    }

    set link(str) {
        if (str) {
            this._link = str;
        }
        else {
            //do nothing
        }
    }

    set linkText(str) {
        if (str) {
            this._linkText = str;
        }
        else {
            this.linkText = "Ссылка";
        }
    }

    render() {
        this.innerHTML = `
            <div class="ui-card--communication">
                <span class="caption typography-uppercase">${this.type} • ${this.channelType}</span>
                <span class="caption-accent">${this.primaryText}</span>
                <span class="body-1"><a href="${this.link}">${this.linkText}</a></span>
                <span class="body-1">${this.secondaryText}</span>
            </div>
        `;
    }

    connectedCallback() {
        this.render();
    }
}


customElements.define("ui-card--communication", UICardCommunication);
/**
 * application.js
 */


class SurflApp {

    constructor() {

        this.CONFIG = data.config;

        this._vesion = "0.0.0";
        this._revision = 0;
        this._dataRevision = 0;

        this._getDataFromConfig();

        this._theme = "";
        this._country = "";
        this.city = "";  // City code

        return this;

    }

    /**
     * 
     * @returns string App version
     */
    get version() {
        return this._vesion;
    }

    /**
     * 
     * @returns number App revision
     */
    get revision() {
        return this._revision;
    }

    /**
     * 
     * @returns number Data version
     */
    get dataRevision() {
        return this._dataRevision;
    }

    get theme() {
        this._theme = sessionStorage.getItem('theme');
        return this._theme;
    }

    get country() {
        this._country = sessionStorage.getItem('country');
        return this._country;
    }

    get city() {
        this._city = sessionStorage.getItem('city');
        return this._city;
    }

     /**
     * @param {string} ver - current version
     */
    set version(ver) {
        if (ver) {
            this._vesion = ver;
        }
        else {
            // do nothing
        }
    }

    /**
     * @param {number} rev - revision value
     */
    set revision(rev) {
        if (rev) {
            this._revision = rev;
        }
        else {
            // do nothing
        }
    }

     /**
     * @param {number} datarev - data revision value
     */
    set dataRevision(datarev) {
        if (datarev) {
            this._dataRevision = datarev;
        }
        else {
            // do nothing
        }
    }

    set theme(theme) {
        if (theme) {
            this._theme = theme;
            sessionStorage.setItem('theme', this._theme);
        }
        else {
            // do nothing
        }
    }

    set country(country) {
        if (country) {
            this._country = country;
            sessionStorage.setItem('country', this._country);
        }
        else {
            // do nothing
        }
    }

    set city(city) {
        if (city) {
            this._city = city;
            sessionStorage.setItem('city', this._city);
        }
        else {
            // do nothing
        }
    }


    _getDataFromConfig() {
        this.version = this.CONFIG.app_ver;
        this.revision = this.CONFIG.app_revision;
        this.dataRevision = this.CONFIG.data_revision;
    }

    toggleTheme() {
        // Obtains an array of all <link> elements.
        // Select your element using indexing.
        var theme = document.getElementsByTagName('link')[0];

        // Change the value of href attribute 
        // to change the css sheet.
        if (theme.getAttribute('href') == 'app/theme-light.css') {
            theme.setAttribute('href', 'app/theme-dark.css');
            sessionStorage.setItem('theme', "app/theme-dark.css");
        } else {
            theme.setAttribute('href', 'app/theme-light.css');
            sessionStorage.setItem('theme', "app/theme-light.css");
        }
    }

    setTheme(value) {
  
        // Obtain the name of stylesheet 
        // as a parameter and set it 
        // using href attribute.
        // https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/
    
        var sheets = document.getElementsByTagName('link');
        sheets[0].href = value;
    }

    getCurrentTheme() {

        // Initialize current theme
        // @TODO: rename the function
    
        var theme = sessionStorage.getItem('theme');
        if (theme != null) {
            setTheme(theme);
        }
        else {
            theme = 'app/theme-light.css';
            sessionStorage.setItem('theme', theme);
            setTheme(theme);
        }
    }

    /**
     * 
     * @param {string} uielementid - Where to put data
     * @returns this Instance of SurflApp
     */
    showAppVersion(uielementid) {
        let uicontainer = document.getElementById(uielementid);
        uicontainer.innerText = this.version;
        return this;
    }

    /**
     * 
     * @param {string} uielementid - Where to put data
     * @returns this Instance of SurflApp
     */
    showAppRevision(uielementid) {
        let uicontainer = document.getElementById(uielementid);
        uicontainer.innerText = this.revision;
        return this;
    }

    /**
     * 
     * @param {string} uielementid - Where to put data
     * @returns this Instance of SurflApp
     */
    showDataRevision(uielementid) {
        let uicontainer = document.getElementById(uielementid);
        uicontainer.innerText = this.dataRevision;
        return this;
    }

    /**
     * 
     * @param {string} uielementid - Where to put the notification
     * @returns void
     */
    showInlineNotification(uielementid) {
        let uicontainer = document.getElementById(uielementid);

        let notifications = data.notifications[0];

        let notification = new UINotification();
        notification.overline = notifications.overline;
        notification.title = notifications.title;
        notification.text = notifications.text;
        notification.link = notifications.link
        let uinotification = new InlineNotificationView(notification);

        uicontainer.appendChild(uinotification);
    }
}
/**
 * dataprovider.js
 */


class DataProvider {

    constructor() {
        this.data = data;
        this.citycode = "";  // City code

        return this;
    }

    fromCity(citycode) {
        this.citycode = citycode;
        return this;
    }

    _getCityByCode(code) {
        let result = {};
        if (code) {
            let collection = this.data.cities;
            for (let item in collection) {
                if (collection[item].code == code) {
                    if(collection[item].is_active == true) {
                        result = collection[item];
                    }
                    else {
                        // do nothing
                    }
                }
                else {
                    // do nothing
                }
            }
        }
        else {
            // do nothing
        }
        return result;
    }

    spots() {
        let spots = this.data.spots;
        let result = [];

        let currentCity = this._getCityByCode(this.citycode);
        let citySpots = currentCity.spot_ids;  // Take orgs IDs

        for (let item in citySpots) {
            for (let spot in spots) {
                if (citySpots[item] == spots[spot].id) {
                    if (spots[spot].is_active == true) {
                        result.push(spots[spot]);
                    }
                    else {
                        // do nothing
                    }
                }
                else {
                    // do nothing
                }
            }
        }
        return result;
    }

    spots2() {
        let cities = this.data.cities;
        let spots = [];
        let cityName = "";
        console.log("DataProvider().cities: ", cities);
        
        for (let item in cities) {
            if (cities[item].code == this.citycode) {
                console.log("DataProvider.spots().citycode", cities[item].code);
                cityName = cities[item].name;
                console.log("DataProvider.spots().cityname", cities[item].name);
            }
            else {
                // do nothing
            }
        }

        for (let item in this.data.spots) {  // For every spot
            console.log("DataProvider().spots().items: ", this.data.spots[item]);
            if (this.data.spots[item].is_active == true) {  // Take only active spots
                console.log("DataProvider().spots().active: ", this.data.spots[item]);
                console.log("DataProvider().spots().city: ", this.data.spots[item].metadata.location.city, cityName);
                if (this.data.spots[item].metadata.location.city === cityName) {
                    console.log("DataProvider().spots().spot: ", this.data.spots[item]);
                    spots.push(this.data.spots[item]);
                }
                else {
                    // do nothing
                }
            }
        }
        console.log("DataProvider().spots(): ", spots);
        return spots;
    }

    popularSpots() {
        let spotsData = this.spots();
        let spots = [];
        for (let item in spotsData) {  // For every spot
            if (spotsData[item].is_active == true) {  // Take only active spots
                if (spotsData[item].is_popular == true) {
                    spots.push(spotsData[item]);
                }
                else {
                    // do nothing
                }
            }
        }
        //console.log("POPULAR SPOTS: ", spots);
        return spots;
    }

    orgs() {
        let orgs = this.data.orgs;
        let result = [];

        let currentCity = this._getCityByCode(this.citycode);

        let cityOrgs = currentCity.org_ids;  // Take orgs IDs
        for (let item in cityOrgs) {
            for (let org in orgs) {
                if (cityOrgs[item] == orgs[org].id) {
                    let currentOrg = orgs[org];
                    if (currentOrg.is_active == true) {
                        result.push(currentOrg);
                    }
                    else {
                        // do nothing
                    }
                }
                else {
                    // do nothing
                }
            }
        }
        return result;
    }

    stores() {
        let stores = this.data.stores;
        let result = [];

        let currentCity = this._getCityByCode(this.citycode);
        let cityStores = currentCity.store_ids;

        for (let item in cityStores) {
            for (let store in stores) {
                if (cityStores[item] == stores[store].id) {
                    console.log("DataProvider.stores() :: stores[store]", stores[store]);
                    if (stores[store].is_active == true) {
                        result.push(stores[store]);
                    }
                    else {
                        // do nothing
                    }
                }
                else {
                    // do nothing
                }
            }
        }
        //console.log("DataProvider.stores() :: result", result);
        return result;
    }

    workshops() {
        let workshops = this.data.workshops;
        let result = [];

        let currentCity = this._getCityByCode(this.citycode);
        let cityWorkshops = currentCity.workshop_ids;

        for (let item in cityWorkshops) {
            for (let workshop in workshops) {
                if (cityWorkshops[item] == workshops[workshop].id) {
                    let currentWorkshop = workshops[workshop]
                    if (currentWorkshop.is_active == true) {
                        result.push(currentWorkshop);
                    }
                    else {
                        // do nothing
                    }
                }
                else {
                    // do nothing
                }
            }
        }
        //console.log("DataProvider.workshops() :: result", result);
        return result;
    }

    otherSpots () {

    }

    communications() {
        let communications = this.data.communications;
        let result = [];

        let currentCity = this._getCityByCode(this.citycode);
        let cityCommunications = currentCity.communication_ids;

        for (let item in cityCommunications) {
            for (let channel in communications) {
                if (cityCommunications[item] == communications[channel].id) {
                    if (communications[channel].is_active = true) {
                        result.push(communications[channel]);
                    }
                    else {
                        // do nothing
                    }
                }
                else {
                    // do nothing
                }
            }
        }

        console.log("DataProvider.communications() :: result", result);
        return result;
    }


}
/*
 * inlinenotification.js
 */


class UINotification {
    constructor() {
        this._title = "";     // Title, optional
        this._text = "";      // Text, optional
        this._overline = "";  // Overline, optional
        this._link = "";      // Link, optional
        this._action = "";    // Callback, optional
    }

    get title() {
        return this._title;
    }

    get text() {
        return this._text;
    }

    get overline() {
        return this._overline;
    }

    get link() {
        return this._link;
    }

    get action() {
        this._action();
    }

    set title(text) {
        this._title = text;
        return this;
    }

    set text(text) {
        this._text = text;
        return this;
    }

    set overline(text) {
        this._overline = text;
        return this;
    }

    set link(text) {
        this._link = text;
        return this;
    }

    set action(callback) {
        this._action = callback;
    }
}


class InlineNotificationView extends HTMLElement {
    constructor(uinotification) {
        super();
        this.notification = uinotification;
        this.card = "";
    }

    connectedCallback() {
        //console.log("connectedCallback");
        this.render();
    }

    createDOM() {

        //console.log("createDOM");
        
        // Create elements
        this.card = document.createElement("div");
        let link = document.createElement("a");
        let container = document.createElement("div");
        let notificationOverline = document.createElement("span");
        let notificationTitle = document.createElement("span");
        let notificationText = document.createElement("span");
        let btnClose = document.createElement("a");

        // Style elements
        this.card.classList.add("uix-layout--hbox");
        this.card.setAttribute("id", "inline-notification-card")
        link.setAttribute("href", this.notification.link);
        container.classList.add("uix-layout--vbox-compact");

        notificationOverline.innerHTML = this.notification.overline;
        notificationTitle.classList.add("title");
        notificationTitle.innerHTML = this.notification.title;
        notificationText.innerHTML = this.notification.text;

        //btnClose.setAttribute("href", "#");
        btnClose.setAttribute("role", "button");
        btnClose.innerHTML = "✕";
        btnClose.style.cursor = "pointer";
        btnClose.setAttribute("onclick", "InlineNotificationView.hide()");

        // Pack elements
        container.appendChild(notificationOverline);
        container.appendChild(notificationTitle);
        container.appendChild(notificationText);

        link.appendChild(container);
        this.card.appendChild(link);
        this.card.appendChild(btnClose);

        this.appendChild(this.card);
    }

    static hide() {
        let notification = document.getElementById("inline-notification-card");
        let notificationContainer = document.getElementById("inline-notification");
        notification.style.display = "none";
        notificationContainer.style.display = "none";
    }

    render() {
        this.createDOM();
    }
}

customElements.define("inline-notification", InlineNotificationView);
function main() {
    getCurrentTheme();
    setPreviousPage("index.html");
    setDonationFlag();
}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleNavigation() {
    var x = document.getElementById("toolbar-topnav-menu");
    let appSurface = document.getElementById("app-content");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      appSurface.addEventListener("click", function() {
        x.style.display = "none"; // closing menu
      });
    }
  }

  /*function openTab(evt, tabID) {
    // Declare all variables
    var i, tabcontent, tablinks;


    console.log("mainnav.js::openTab()");
    let tabMenu = document.getElementById("toolbar-topnav-menu");
    console.log("TAB MENU: ", tabMenu);
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("uix-tabview--tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("uix-tabview--tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabID).style.display = "flex";
    evt.currentTarget.className += " active";
    
    // Close menu
    tabMenu.style.display = none;
}*/
class Page {
    
    constructor() {
        // do nothing

        this._title = "";
    }
}
/**
 * pagecommunication.js
 */


class CommunicationPage extends Page {

    constructor() {
        super();

        if (app.city) {
            this.data = new DataProvider().fromCity(app.city);
        }
        else {
            app.city = "spb";
            this.data = new DataProvider().fromCity(app.city);
        }
    }

    сommunications() {
        //let collection = data.communications;
        let collection = this.data.communications();
        console.log("PageCommunication.communications :: data", this.data);
        console.log("PageCommunication.communications :: collection", collection);
        let uicontainer = document.getElementById("collection-communication");
    
        for (let item in collection) {
            if (collection[item].is_active == true) {
    
                let uicard = new UICardCommunication();
    
                uicard.type = collection[item].metadata.type;
                uicard.channelType = collection[item].metadata.channel_type;
                uicard.primaryText = collection[item].name;
                uicard.secondaryText = collection[item].metadata.summary;
                uicard.link = collection[item].metadata.link;
                uicard.linkText = collection[item].metadata.link_text;
    
                uicontainer.appendChild(uicard);
            }
        }
    }

    breadcrumbs() {
        let uicontainer = document.getElementById("place-breadcrumbs");

        let city = this.data._getCityByCode(app.city).name;
        console.log("COMMUNICATION BREADCRUMBS: ", city);

        //let strBreadcrumbs = `<a class="uix-link--header" href="index.html">${city}</a>`;
        let strBreadcrumbs = `<a class="uix-link--header" href="index.html">SURFL</a>`;
        uicontainer.innerHTML = strBreadcrumbs;

    }
}
/*
 * index.js
 * Index PageObject 
 */


class IndexPage extends Page {
    constructor() {
        super();

        this.uicontainerstores = document.getElementById("collection-stores");    // Stores
        this.uicontainerorgs = document.getElementById("collection-orgs");        // Orgs
        this.uicontainerspots = document.getElementById("collection-spots");      // Spots
        this.uicontainerpopularspots = document.getElementById("spots-popular");  // Popular spots
        
        if (app.city) {
            this.data = new DataProvider().fromCity(app.city);
        }
        else {
            app.city = "spb";
            this.data = new DataProvider().fromCity(app.city);
        }
        
    }

    /* 
     * Group surf spots
     */
    _groupSpotsByWater(){

        let waterTypes = data.water_types;
        // let spots = data.spots;
        let spots = this.data.spots();
        let groups = [];
        console.log("WATER TYPES:", waterTypes);
        console.log("SPOTS TO GROUP:", spots);
    
        // For every water type
        for(let water in waterTypes) {
            console.log("water.id: ", waterTypes[water].id);
            let spotGroup = {};
            spotGroup.name = waterTypes[water].water;
            spotGroup.spots = [];
            // For every spot
            for (let spot in spots) {
                // Take only active spots
                if(spots[spot].is_active == true) {
                    // If ids are the same
                    if (waterTypes[water].id == spots[spot].metadata.location.water.water_type_id) {
                        let currentSpot = {}
                        currentSpot.water = spots[spot].metadata.location.water.name;
                        currentSpot.name = spots[spot].name;
                        //currentSpot.link = spots[spot].page_link;
                        currentSpot.link = spots[spot].code;
                        if (spots[spot].metadata.location.water.water_type_id == 2) {
                            currentSpot.description = spots[spot].metadata.location.water.description;
                        }
                        spotGroup.spots.push(currentSpot);
                    }
                }
            }
            if (spotGroup.spots.length > 0) {
                groups.push(spotGroup);
            }
            else {
                // do nothing
            }
            console.log("GROUPS", groups);
        }
        return groups;
    }

    _groupSpotsByLocation() {
        
    }

    /* 
     * Get and display stores, shops
     */
    stores() {
        //let collection = data.stores;
        let collection = this.data.stores();
        let uicontainer = document.getElementById("collection-stores");
    
        for (let item in collection) {
            if (collection[item].is_active == true) {
    
                let uicard = new UICardSimple();
    
                uicard.overline = collection[item].metadata.type;
                uicard.primaryText = collection[item].name;
                uicard.secondaryText = collection[item].metadata.summary;
                uicard.openURL = collection[item].metadata.homepage;
                uicard.openNewPage = true;
    
                uicontainer.appendChild(uicard);
            }
        }
    }

    /* 
     * Get and display Schools, Rents and Instructors
     */
    orgs2() {
        let collection = data.orgs;
        let uicontainer = document.getElementById("collection-orgs");
    
        for (let item in collection) {
            if (collection[item].is_active == true) {
    
                let uicard = new UICardSimple();
    
                uicard.overline = collection[item].metadata.type;
                uicard.primaryText = collection[item].name;
                uicard.secondaryText = collection[item].metadata.summary;
                uicard.openURL = collection[item].metadata.homepage;
    
                uicontainer.appendChild(uicard);
            }
        }
    }

    orgs() {
        let collection = this.data.orgs();
        let uicontainer = document.getElementById("collection-orgs");
        console.log("ORGS: ", collection);

        for (let item in collection) {
            let uicard = new UICardSimple();
    
            uicard.overline = collection[item].metadata.type;
            uicard.primaryText = collection[item].name;
            uicard.secondaryText = collection[item].metadata.summary;
            uicard.openURL = collection[item].metadata.homepage;

            uicontainer.appendChild(uicard);
        }
    }

    spots() {
        let collection = this._groupSpotsByWater(); //groupSpots();
        let uicontainer = document.getElementById("collection-spots");
    
        for (let item in collection) {
    
            let container = document.createElement("div");
            container.classList.add("uix-layout--grid--wrapped");
            
            let title = document.createElement("span");
            title.classList.add("title");
            title.innerText = collection[item].name;
            uicontainer.appendChild(title);
    
            for (let spot in collection[item].spots) {
                let uicard = new UICardSimple();
                uicard.primaryText = collection[item].spots[spot].name;
                if (collection[item].spots[spot].description) {
                    uicard.secondaryText = collection[item].spots[spot].description;
                }
                uicard.openURL = "spot.html#" + collection[item].spots[spot].link;
                container.appendChild(uicard);
            }
        uicontainer.appendChild(container);
        }
    }

    popularSpots() {
        // let collection = this.data.spots;
        let collection = this.data.spots();
        console.log("POPULAR SPOTS: ", collection);
        let uicontainer = document.getElementById("spots-popular");
    
        for (let item in collection) {
            if (collection[item].is_popular == true) {
    
                let uicard = new UICardSimple();
                
                uicard.primaryText = collection[item].name;
                uicard.secondaryText = collection[item].metadata.location.water.name;
                //uicard.openURL = collection[item].page_link;
                uicard.openURL = "spot.html#" + collection[item].code;
    
                uicontainer.appendChild(uicard);
            }
        }
    }

    cityForecast() {
        let forecast = new SpotForecast();
        forecast.getWorkingSpots();
    }


    workshops() {
        let collection = this.data.workshops();
        let uicontainer = document.getElementById("collection-workshops");

        for (let item in collection) {
            if (collection[item].is_active == true) {

                let uicard = new UICardSimple();

                uicard.overline = collection[item].metadata.type;
                uicard.primaryText = collection[item].name;
                uicard.secondaryText = collection[item].metadata.summary;
                uicard.openURL = collection[item].metadata.homepage;

                uicontainer.appendChild(uicard);
            }
        }
    }

    cityList() {

        // Useful info: https://alvarotrigo.com/blog/javascript-select-option/

        let self = this; // Must have for setting custom function in the callback
        this.uicontainercitylist = document.getElementById("list-cities");
        if (app.city) {
            this.uicontainercitylist.value = app.city;
        }
        else {
            // do nothing
        }
        this.uicontainercitylist.addEventListener("change", function() {
            self.onCitySelected();
        });
    }

    onCitySelected() {
        //let itemSelected = this.uicontainercitylist.options[this.uicontainercitylist.selectedIndex].value;  
        //console.log("SELECTED", itemSelected);
        app.city = this.uicontainercitylist.value;
        window.location.reload();
    }

    сommunications() {
        //let collection = data.communications;
        let collection = this.data.communications();
        console.log("PageCommunication.communications :: data", this.data);
        console.log("PageCommunication.communications :: collection", collection);
        let uicontainer = document.getElementById("collection-communication");
    
        for (let item in collection) {
            if (collection[item].is_active == true) {
    
                let uicard = new UICardCommunication();
    
                uicard.type = collection[item].metadata.type;
                uicard.channelType = collection[item].metadata.channel_type;
                uicard.primaryText = collection[item].name;
                uicard.secondaryText = collection[item].metadata.summary;
                uicard.link = collection[item].metadata.link;
                uicard.linkText = collection[item].metadata.link_text;
    
                uicontainer.appendChild(uicard);
            }
        }
    }

    openTab(evt, tabID) {
        // Declare all variables
        var i, tabcontent, tablinks;
    
        let tabMenu = document.getElementById("toolbar-topnav-menu");
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("uix-tabview--tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("uix-tabview--tablink");
        console.log("NAVLINCS COUNT: ", tablinks.length);
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabID).style.display = "flex";
        evt.currentTarget.className += " active";
        
        // Close menu
        tabMenu.style.display = "none";
    }
}
/*
 * pagespot.js 
 */


class SpotPage extends Page {
    constructor() {
        super();

        if (app.city) {
            this.data = new DataProvider().fromCity(app.city);
        }
        else {
            app.city = "spb";
            this.data = new DataProvider().fromCity(app.city);
        }
        
        this._spotcode = "";
        this._parseurl()
        this._data = data.spots;
        this._currentSpot = {};
        this._getCurrentSpot();
        
        return this;
    }

    get spotCode() {
        return this._spotcode;
    }

    get currentSpot() {
        return this._currentSpot;
    }

    get data() {
        return this._data;
    }

    set spotCode(code) {
        if (code) {
            this._spotcode = code;
        }
        else {
            // do nothing
        }
    }

    set currentSpot(spot) {
        if (spot) {
            this._currentSpot = spot;
        }
        else {
            // do nothig
        }
    }

    set data(data) {
        if (data) {
            this._data = data;
        }
        else {
            // do nothing
        }
    }


    _parseurl() {
        let currentURL = window.location.href;
        let suffix = currentURL.split("#");
        if (suffix.length == 1) {  // If there is no #spotcode in URL
            window.location.href = "index.html";  // Go to index page
        }
        else {
            let pageCode = suffix[suffix.length - 1];  // Take spotcode
            instanceState.spotcode = pageCode;
            this.spotCode = pageCode;
        }
        
    }

    _getCurrentSpot() {
        for (let item in this.data) {                     // For every spot
            if (this.data[item].code == this.spotCode) {  // Checking spotcode
                if (this.data[item].is_active == true) {  // Take only active spots
                    this.currentSpot = this.data[item];
                    break;
                }
                else {
                    // do nothing
                }
            }
            else {
                // do nothing
            }
        }
    }

    /**
     * 
     * @param {dict} instanceState - instanceState
     * @returns this Instanse of SpotPage
     */
    fromcode(instanceState) {
        this.spotCode = instanceState.spotcode;
        return this;
    }

    header() {
        let uicontainer = document.getElementById("place-title");

        try {
            let item = this.currentSpot.name;
            uicontainer.innerHTML = item;
        }
        catch(error) {
            console.log(error);
        }
    }

    labels() {
        let uicontainer = document.getElementById("collection-labels");

        try {
            let items = this.currentSpot.metadata.labels;
            for (let i in items) {
    
                let label = document.createElement('ui-label');
                label.setAttribute("ui-text", items[i]);
                uicontainer.appendChild(label);
    
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    infrastructureLabels() {
        let uicontainer = document.getElementById("collection-labels");
        let uilistcontainer = document.createElement("ul");

        let collection = this.currentSpot.metadata.labels;
        for (let item in collection) {
            let uiitem = document.createElement("li");
            uiitem.innerText = collection[item];
            uilistcontainer.appendChild(uiitem);
        }

        uicontainer.appendChild(uilistcontainer);
    }

    summary() {
    
        let uicontainer = document.getElementById("place-summary");
        try {
            let item = this.currentSpot.summary;
            uicontainer.innerHTML = item;
        }
        catch(error) {
            console.log(error);
        }
    }


    async weather() {
        let weatherProvider = new WeatherProvider(this.spotCode);
        let result = await weatherProvider.fetchWeather();
    
        let time = result.daily.time;
        let winddirection = result.daily.winddirection_10m_dominant;
        let windspeed = result.daily.windspeed_10m_max;
        let mintemp = result.daily.temperature_2m_min;
        let maxtemp = result.daily.temperature_2m_max;
    
        // Container
        let weatherForecast = document.getElementById("weather-data");
    
        for (let i = 0; i < time.length; i++) {
            // Prepare data
            let parcedDate = Date.parse(time[i]);  // Unix time
            let newDate = new Date(parcedDate);
            let weekday = DateUtils.weekday(newDate.getDay());
            let strdate = `${weekday}, ${newDate.getDate()}`;
            let strwind = `${Math.round(windspeed[i])} м/с • ${Math.round(winddirection[i])}° • ${WeatherUtils.windDirection(winddirection[i])}`;
            let strtemperarure = `${WeatherUtils.temperatureSign(WeatherUtils.avgTemp(mintemp[i], maxtemp[i]))} ${Math.round(WeatherUtils.avgTemp(mintemp[i], maxtemp[i]))} °C`;
    
            // Card
            let forecastCard = document.createElement("div");
            forecastCard.classList.add("uix-layout--vbox-compact");
            forecastCard.classList.add("uix-card--weather--day");
    
            // Items
            let dateElement = document.createElement("span");
            dateElement.innerHTML = strdate;
    
            let windElement = document.createElement("span");
            windElement.classList.add("body-2");
            windElement.innerHTML = strwind;
    
            let temperatureElement = document.createElement("span");
            temperatureElement.innerHTML = strtemperarure;
            
            // Layout
            forecastCard.appendChild(dateElement);
            forecastCard.appendChild(windElement);
            forecastCard.appendChild(temperatureElement);
            weatherForecast.appendChild(forecastCard);
        }
    }

    orgs() {
        let orgs = data.orgs;
        let uicontainer = document.getElementById("collection-orgs");

        let orgsArr = this.currentSpot.metadata.orgs_ids;
        for (let item in orgsArr) {
            let itemID = orgsArr[item];
            for (let org in orgs) {
                let currentOrg = orgs[org];
                if (currentOrg.id == itemID) {
                    console.log("MATCH: ", currentOrg.name);

                    let uicard = new UICardSimple();
                    uicard.overline = currentOrg.metadata.type;
                    uicard.primaryText = currentOrg.name;
                    uicard.secondaryText = currentOrg.metadata.summary;

                    uicontainer.appendChild(uicard);
                }
            }
        }
    }

    specification() {
        let uicontainer = document.getElementById("collection-specification");

        let spec = this.currentSpot.metadata.specification;
        for (let prop in spec) {
            let uilistitem = new UIListItem();
            uilistitem.primaryText = spec[prop].value;
            uilistitem.overline = spec[prop].name;

            uicontainer.appendChild(uilistitem);
        }
    }

    rules() {
        let uicontainer = document.getElementById("collection-rules");

        let rules = this.currentSpot.metadata.rules;
        for (let rule in rules) {
            let uiitem = document.createElement("p");
            uiitem.innerText = rules[rule];
            uicontainer.appendChild(uiitem);
        }
    }

    transport() {
        let uicontainer = document.getElementById("collection-transport");
        let uilistcontainer = document.createElement("ul");

        let transport = this.currentSpot.metadata.transport;
        for (let item in transport) {
            let uiitem = document.createElement("li");
            uiitem.innerText = transport[item];
            uilistcontainer.appendChild(uiitem);
        }

        uicontainer.appendChild(uilistcontainer);
    }

    description() {
        let uicontainer = document.getElementById("collection-description");

        let description = this.currentSpot.metadata.description;
        for (let item in description) {
            let uiitem = document.createElement("p");
            uiitem.innerText = description[item];
            uicontainer.appendChild(uiitem);
        }
    }

    webcamLinks() {
        let uicontainer = document.getElementById("collection-webcams");
        let uilistcontainer = document.createElement("ul");

        let webcams = this.currentSpot.metadata.webcam_links;
        for (let cam in webcams) {
            let uiitem = document.createElement("li");
            let webcamLink = document.createElement("a");
            webcamLink.setAttribute("href", webcams[cam].link);
            webcamLink.innerText = webcams[cam].name;

            uiitem.appendChild(webcamLink);
            uilistcontainer.appendChild(uiitem);
        }
        uicontainer.appendChild(uilistcontainer);
    }

    forecastLinks() {
        let uicontainer = document.getElementById("collection-wind");
        let uilistcontainer = document.createElement("ul");

        let forecasts = this.currentSpot.metadata.forecast_links;
        for (let cast in forecasts) {
            let uiitem = document.createElement("li");
            let forecastLink = document.createElement("a");
            forecastLink.setAttribute("href", forecasts[cast].link);
            forecastLink.innerText = forecasts[cast].name;

            uiitem.appendChild(forecastLink);
            uilistcontainer.appendChild(uiitem);
        }

        uicontainer.appendChild(uilistcontainer);
    }

    location() {
        let uicontainer = document.getElementById("spot-location");
        uicontainer.innerText = this.currentSpot.metadata.location.coordinates;
    }

    mapCode() {
        let uicontainer = document.getElementById("spot-map");
        uicontainer.src = this.currentSpot.metadata.location.map_code;
    }

    extrainfo() {
        let uicontainer = document.getElementById("spot-extrainfo");

        let description = this.currentSpot.metadata.extras;
        for (let item in description) {
            let uiitem = document.createElement("p");
            uiitem.innerText = description[item];
            uicontainer.appendChild(uiitem);
        }
    }

    breadcrumbs() {
        let uicontainer = document.getElementById("place-breadcrumbs");

        let city = this.currentSpot.metadata.location.city;
        let water = this.currentSpot.metadata.location.water.name;

        //let strBreadcrumbs = `<a class="uix-link--header" href="index.html">${city}</a> › Споты › ${water}`;
        //let strBreadcrumbs = `<a class="uix-link--header" href="index.html">${city}</a> › ${water}`;
        let strBreadcrumbs = `<a class="uix-link--header" href="index.html">SURFL</a>&nbsp; ⏵  &nbsp;${water}`;
        uicontainer.innerHTML = strBreadcrumbs;

    }

    pros() {
        let uicontainer = document.getElementById("collection-pros");
        let uilistcontainer = document.createElement("ul");

        let pros = this.currentSpot.metadata.pros;
        for (let i in pros) {
            let uiitem = document.createElement("li");
            uiitem.innerText = pros[i];
            uilistcontainer.appendChild(uiitem);
        }
        
        uicontainer.appendChild(uilistcontainer);
    }

    cons() {
        let uicontainer = document.getElementById("collection-cons");
        let uilistcontainer = document.createElement("ul");

        let cons = this.currentSpot.metadata.cons;
        for (let i in cons) {
            let uiitem = document.createElement("li");
            uiitem.innerText = cons[i];
            uilistcontainer.appendChild(uiitem);
        }
        
        uicontainer.appendChild(uilistcontainer);
    }

    transportHowto() {
        let uicontainer = document.getElementById("collection-transport-howto");

        let howto = this.currentSpot.metadata.transport_howto;
        for (let item in howto) {
            let uiitem = document.createElement("p");
            uiitem.innerHTML = howto[item];
            uicontainer.appendChild(uiitem);
        }
    }

}
/*
 * spotforecast.js
 * Predict working spot by wind direction
 */


class SpotForecast {


    constructor() {
        this.days = [];

        this.weatherProvider = new WeatherProvider("ruspb");
        this.windspeedThreshold = 8;  // Windspeed 8 m/s (29 km/h)
        this.workingSpots = [];
    }


    async forecast() {
        let result = await this.weatherProvider.fetchWeather();

        let time = result.daily.time;
        let winddirection = result.daily.winddirection_10m_dominant;
        let windspeed = result.daily.windspeed_10m_max;
        let mintemp = result.daily.temperature_2m_min;
        let maxtemp = result.daily.temperature_2m_max;

        for (let i = 0; i < time.length; i++) {
            // Prepare data
            if (Math.round(windspeed[i]) > this.windspeedThreshold) {
                let parcedDate = Date.parse(time[i]);  // Unix time
                let newDate = new Date(parcedDate);
                let weekday = DateUtils.weekday(newDate.getDay());
                let strdate = `${weekday}, ${newDate.getDate()}. ${newDate.getMonth()}`;
                let strwind = `${Math.round(windspeed[i])} км/ч • ${Math.round(winddirection[i])}° • ${WeatherUtils.windDirection(winddirection[i])}`;
                let currentSpot = {}
                currentSpot["wind"] = strwind;
                currentSpot["date"] = strdate;
                currentSpot["wind_direction"] = WeatherUtils.windDirection(winddirection[i]);
                //this.workingSpots.push(currentSpot);                
            }
        }
    }


    async getWorkingSpots() {
        let spots = data.spots;
        let currentSpot = '';

        // For each spot
        for (let spot = 0; spot < spots.length; spot++) {
            currentSpot = spots[spot];

            // Take active spots
            if (currentSpot.is_active == true) {
                let weather = new WeatherProvider(currentSpot.code);
                let result = await weather.fetchWeather();
                
                let winddirection = result.daily.winddirection_10m_dominant;
                let windspeed = result.daily.windspeed_10m_max;
                let time = result.daily.time;
                
                // Check wind speed
                for (let wind = 0; wind < windspeed.length; wind++) {
                    if (Math.round(windspeed[wind]) > this.windspeedThreshold) {
                        // Check wind direction
                        let bestWind = currentSpot.metadata.wind_direction;
                        for (let direction = 0; direction < bestWind.length; direction++) {
                            if (bestWind[direction] == WeatherUtils.windDirection(winddirection[wind])) {
                                let parcedDate = Date.parse(time[wind]);  // Unix time
                                let newDate = new Date(parcedDate);
                                let weekday = DateUtils.weekday(newDate.getDay());
                                let strdate = `${weekday}, ${newDate.getDate()}.${newDate.getMonth()}`;

                                let workingSpot = {};
                                workingSpot.originalDate = Date.parse(time[wind]);
                                workingSpot.strdate = strdate;
                                workingSpot.name = currentSpot.name;
                                workingSpot.windspeed = windspeed[wind];
                                workingSpot.winddirection = bestWind[direction];
                                this.workingSpots.push(workingSpot);
                            }
                        }
                    }
                }
            }
        }
        console.log("WORKING SPOTS: ", this.workingSpots);
        this.prepareForecast();
    }


    async getDays() {
        let result = await this.weatherProvider.fetchWeather();

        console.log(result.daily.time);
        for (let i = 0; i < result.daily.time.length; i++) {
            this.days.push(result.daily.time[i]);
        }
        //console.log("DAYS: ", result.daily.time.length, this.days);
    }

    groupBy(array, key) {
        // Return the end result
        return array.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            );
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    }

    prepareForecast() {
        
        let spots = this.workingSpots;

        spots.sort((a, b) => {
            let da = new Date(a.originalDate),
                db = new Date(b.originalDate);
            return da - db;
        });

        let groupedSpots = this.groupBy(spots, 'strdate');

        let UIForecastView = document.getElementById("spot-forecast");
        let forecastLoader = document.getElementById("forecast-loader");
        
        let spotlist = document.createElement("ul");
        spotlist.classList.add("uix-list");

        for (let group in groupedSpots) {
            let headerItem = groupedSpots[group];
            let uiheader = document.createElement("li");
            uiheader.classList.add("uix-list--group");
            uiheader.classList.add("typography-bold");
            let uispotcontainer = document.createElement("ul");
            uispotcontainer.classList.add("uix-list--item");
            uiheader.innerText = headerItem[0].strdate;
            spotlist.appendChild(uiheader);
            
            spotlist.appendChild(uiheader);
            for (let spot in headerItem) {
                let uispotitem = document.createElement("li");
                uispotitem.innerText = `${headerItem[spot].name}: ${Math.round(headerItem[spot].windspeed)} м/с, ${headerItem[spot].winddirection}`;
                uispotcontainer.appendChild(uispotitem);
                spotlist.appendChild(uispotcontainer);
            }
            /*let uidelimiter = document.createElement("hr");
            spotlist.appendChild(uidelimiter);*/
        }
        UIForecastView.appendChild(spotlist);

        UIForecastView.removeChild(forecastLoader);
    }
}

/*
 * uicardminimal.js
 */


class UICardMinimal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'
        
        this._overline = "";
        this._title = "";
        this._subtitle = "";

        return this;
    }

    connectedCallback() {
        this.render();
    }

    new(overline, title, subtitle) {
        this.overline = overline;
        this.title = title;
        this.subtitle = subtitle;

        return this;
    }

    get overline() {
        return this._overline;
    }

    get title() {
        return this._title;
    }

    get subtitle() {
        return this._subtitle;
    }

    set overline(text) {
        if (text) {
            this._overline = text;
            this.update();
        }
        else {
            // do nothig
        }
    }

    set title(text) {
        if (text) {
            this._title = text;
            this.update();
        }
        else {
            // do nothing
        }
    }

    set subtitle(text) {
        if (text) {
            this._subtitle = text;
            this.update();
        }
        else {
            // do nothing
        }
    }

    update() {
        // update
    }

    render() {
        let container = document.getElementById("spot-forecast");

        let uicard = document.createElement("div");
        uicard.classList.add("uix-card--spot--minimal");
        // uicard.classList.add("uix-card--link--overall");

        let cardContent = document.createElement("div");
        cardContent.classList.add("uix-layout--vbox");

        let cardOverline = document.createElement("span");
        cardOverline.innerText = this.overline;

        let cardTitle = document.createElement("span");
        cardTitle.classList.add("headline-6");
        cardTitle.classList.add("typography-bold");
        cardTitle.innerText = this.title;

        let cardSubtitle = document.createElement("span");
        cardSubtitle.classList.add("uix-card--secondary-text");
        cardContent.innerText = this.subtitle;

        // Pack elements
        cardContent.appendChild(cardOverline);
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardSubtitle);

        uicard.appendChild(cardContent);
        //container.appendChild(uicard);

        this.appendChild(uicard);
    }
}

customElements.define("uicard--minimal", UICardMinimal);
/* 
 * uix-labels.js
 * Labels components
 */


/* const UILabelTemplate = document.createElement("template");
UILabelTemplate.innerHTML = `
    <span class="
        uix-label--simple 
        body-2 
        typography-uppercase
        ">
        <slot name="uilabel--text"></slot>
    </span>
`;*/


class UILabel extends HTMLElement {
    

    constructor() {
        super();
        /*let shadow = this.attachShadow(
            {
                mode: 'open'
            }
        );
        shadow.appendChild(UILabelTemplate.content.cloneNode(true));*/
        return this;
    }


    connectedCallback() {
        this.text = this.getAttribute("ui-text");
        this.render();
    }


    get text() {
        return this._text;
    }


    set text(str) {
        if (str) {
            this._text = str;
            //this.render();
        }
        else {
            // do nothing
        }
    }


    render() {
        let label = document.createElement("span");
        label.className += " uix-label--simple";
        label.className += " body-2";
        label.className += " typography-uppercase";
        label.innerHTML = this.text;
        this.appendChild(label);

        //console.log(this.innerHTML);

        //this.innerHTML = this.text;
    }

    
}


customElements.define("ui-label", UILabel);
/*
 * tabview.js
 * TabView
 * Taken from: https://www.w3schools.com/howto/howto_js_tabs.asp
 */

function openTab(evt, tabID) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("uix-tabview--tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("uix-tabview--tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabID).style.display = "flex";
    evt.currentTarget.className += " active";
}
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

/* @DEPRECATED */
/* Toggle CSS style using sessionStorage to store current theme */
function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'app/theme-light.css') {
        theme.setAttribute('href', 'app/theme-dark.css');
        sessionStorage.setItem('theme', "app/theme-dark.css");
    } else {
        theme.setAttribute('href', 'app/theme-light.css');
        sessionStorage.setItem('theme', "app/theme-light.css");
    }
}

/* @DEPRECATED */
function setTheme(value) {
  
    // Obtain the name of stylesheet 
    // as a parameter and set it 
    // using href attribute.
    // https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/

    var sheets = document.getElementsByTagName('link');
    sheets[0].href = value;
}

/* @DEPRECATED */
function getCurrentTheme() {

    // Initialize current theme
    // @TODO: rename the function

    var theme = sessionStorage.getItem('theme');
    if (theme != null) {
        setTheme(theme);
    }
    else {
        theme = 'app/theme-light.css';
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


function getSessionFlag(flag) {
    /*
     * Check if given flag exists and if so, return it value (0 or 1)
     * flag: String
     */

    let value = sessionStorage.getItem(flag);
    return value;
}


function setSessioFlag(flag, value) {
    /*
     * Set a flag to 
     */

    if (value == 0 || value == 1) {
        sessionStorage.setItem(flag, value)
    } else {
        // do nothing
    }
}


function setDonationFlag() {
    setSessioFlag('DonationAlertViewed', 0);
}


function toggleDonationFlag() {
    let flag = getSessionFlag('DonationAlertViewed');
    if (flag == 0) {
        setSessioFlag('DonationAlertViewed', 1);  // Viewed
    }
}


function toggleDonationAlert() {
    let flag = getSessionFlag('DonationAlertViewed');
    let donationAlert = document.getElementById('donation-alert');
    if (flag == 0) {
        donationAlert.style.display = "none";  // hide alert
        toggleDonationFlag();
    }
}

/* @DEPRECATED
 * Use app.showInlineNotification(uielement) instead
 */
function displayNotification() {

    console.log("displayNotification");

    let notifications = data.notifications[0];
    console.log(notifications);

    let notification = new UINotification();
    console.log(notification);
    notification.overline = notifications.overline;
    notification.title = notifications.title;
    notification.text = notifications.text;
    notification.link = notifications.link
    console.log(notification);
    let uinotification = new InlineNotificationView(notification);
    console.log("uinotification:");
    console.log(uinotification);

    document.getElementById("inline-notification").appendChild(uinotification);
    //document.body.appendChild(uinotification);
}


function updatePage(link) {
    if (link) {
        //window.location.assign(link);
        window.location.href = link;
        window.location.reload();
        window.scrollTo(0,0);
    }
}

/*
 * weatherprovider.js
 * Work with weather. 
 */

class WeatherProvider {


    constructor(placecode) {

        this.placeCode = placecode;
        this.baseURL = "https://api.open-meteo.com/v1/forecast";
        this.params = {
            latitude: this.getPlaceGeo()[0],
            longitude: this.getPlaceGeo()[1],
            daily: "temperature_2m_max,temperature_2m_min,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant",
            windspeed_unit: "ms",
            timezone: "Europe/Moscow",
        }
        
        //this.fetchWeather();
    }


    buildRequest() {
        let request = this.baseURL;
        let paramCounter = 0;
        for (let param = 0; param < Object.keys(this.params).length; param++) {
            let tmp = Object.keys(this.params)[param] + "=" + Object.values(this.params)[param];
            if (paramCounter == 0) {
                request += "?" + tmp;
            }
            else {
                request += "&" + tmp;
            }
            paramCounter += 1;
        }
        //console.log("WATHER API REQUEST: ", request);
        return request;
    }


    async fetchWeather() {
        let response = await fetch(this.buildRequest());
        let json = await response.json();
        return json;
    }


    getPlaceGeo() {
        // get place coordinates to build correct request
        let coordinates = [];
        let spots = data.spots;
        let currentSpot = '';
        for (let i = 0; i < spots.length; i++) {
            if (spots[i].code == this.placeCode) {
                currentSpot = spots[i];
            }
            else {
                // do nothing
                //console.log("The spot not found");
            }
        }

        try {
            let lat = currentSpot.metadata.location.lat;
            let long = currentSpot.metadata.location.long;
            coordinates.push(lat);
            coordinates.push(long);
        }
        catch (error) {
            console.log(error);
        }
        return coordinates;
    }
    

}
/*
 * dateutils.js
 * Useful tools for working with date and time.
 */

class DateUtils {
    constructor() {
        // do nothing
    }

    static weekday(number) {
        const days = [
            'Вс',
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб',
        ]

        return days[number];
    }
}

/*
 * weatherutils.js
 * Useful tools for working with weather forecast.
 */

 class WeatherUtils {


    constructor () {
        // do nothing
    }


    static windDirection(degrees) {
        let direction = "";
        if (degrees > 22.5 && degrees < 67.5 ) {
            direction = "NE ↙";
        }
        else if (degrees >= 67.5 && degrees < 112.5) {
            direction = "E ←";
        }
        else if (degrees >= 112.5 && degrees < 157.5) {
            direction = "SE ↖";
        }
        else if (degrees >= 157.5 && degrees < 202.5) {
            direction = "S ↑";
        }
        else if (degrees >= 202.5 && degrees < 247.5) {
            direction = "SW ↗";
        }
        else if (degrees >= 247.5 && degrees < 292.5) {
            direction = "W →";
        }
        else if (degrees >= 292.5 && degrees < 337.5) {
            direction = "NW ↘";
        }
        else {
            direction = "N ↓"
        }
        return direction;
    }

    
    static avgTemp(bottom, top) {
        let avg = (bottom + top) / 2;
        return avg
    }


    static temperatureSign(temperature) {
        let sign = "";
        if (temperature < 0) {
            sign = "";
        } else if (temperature > 0) {
            sign = "+";
        } else {
            sign = "";
        }
        return sign;
    }


}
