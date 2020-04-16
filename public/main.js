const switchBtn = document.querySelector('#switchBtn');
const body = document.querySelector('body');
const btnContent = document.querySelector('.btn-content');

switchBtn.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode');
});