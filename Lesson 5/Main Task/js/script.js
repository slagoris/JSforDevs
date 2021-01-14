let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let adv = document.querySelector('.adv');
let column = document.querySelectorAll('.column')
let title = document.querySelector('.title');
let bg =  window.document.getElementsByTagName('body');
let question = prompt('Как вы относитесь к технике Apple', 'Я тношусь к технике Apple ');
let promptDiv = document.getElementById('prompt');


menu.insertBefore(menuItem[2], menuItem[1]);
bg[0].style.background= 'url(img/apple_true.jpg) center no-repeat';
title.textContent = 'Мы продаем только подлинную технику Apple';
column[1].removeChild(adv);

promptDiv.textContent = question;