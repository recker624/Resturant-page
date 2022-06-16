"use strict"

export let contentToLoad = (function() {
    //create all the necessary variables
    let dynamicContent = document.createElement("div");
    let menu   = document.createElement("div");

    let menuItems = [];
    for(let i=0; i < 5; i++) {
        menuItems[i] = document.createElement("div");
        menuItems[i].classList.add("menuItem");

        let itemImg = document.createElement("div");
        let description = document.createElement("div");
        itemImg.classList.add("menuImg");
        description.classList.add("description");

        menuItems[i].append(itemImg, description);

        menu.append(menuItems[i]);
    }

    menu.classList.add("menu");
    dynamicContent.classList.add("dynamicContent");
    dynamicContent.append(menu);

   return {
      dynamicContent,
   };
}());