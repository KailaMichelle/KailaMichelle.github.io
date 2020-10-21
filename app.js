console.log('Hello World')

// Variables
const about = document.getElementById('navitem1')
const projects = document.getElementById('navitem3')
const contact = document.getElementById('navitem4')
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')

// Event listeners
window.addEventListener('resize', windowResize);
window.addEventListener('scroll', scroll)
about.addEventListener('click', collapse);
projects.addEventListener('click', collapse);
contact.addEventListener('click', collapse);

// Functions
// Hamburger Menu
function windowResize(){
    let w = document.documentElement.clientWidth; 
    if(w > 791) {
        let btn = document.getElementById('menu-btn')
        btn.checked = false;
        console.log(btn)
    }
}

// Collapse NavBar 
function collapse(){
    console.log('works')
    console.log(btn.checked)
    btn.checked = false;
}

// NavBar shadow on scroll
function scroll(){
    console.log(nav)
    if(window.scrollY > 30) {
        nav.classList.add('floatingNav');
    } else {
        nav.classList.remove('floatingNav');
    }
}


