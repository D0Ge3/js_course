'use strict';
let menu=document.querySelector(".menu"), 
    menuItems=document.querySelectorAll(".menu-item"),
    title=document.querySelector(".title"),
    adv=document.querySelector(".adv"),
    questionApple=document.querySelector(".prompt");
let li=document.createElement("li");
li.classList.add("menu-item");
console.log(menuItems);
console.log(menu);
console.log(title);
console.log(adv);
menu.insertBefore(menuItems[2],menuItems[1]);
menu.appendChild(li);
li.textContent="Пятый пункт"
document.body.style.background="url(img/apple_true.jpg)";
title.textContent="Мы продаем только подлинную технику Apple";
adv.remove();
questionApple.textContent=prompt("Как вы относитесь к технике Apple?","");