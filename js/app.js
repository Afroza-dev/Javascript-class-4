let modeBtn = document.querySelector('.modeBtn')
let body = document.querySelector('body')

function darkMode() {
   body.classList.toggle('darkMode');
}

modeBtn.addEventListener('click', darkMode);

let menuBtn = document.querySelector('nav .menuBtn')
let sidebar = document.querySelector(".sidebar");


function openSideBar(){
   sidebar.classList.add('active');
}

menuBtn.addEventListener('click', openSideBar);

let closeBtn = document.querySelector('.closeBtn');
function closeSidebar(event) {
   if (
     event.target.classList.contains("sidebar") ||
     event.target.classList.contains("fa-xmark")
   ) {
     sidebar.classList.remove("active");
   }
 }


closeBtn.addEventListener('click', closeSidebar);
sidebar.addEventListener('click', closeSidebar)