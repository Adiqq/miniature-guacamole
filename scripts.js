var active = '';

function addClickHandler(query, handler) {
    var el = document.querySelector(query);
    el.addEventListener('click', handler)
}

window.onload = function () {
    addClickHandler('nav ul li.blog', function () {
        changeActive('blog');
    });
    addClickHandler('nav ul li.about', function (){
        changeActive('about');
    });
    addClickHandler('nav ul li.contact', function (){
        changeActive('contact');
    });
    addClickHandler('nav ul li.skills', function (){
        changeActive('skills');
    });
    changeActive('blog');
}

function showActivePage(name){
    var sections = document.querySelectorAll('div.content');
    for(var i = 0; i < sections.length; i++){
        if(sections[i].className.indexOf(name) !== -1){
            sections[i].style.display = 'block';
        } else{
            sections[i].style.display = 'none';
        }
    }

}

function setActiveMenuItem(name){
    var menuItems = document.querySelectorAll('nav ul li');
    for(var i = 0; i < menuItems.length; i++){
        var element = menuItems[i];
        if(element.className.indexOf(name) !== -1){
            element.className += ' active';
        } else{
            element.className = element.className.replace(' active', '');
        }
    }
}

function changeActive(name) {
    if (active === name) return;
    active = name;
    setActiveMenuItem(name);
    showActivePage(name);

}