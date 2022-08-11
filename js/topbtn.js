/* 
  1. 스크롤양 감지
*/

const btt=document.querySelector('#back-to-top');
let scrollAmount;
window.addEventListener('scroll',function(){
  scrollAmount=this.scrollY;
  if(scrollAmount>scrollAmount/4){
    btt.classList.add('visible');
  }else{
    btt.classList.remove('visible');
  }
})
btt.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(btt.getAttribute('href')).scrollIntoView({behavior:'smooth'})
})