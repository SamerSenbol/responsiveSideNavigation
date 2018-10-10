var hamburgerButton=document.querySelector('.hamburger_button');
var mobileNave=document.querySelector('.mobile');

function openMobile(){
    mobileNave.classList.add('open');
}

function closeMobile(){
    mobileNave.classList.remove('open');
}

hamburgerButton.addEventListener('click',openMobile);
mobileNave.addEventListener('click',closeMobile);