let nav = document.querySelector('#nav');
window.addEventListener('scroll', function(){
    let test = document.documentElement.scrollTop;
     if(test > 100){
     nav.classList.add('active');
     }else{
        nav.classList.remove('active');
     }
    // console.log(test);
})

//  navigastion/

let add = document.querySelector('.add');
let menu = document.querySelector('.menu');
let cross = document.querySelector('.cross');


add.addEventListener('click', ()=>{
  menu.classList.add('active');
});


cross.addEventListener('click', ()=>{
    menu.classList.remove('active');
});