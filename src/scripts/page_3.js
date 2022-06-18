"use strict"

export let contentToLoad = (function() {
   //create all the necessary variables
   let dynamicContent = document.createElement("div");
   let contactInfo = document.createElement("div");
   let phone   = document.createElement("div");
   let address = document.createElement("div");
   let map     = document.createElement("div");
   
   dynamicContent.classList.add("dynamicContent");
   contactInfo.classList.add("contactInfo");
   phone.classList.add("phone");
   address.classList.add("address");
   map.classList.add("map");

   phone.insertAdjacentHTML("beforeend", "<span>123 456 789</span>");
   address.insertAdjacentHTML("beforeend", "<span> Hollywood Boulevard 42, Los Angeles, USA</span>");

   contactInfo.append(phone, address, map);
   dynamicContent.append(contactInfo);

   return {
      dynamicContent,
   };
}());