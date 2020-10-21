console.log('Hello World')

// Variables
const about = document.getElementById('navitem1')
const projects = document.getElementById('navitem3')
const contact = document.getElementById('navitem4')
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')
const travel = document.getElementById('travel')
const travelDescrip = document.getElementById('travel-descrip')
const wayfarer = document.getElementById('wayfarer')
const wayfarerDescrip = document.getElementById('wayfarer-descrip')
const crud = document.getElementById('crud')
const crudDescrip = document.getElementById('crud-descrip')
const camphumor = document.getElementById('camphumor')
const campDescrip = document.getElementById('camphumor-descrip')
const tamagotchi = document.getElementById('tamagotchi')
const tamagotchiDescrip = document.getElementById('tamagotchi-descrip')


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


