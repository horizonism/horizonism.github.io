const mode = document.querySelector('.mode');

mode.addEventListener(`click`, () => {
    modeToggle();
});

function modeToggle(){
    const body = document.querySelector('body');
    const us = document.querySelector('.upper-section');
    us.classList.toggle('dark');
    body.classList.toggle('dark');
    mode.classList.toggle('darkmd-btn');
}
