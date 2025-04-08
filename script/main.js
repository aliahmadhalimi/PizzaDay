// const navbar = document.querySelector('.navbar');
// window.addEventListener('scroll', (e) => {
//     if(window.scrollY){
//         // console.log('ping was done');
//         navbar.classList.add('navbarActive')
//     }else{
//         // console.log('not done');
//         navbar.classList.remove('navbarActive')
//     }
// })


let nav = document.querySelector(".navbar");
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 300){
        nav.classList.add("navbarActive");
      }else {
        nav.classList.remove("navbarActive");
      }
    }

