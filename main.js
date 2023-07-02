const nav = document.querySelector('.nav-links');
const openNavBtn = document.querySelector('#nav-toggle-open');
const closeNavBtn = document.querySelector('#nav-toggle-close');

openNavBtn.addEventListener('click',()=>{
    nav.style.display =  'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';

})

closeNavBtn.addEventListener('click',()=>{
    nav.style.display =  'none';
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'inline-block';

})