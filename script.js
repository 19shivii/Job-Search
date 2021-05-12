burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
navList = document.querySelector('.list')
navbtn = document.querySelector('.navbtn')
logo = document.querySelector('.logo')
 


burger.addEventListener('click', ()=>{
    navbtn.classList.toggle('v-resp');
    navList.classList.toggle('v-resp');
    logo.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');
    
})