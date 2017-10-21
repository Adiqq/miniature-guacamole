var active = '';

function addClickHandler(query, handler) {
    var el = document.querySelector(query);
    el.addEventListener('click', handler)
}

window.onload = function () {
    addClickHandler('.menu .home', function () {
        changeActive('home');
    });
    addClickHandler('.menu .about', function (){
        changeActive('about');
    });
    addClickHandler('.menu .contact', function (){
        changeActive('contact');
    });
    addClickHandler('.menu .references', function (){
        changeActive('references');
    });
    changeActive('home');
}

function showActivePage(name){
    var sections = document.querySelectorAll('main section');
    for(var i = 0; i < sections.length; i++){
        if(sections[i].className === name){
            sections[i].style.display = 'block';
        } else{
            sections[i].style.display = 'none';
        }
    }

}


function changeActive(name) {
    if (active === name) return;
    showActivePage(name);

}