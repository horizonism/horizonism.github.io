const mode = document.querySelector('.mode');
const body = document.querySelector('body');
const us = document.querySelector('.upper-section');

setDark();

mode.addEventListener(`click`, () => {
    modeToggle();
});

function modeToggle(){
    us.classList.toggle('dark');
    body.classList.toggle('dark');
    mode.classList.toggle('darkmd-btn');
}

function setDark(){
    const date = new Date();
    let dateHours = date.getHours();
    if(date > 12){
        us.classList.add('dark')
        body.classList.add('dark');
    }
    console.log(dateHours)
}