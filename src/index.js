"use strict"

import './style.css';
// import './style_1.css'
import './style_2.css'
// import './style_3.css'

// import {contentToLoad as page_1} from './page_1';
import {contentToLoad as page_2} from './page_2';
// import {contentToLoad as page_3} from './page_3';


let main = (function() {
    let body    = document.querySelector("body");
    let content = document.createElement("div");

    let top     = document.createElement("div");
    let heading = document.createElement("div");
    let tabs    = document.createElement("nav");
    let home    = document.createElement("div");
    let menu    = document.createElement("div");
    let contact = document.createElement("div");
    
    function _setup() {
        heading.insertAdjacentHTML('beforeend', '<span>Heading</span>');
        home.insertAdjacentHTML('beforeend', '<span>Home</span>');
        menu.insertAdjacentHTML('beforeend', '<span>Menu</span>');
        contact.insertAdjacentHTML('beforeend', '<span>Contact</span>');
    
        //add the relevant css classes, ids etc
        content.classList.add("content");
        top.classList.add("top");
        heading.classList.add("heading");
        tabs.classList.add("tabs");
        home.classList.add("tab");
        menu.classList.add("tab");
        contact.classList.add("tab");
        tabs.append(home, menu, contact);
        heading.append(tabs);
        top.append(heading, tabs);
    
        content.append(top);
    }

    function loadContent() {
        _setup();
        let dynamicContent = page_2.dynamicContent;
        body.append(content, dynamicContent);
    }

    return {
        loadContent,
    };
}());

main.loadContent();