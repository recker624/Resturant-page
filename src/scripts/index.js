"use strict"

import '../css/style.css';
import '../css/style_1.css'
import '../css/style_2.css'
import '../css/style_3.css'

import {contentToLoad as page_1} from './page_1';
import {contentToLoad as page_2} from './page_2';
import {contentToLoad as page_3} from './page_3';


let main = (function() {
    let body    = document.querySelector("body");
    let content = document.createElement("div");

    let top     = document.createElement("div");
    let heading = document.createElement("div");
    let tabs    = document.createElement("nav");
    let home    = document.createElement("div");
    let menu    = document.createElement("div");
    let contact = document.createElement("div");
    let dynamicContent;

    function _loadTab() {
        if(this.classList.contains("page_1")) {
            dynamicContent.remove();        
            dynamicContent = page_1.dynamicContent;
            this.classList.add("activeTab");
            menu.classList.remove("activeTab");
            contact.classList.remove("activeTab");
        }
        else if(this.classList.contains("page_2")) {
            dynamicContent.remove();  
            dynamicContent = page_2.dynamicContent;
            this.classList.add("activeTab");
            home.classList.remove("activeTab");
            contact.classList.remove("activeTab");
        }
        else if(this.classList.contains("page_3")) {   
            dynamicContent.remove(); 
            dynamicContent = page_3.dynamicContent;
            this.classList.add("activeTab");
            home.classList.remove("activeTab");
            menu.classList.remove("activeTab");
        }
        body.append(dynamicContent);
    }

    function _setup() {
        heading.insertAdjacentHTML('beforeend', '<span>Parferrito</span>');
        home.insertAdjacentHTML('beforeend', '<span>Home</span>');
        menu.insertAdjacentHTML('beforeend', '<span>Menu</span>');
        contact.insertAdjacentHTML('beforeend', '<span>Contact</span>');

        home.addEventListener("click", _loadTab);
        menu.addEventListener("click", _loadTab);
        contact.addEventListener("click", _loadTab);
    
        //add the relevant css classes, ids etc
        content.classList.add("content");
        top.classList.add("top");
        heading.classList.add("heading");
        tabs.classList.add("tabs");
        home.classList.add("tab", "page_1");
        menu.classList.add("tab", "page_2");
        contact.classList.add("tab", "page_3");
        tabs.append(home, menu, contact);
        heading.append(tabs);
        top.append(heading, tabs);
    
        content.append(top);
    }

    function loadContent() {
        _setup();
        dynamicContent = page_1.dynamicContent;
        home.classList.add("activeTab");
        body.append(content, dynamicContent);
    }

    return {
        loadContent,
    };
}());

main.loadContent();