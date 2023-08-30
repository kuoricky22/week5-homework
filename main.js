import './assets/scss/all.scss';

let current_page = window.location.href.split('/')[5].slice(0, window.location.href.split('/')[5].indexOf('.'));
let navbar_links = document.getElementsByClassName('nav-link');


Array.from(navbar_links).forEach(element => {
    element.classList.remove('active');
    let navbar_link = element.innerText.split("\n")[1].toLowerCase() === "admin" ? 'index' : element.innerText.split("\n")[1].toLowerCase();

    if(navbar_link === current_page){
        element.classList.add('active');
    }
  });



console.log("Hello world!");