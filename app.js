console.log('Hello World')

// NavBar 
const about = document.getElementById('navitem1')
const skills = document.getElementById('navitem2')
const projects = document.getElementById('navitem3')
const contact = document.getElementById('navitem4')
const btn = document.getElementById('menu-btn')

// Event listeners
window.addEventListener('resize', windowResize);
about.addEventListener('click', collapse);
skills.addEventListener('click', collapse);
projects.addEventListener('click', collapse);
contact.addEventListener('click', collapse);

// Functions
function windowResize(){
    let w = document.documentElement.clientWidth; 
    if(w > 791) {
        let btn = document.getElementById('menu-btn')
        btn.checked = false;
        console.log(btn)
    }
}

function collapse(){
    console.log('works')
    console.log(btn.checked)
    btn.checked = false;
}




