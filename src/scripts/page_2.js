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
        itemImg.classList.add("itemImg");
        description.classList.add("description");

        description.insertAdjacentHTML("beforeend", `<p>Lorem Ipsum : It is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>`);

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