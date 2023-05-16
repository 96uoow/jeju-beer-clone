const menuBar = document.querySelector('.mb-menu-bar .bar');
const menuClose = document.querySelector('.mb-menu-bar .close');
const menu = document.querySelector('.menu-modal');
const mbMenu = document.querySelector('.mb')

menuBar.addEventListener('click',function(){
   menu.classList.add('show');
   menuClose.classList.add('show');
   menuBar.classList.add('hide');
   mbMenu.classList.add('fixed');
});
menuClose.addEventListener('click',function(){
  menu.classList.remove('show');
  menuClose.classList.remove('show');
  menuBar.classList.remove('hide');
  mbMenu.classList.remove('fixed');
});

const share = document.querySelector('.modal-share .share');
const modalShare = document.querySelector('.modal-share');

share.addEventListener('click',function(){
  modalShare.classList.add('show');
});
modalShare.addEventListener('click',function(){
  modalShare.classList.remove('show');
});

new Swiper(".swiper", {
  autoplay:{
   delay: 0,
   disableOnInteraction: false,
},
speed:4000,
loop:true,
slidesPerView: 6,
loopAdditionalSlides:2,
});


const toTopEl = document.querySelector('.gotop');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 300){
    gsap.to(toTopEl, .2,{
      display: 'block'
    });
  }else{
    gsap.to(toTopEl, .2,{
      display: 'none'
    });
  }
}))

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

