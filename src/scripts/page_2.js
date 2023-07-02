"use strict"
import CheesecakeBerryParfaits from "../images/CheesecakeBerryParfaits.jpg";
import AmarettoPeachParfaits from "../images/AmarettoPeachParfaits.jpg";
import EasyBerryCheesecakeParfaits from "../images/EasyBerryCheesecakeParfaits.jpg";
import ClassicBerryBlissParfaits from "../images/ClassicBerryBlissParfaits.jpg";
import DecadentChocolateDelightParfaits from "../images/DecadentChocolateDelightParfaits.jpg";

export let contentToLoad = (function() {
    //create all the necessary variables
    let dynamicContent = document.createElement("div");
    let menu   = document.createElement("div");
    let menuItemsData = {
      image_1: {
        image: CheesecakeBerryParfaits, 
        title: "Cheesecake Berry",
        description: "Creamy vanilla cheesecake mousse layered with fresh strawberries and blueberries, topped with a graham cracker crumble for an irresistible crust texture. A timeless blend of rich cheesecake and fresh berries."
      },
      image_2: {
        image: AmarettoPeachParfaits,
        title: "Amaretto Peach",
        description: "Ripe peaches soaked in amaretto syrup, layered with creamy vanilla yogurt. Topped with crushed amaretto cookies for a touch of almond delight."
      },
      image_3: {
        image: EasyBerryCheesecakeParfaits,
        title: "Easy Berry Cheesecake",
        description: "A simple yet delightful combination of creamy cheesecake filling layered with fresh mixed berries. Each spoonful offers a harmonious blend of tangy and sweet flavors, making it a perfect treat for any occasion."
      },
      image_4: {
        image: ClassicBerryBlissParfaits,
        title: "Classic Berry Bliss",
        description: "Layers of luscious vanilla yogurt, mixed with fresh seasonal berries, and topped with a crunchy granola topping. A delightful blend of tartness and sweetness that will awaken your taste buds."
      },
      image_5: {
        image: DecadentChocolateDelightParfaits,
        title: "Decadent Chocolate Delight",
        description: "A delicate combination of decadent chocolate and vanilla yogurt. Topped with a crunchy granola topping for a delicious and satisfying dessert."
      }
    }

  
    let menuItems = [];
    for(let i=0; i < Object.keys(menuItemsData).length; i++) {
      menuItems[i] = document.createElement("div");
      menuItems[i].classList.add("menuItem");

      let itemImg = document.createElement("div");
      let image = document.createElement("img");
      image.src = menuItemsData[Object.keys(menuItemsData)[i]].image;
      image.alt = "CheesecakeBerryParfaits";

      let description = document.createElement("div");
      
      itemImg.classList.add("itemImg");
      description.classList.add("description");
      description.insertAdjacentHTML("afterbegin", `<h3>${menuItemsData[Object.keys(menuItemsData)[i]].title}</h3>`);
      description.insertAdjacentHTML("beforeend", `<p>${menuItemsData[Object.keys(menuItemsData)[i]].description}</p>`);

      itemImg.append(image);
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