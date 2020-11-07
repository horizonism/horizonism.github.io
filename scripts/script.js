const mode = document.querySelector('.mode');

mode.addEventListener(`click`, () => {
    modeT();
});

function modeT(){
    const body = document.querySelector('body');
    const us = document.querySelector('.upper-section');
    us.classList.toggle('dark');
    body.classList.toggle('dark');
}
