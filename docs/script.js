/*
Copyright © Zewutz 2021 - https://github.com/zewutz (https://esanta.me/discord-bot)
Description: Source code for Discord Bot eSanta
Author: Zewutz
Version: 1.0.0
*/
window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("rainbowText");
    for (let i = 0; i < elements.length; i++) {
      generateRainbowText(elements[i]);
    }
  });
  
  function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
  }