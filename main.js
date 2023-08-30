import './assets/scss/all.scss';
let urlArray = window.location.href.split('/');
let current_page = urlArray[urlArray.length - 1].slice(0, urlArray[urlArray.length - 1].indexOf('.'));
let navbar_links = document.getElementsByClassName('nav-link');


Array.from(navbar_links).forEach(element => {
    element.classList.remove('active');
    let navbar_link = element.innerText.split("\n")[1].toLowerCase() === "admin" ? 'index' : element.innerText.split("\n")[1].toLowerCase();

    if(navbar_link === current_page){
        element.classList.add('active');
    }
  });



console.log("Hello world!");