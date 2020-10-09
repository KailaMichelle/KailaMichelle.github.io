console.log('Hello World')

// NavBar 
const navitem = document.querySelector('.navitem')

// Event listeners
window.addEventListener('resize', windowResize);
navitem.addEventListener('click', collapse);

// Functions
function windowResize(){
    let w = document.documentElement.clientWidth; 
    // let h = document.documentElement.clientHeight; 
    if(w > 791) {
        let btn = document.getElementById('menu-btn')
        btn.checked = false;
        console.log(btn)
    }
}

function collapse(){
    console.log('works')
}




