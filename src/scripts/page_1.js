"use strict"

export let contentToLoad = (function() {
   //create all the necessary variables
   let dynamicContent = document.createElement("div");
   let intro   = document.createElement("div");
   let text1   = document.createElement("div");
   let text2   = document.createElement("div");
   let chef    = document.createElement("div");
   let text3   = document.createElement("div");


   
   //clean all the dynamic content from the page
   dynamicContent.innerHTML = "";
   //insert text content in their right places
   text1.insertAdjacentHTML('beforeend', '<span>Best Parfait in your country</span>');
   text2.insertAdjacentHTML('beforeend', '<span>Made with passion since 1950</span>');
   text3.insertAdjacentHTML('beforeend', '<span>Order online or visit us!</span>');

   //add relevant css classes
   dynamicContent.classList.add("dynamicContent");
   intro.classList.add("intro");
   text1.classList.add("intro-text");
   text2.classList.add("intro-text");
   chef.classList.add("chef");
   text3.classList.add("intro-text");

   //now insert elements in the right parent element
   intro.append(text1, text2, chef, text3);
   dynamicContent.append(intro);

   return {
      dynamicContent,
   };
}());